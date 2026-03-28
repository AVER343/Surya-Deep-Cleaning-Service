// AUTO-GENERATED (DUMMY) by scripts/generate-booking-catalog.ts. Do not edit by hand.

export interface BookingCatalogSnapshot {
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
}

export const BOOKING_CATALOG: BookingCatalogSnapshot = {
    "services": [
        {
            "id": "9f1c3a72-6b8d-4e91-9c52-2f4a7d6e8b10",
            "slug": "regular-maintenance",
            "name": "Regular Maintenance",
            "description": "Set your schedule and let us handle the rest. Enjoy a consistently spotless home with our reliable, stress-free recurring service.",
            "globalStartingPrice": 99
        },
        {
            "id": "2c7e5f19-3a44-4b2d-8f61-9d3a7b5c1e22",
            "slug": "deep-cleaning",
            "name": "Deep Cleaning",
            "description": "Transform your home with our most detailed clean. Eliminates built-up dirt and restores neglected spaces to pristine condition.",
            "globalStartingPrice": 99
        },
        {
            "id": "7a8d1c34-5f92-4e6b-a713-3c9f2d8b4a55",
            "slug": "move-in-move-out",
            "name": "Move-In / Move-Out",
            "description": "Ensure a flawless handoff. We prepare your vacant property to guarantee you get your deposit back.",
            "globalStartingPrice": 99
        },
        {
            "id": "4e2b9d61-8c73-4f15-b2a4-6d1e7c9f3a88",
            "slug": "airbnb-turnover",
            "name": "Airbnb Turnover",
            "description": "Maximize your 5-star reviews. Keep guests happy with lightning-fast turnovers and hotel-quality cleaning standards.",
            "globalStartingPrice": 99
        },
        {
            "id": "1b6f3d82-9a45-4c7e-8d21-5f3a9b7e2c66",
            "slug": "post-construction",
            "name": "Post-Construction",
            "description": "Reveal the beauty of your new space. We remove hazardous fine dust, residue, and debris so you can move in safely.",
            "globalStartingPrice": 99
        },
        {
            "id": "8d3a7c51-2f94-4b6e-a182-7c5e1d9a3f44",
            "slug": "office-cleaning",
            "name": "Office Cleaning",
            "description": "Boost team productivity with an immaculate workspace. Professional, discreet cleaning for offices and small businesses.",
            "globalStartingPrice": 99
        }
    ],
    "locations": [
        {
            "id": "0",
            "name": "St. Petersburg"
        },
        {
            "id": "1",
            "name": "South Pasadena"
        },
        {
            "id": "2",
            "name": "Pinellas Park"
        },
        {
            "id": "3",
            "name": "Kenneth City"
        },
        {
            "id": "4",
            "name": "Lealman"
        },
        {
            "id": "5",
            "name": "West Lealman"
        },
        {
            "id": "6",
            "name": "Gulfport"
        },
        {
            "id": "7",
            "name": "Seminole"
        },
        {
            "id": "8",
            "name": "Treasure Island"
        },
        {
            "id": "9",
            "name": "Madeira Beach"
        },
        {
            "id": "10",
            "name": "Bay Pines"
        }
    ],
    "addOns": [],
    "addOnPricingRules": [],
    "basePricing": [],
    "generatedAt": "2026-03-28T13:03:41.132Z"
};

export default BOOKING_CATALOG;
