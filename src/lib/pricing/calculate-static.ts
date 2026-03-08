import BOOKING_CATALOG, { type BookingCatalogSnapshot } from "../../generated/booking-catalog";

export interface StaticPricingRequest {
    catalog?: BookingCatalogSnapshot;
    serviceId: string;
    locationId?: string | null;
    bedrooms: number;
    bathrooms: number;
    sqft: number;
    frequency: BookingCatalogSnapshot["basePricing"][number]["frequency"];
    addOnIds: string[];
}

export interface StaticPricingResult {
    basePrice: number;
    addOnTotal: number;
    finalPrice: number;
    breakdown: {
        base: number;
        addOns: Array<{
            id: string;
            name: string;
            price: number;
        }>;
    };
}

export function calculateStaticPrice({
    catalog = BOOKING_CATALOG,
    serviceId,
    locationId,
    bedrooms,
    bathrooms,
    sqft,
    frequency,
    addOnIds,
}: StaticPricingRequest): StaticPricingResult {
    const queryLocationId = locationId && locationId.trim() !== "" ? locationId : null;

    const basePriceRecords = catalog.basePricing.filter(
        (row) =>
            row.serviceId === serviceId &&
            row.bedrooms === bedrooms &&
            row.bathrooms === bathrooms &&
            row.frequency === frequency &&
            (row.locationId === queryLocationId || row.locationId === null),
    );

    let selectedBase = basePriceRecords.find((row) => row.locationId === queryLocationId);
    if (!selectedBase) {
        selectedBase = basePriceRecords.find((row) => row.locationId === null);
    }

    if (!selectedBase) {
        throw new Error("Base pricing not found for these parameters.");
    }

    const basePrice = selectedBase.basePrice;
    let addOnTotal = 0;
    const addOnBreakdown: StaticPricingResult["breakdown"]["addOns"] = [];

    for (const addOnId of addOnIds) {
        const addOn = catalog.addOns.find((entry) => entry.id === addOnId);
        if (!addOn) continue;

        let price = 0;

        if (addOn.priceType === "flat" || addOn.priceType === "per_unit") {
            price = addOn.basePrice ?? 0;
        } else if (addOn.priceType === "rule_based") {
            const rules = catalog.addOnPricingRules.filter((rule) => rule.addOnId === addOnId);
            const matchedRule = rules.find((rule) => {
                const bedMatch =
                    (rule.minBedrooms === null || bedrooms >= rule.minBedrooms) &&
                    (rule.maxBedrooms === null || bedrooms <= rule.maxBedrooms);
                const sqftMatch =
                    (rule.minSqft === null || sqft >= rule.minSqft) &&
                    (rule.maxSqft === null || sqft <= rule.maxSqft);
                return bedMatch && sqftMatch;
            });

            if (matchedRule) {
                if (matchedRule.adjustmentType === "flat") {
                    price = matchedRule.flatAmount ?? 0;
                } else if (matchedRule.adjustmentType === "percentage") {
                    price = basePrice * ((matchedRule.percentage ?? 0) / 100);
                }
            } else {
                price = addOn.basePrice ?? 0;
            }
        } else {
            price = addOn.basePrice ?? 0;
        }

        addOnTotal += price;
        addOnBreakdown.push({
            id: addOn.id,
            name: addOn.name,
            price,
        });
    }

    return {
        basePrice,
        addOnTotal,
        finalPrice: basePrice + addOnTotal,
        breakdown: {
            base: basePrice,
            addOns: addOnBreakdown,
        },
    };
}
