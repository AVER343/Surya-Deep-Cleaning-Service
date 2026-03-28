import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { eq, isNull } from "drizzle-orm";
import { db } from "../src/db/index";
import {
    addOnPricingRules,
    addOns,
    basePricing,
    locations,
    services,
} from "../src/db/schema";
import { LOCATION_CONTENT } from "../src/content/locations";
import { SERVICE_CONTENT } from "../src/content/services";

import { mkdirSync, writeFileSync } from "node:fs";

if (!process.env.DATABASE_URL) {
    console.warn("DATABASE_URL is not set. Generating a dummy booking catalog for demo.");
    const dummySnapshot: Snapshot = {
        services: SERVICE_CONTENT.map((s) => ({
            id: s.id,
            slug: s.slug,
            name: s.name,
            description: s.shortDescription,
            globalStartingPrice: 99,
        })),
        locations: LOCATION_CONTENT.map((l, i) => ({
            id: String(i),
            name: l.name,
        })),
        addOns: [],
        addOnPricingRules: [],
        basePricing: [],
        generatedAt: new Date().toISOString()
    };
    
    const output = `// AUTO-GENERATED (DUMMY) by scripts/generate-booking-catalog.ts. Do not edit by hand.\n\nexport interface BookingCatalogSnapshot {\n    services: Array<{\n        id: string;\n        slug: string;\n        name: string;\n        description: string;\n        globalStartingPrice: number;\n    }>;\n    locations: Array<{\n        id: string;\n        name: string;\n    }>;\n    addOns: Array<{\n        id: string;\n        name: string;\n        description: string;\n        basePrice: number | null;\n        unitLabel: string | null;\n        priceType: "flat" | "per_unit" | "range" | "rule_based";\n    }>;\n    addOnPricingRules: Array<{\n        id: string;\n        addOnId: string;\n        minBedrooms: number | null;\n        maxBedrooms: number | null;\n        minSqft: number | null;\n        maxSqft: number | null;\n        adjustmentType: "percentage" | "flat";\n        flatAmount: number | null;\n        percentage: number | null;\n    }>;\n    basePricing: Array<{\n        serviceId: string;\n        locationId: string | null;\n        bedrooms: number;\n        bathrooms: number;\n        frequency: "one_time" | "weekly" | "bi_weekly" | "monthly";\n        basePrice: number;\n    }>;\n    generatedAt: string;\n}\n\nexport const BOOKING_CATALOG: BookingCatalogSnapshot = ${JSON.stringify(dummySnapshot, null, 4)};\n\nexport default BOOKING_CATALOG;\n`;

    const outputPath = path.resolve(process.cwd(), "src/generated/booking-catalog.ts");
    mkdirSync(path.dirname(outputPath), { recursive: true });
    writeFileSync(outputPath, output, "utf8");
    console.log(`Generated dummy booking catalog: ${outputPath}`);
    process.exit(0);
}

type Snapshot = {
    services: Array<{
        id: string;
        slug: string;
        name: string;
        description: string;
        globalStartingPrice: number;
    }>;
    locations: Array<{
        id: string;
        name: string;
    }>;
    addOns: Array<{
        id: string;
        name: string;
        description: string;
        basePrice: number | null;
        unitLabel: string | null;
        priceType: "flat" | "per_unit" | "range" | "rule_based";
    }>;
    addOnPricingRules: Array<{
        id: string;
        addOnId: string;
        minBedrooms: number | null;
        maxBedrooms: number | null;
        minSqft: number | null;
        maxSqft: number | null;
        adjustmentType: "percentage" | "flat";
        flatAmount: number | null;
        percentage: number | null;
    }>;
    basePricing: Array<{
        serviceId: string;
        locationId: string | null;
        bedrooms: number;
        bathrooms: number;
        frequency: "one_time" | "weekly" | "bi_weekly" | "monthly";
        basePrice: number;
    }>;
    generatedAt: string;
};

function toNumber(value: string | number | null | undefined): number | null {
    if (value === null || value === undefined) return null;
    return Number(value);
}

async function main() {
    const [serviceRows, locationRows, addOnRows, ruleRows, basePricingRows] = await Promise.all([
        db.select({
            id: services.id,
            name: services.name,
            description: services.description,
        }).from(services).where(eq(services.isActive, true)),
        db.select({
            id: locations.id,
            name: locations.name,
        }).from(locations).where(isNull(locations.deletedAt)),
        db.select({
            id: addOns.id,
            name: addOns.name,
            description: addOns.description,
            basePrice: addOns.basePrice,
            unitLabel: addOns.unitLabel,
            priceType: addOns.priceType,
        }).from(addOns).where(eq(addOns.isActive, true)),
        db.select({
            id: addOnPricingRules.id,
            addOnId: addOnPricingRules.addOnId,
            minBedrooms: addOnPricingRules.minBedrooms,
            maxBedrooms: addOnPricingRules.maxBedrooms,
            minSqft: addOnPricingRules.minSqft,
            maxSqft: addOnPricingRules.maxSqft,
            adjustmentType: addOnPricingRules.adjustmentType,
            flatAmount: addOnPricingRules.flatAmount,
            percentage: addOnPricingRules.percentage,
        }).from(addOnPricingRules),
        db.select({
            serviceId: basePricing.serviceId,
            locationId: basePricing.locationId,
            bedrooms: basePricing.bedrooms,
            bathrooms: basePricing.bathrooms,
            frequency: basePricing.frequency,
            basePrice: basePricing.basePrice,
        }).from(basePricing).where(isNull(basePricing.deletedAt)),
    ]);

    const serviceRowsById = new Map(serviceRows.map((service) => [service.id, service]));
    const locationRowsByName = new Map(locationRows.map((location) => [location.name, location]));

    for (const service of SERVICE_CONTENT) {
        if (!serviceRowsById.has(service.id)) {
            throw new Error(`Active DB service not found for content entry: ${service.name} (${service.id})`);
        }
    }

    for (const location of LOCATION_CONTENT) {
        for (const bookingName of location.bookingLocationNames) {
            if (!locationRowsByName.has(bookingName)) {
                throw new Error(
                    `Booking location mapping failed for ${location.slug}. Missing DB location: ${bookingName}`,
                );
            }
        }
    }

    const snapshot: Snapshot = {
        services: SERVICE_CONTENT.map((service) => {
            const dbService = serviceRowsById.get(service.id);
            const prices = basePricingRows
                .filter((row) => row.serviceId === service.id)
                .map((row) => Number(row.basePrice));

            if (prices.length === 0) {
                throw new Error(`No pricing rows found for service: ${service.name}`);
            }

            return {
                id: service.id,
                slug: service.slug,
                name: dbService?.name ?? service.name,
                description: dbService?.description ?? service.shortDescription,
                globalStartingPrice: Math.min(...prices),
            };
        }),
        locations: locationRows
            .map((location) => ({
                id: location.id,
                name: location.name,
            }))
            .sort((a, b) => a.name.localeCompare(b.name)),
        addOns: addOnRows
            .map((addOn) => ({
                id: addOn.id,
                name: addOn.name,
                description: addOn.description ?? "",
                basePrice: toNumber(addOn.basePrice),
                unitLabel: addOn.unitLabel ?? null,
                priceType: addOn.priceType,
            }))
            .sort((a, b) => a.name.localeCompare(b.name)),
        addOnPricingRules: ruleRows.map((rule) => ({
            id: rule.id,
            addOnId: rule.addOnId,
            minBedrooms: rule.minBedrooms,
            maxBedrooms: rule.maxBedrooms,
            minSqft: rule.minSqft,
            maxSqft: rule.maxSqft,
            adjustmentType: rule.adjustmentType,
            flatAmount: toNumber(rule.flatAmount),
            percentage: toNumber(rule.percentage),
        })),
        basePricing: basePricingRows.map((row) => ({
            serviceId: row.serviceId,
            locationId: row.locationId,
            bedrooms: row.bedrooms,
            bathrooms: row.bathrooms,
            frequency: row.frequency,
            basePrice: Number(row.basePrice),
        })),
        generatedAt: new Date().toISOString(),
    };

    const output = `// AUTO-GENERATED by scripts/generate-booking-catalog.ts. Do not edit by hand.\n\nexport interface BookingCatalogSnapshot {\n    services: Array<{\n        id: string;\n        slug: string;\n        name: string;\n        description: string;\n        globalStartingPrice: number;\n    }>;\n    locations: Array<{\n        id: string;\n        name: string;\n    }>;\n    addOns: Array<{\n        id: string;\n        name: string;\n        description: string;\n        basePrice: number | null;\n        unitLabel: string | null;\n        priceType: \"flat\" | \"per_unit\" | \"range\" | \"rule_based\";\n    }>;\n    addOnPricingRules: Array<{\n        id: string;\n        addOnId: string;\n        minBedrooms: number | null;\n        maxBedrooms: number | null;\n        minSqft: number | null;\n        maxSqft: number | null;\n        adjustmentType: \"percentage\" | \"flat\";\n        flatAmount: number | null;\n        percentage: number | null;\n    }>;\n    basePricing: Array<{\n        serviceId: string;\n        locationId: string | null;\n        bedrooms: number;\n        bathrooms: number;\n        frequency: \"one_time\" | \"weekly\" | \"bi_weekly\" | \"monthly\";\n        basePrice: number;\n    }>;\n    generatedAt: string;\n}\n\nexport const BOOKING_CATALOG: BookingCatalogSnapshot = ${JSON.stringify(snapshot, null, 4)};\n\nexport default BOOKING_CATALOG;\n`;

    const outputPath = path.resolve(process.cwd(), "src/generated/booking-catalog.ts");
    await mkdir(path.dirname(outputPath), { recursive: true });
    await writeFile(outputPath, output, "utf8");
    console.log(`Generated booking catalog: ${outputPath}`);
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
