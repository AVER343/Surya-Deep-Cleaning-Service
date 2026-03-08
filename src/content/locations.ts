export interface LocationContent {
    slug: string;
    name: string;
    stateCode: string;
    stateName: string;
    bookingLocationNames: string[];
    intro: string;
    coverageCopy: string;
    neighborhoods: string[];
    nearbyAreas: string[];
    metaTitle: string;
    metaDescription: string;
    faqIntro: string;
}

export const LOCATION_CONTENT: LocationContent[] = [
    {
        slug: "st-petersburg",
        name: "St. Petersburg",
        stateCode: "FL",
        stateName: "Florida",
        bookingLocationNames: ["St. Petersburg"],
        intro:
            "Professional house cleaning for busy homeowners, condo residents, and rental hosts across St. Petersburg.",
        coverageCopy:
            "We serve homes across St. Petersburg with reliable arrival windows, checklist-driven cleanings, and flexible booking for recurring, deep, and transition services.",
        neighborhoods: [
            "Downtown St. Petersburg",
            "Historic Old Northeast",
            "Kenwood",
            "Snell Isle",
            "Crescent Lake",
        ],
        nearbyAreas: ["Gulfport", "South Pasadena", "Treasure Island", "Lealman"],
        metaTitle: "House Cleaning in St. Petersburg, FL | Home Cleaning & Co",
        metaDescription:
            "Book house cleaning in St. Petersburg, FL with service options for maintenance, deep cleaning, move-out cleaning, and short-term rental turnovers.",
        faqIntro:
            "Answers for St. Petersburg homeowners booking recurring, deep, and move-focused cleaning services.",
    },
    {
        slug: "south-pasadena",
        name: "South Pasadena",
        stateCode: "FL",
        stateName: "Florida",
        bookingLocationNames: ["South Pasadena"],
        intro:
            "Dependable home cleaning in South Pasadena for waterfront homes, condos, and busy households that want predictable quality.",
        coverageCopy:
            "Our South Pasadena service area supports routine housekeeping, deeper reset visits, and move-focused cleanings with flexible scheduling and clear pricing.",
        neighborhoods: [
            "Pasadena Isle",
            "Bay Island",
            "Sunset Drive South",
            "Shore Drive South",
            "Pasadena Point",
        ],
        nearbyAreas: ["St. Petersburg", "Gulfport", "Treasure Island", "Madeira Beach"],
        metaTitle: "House Cleaning in South Pasadena, FL | Home Cleaning & Co",
        metaDescription:
            "Schedule house cleaning in South Pasadena, FL for recurring upkeep, deep cleaning, move-in or move-out visits, and tailored home service plans.",
        faqIntro:
            "Questions South Pasadena homeowners often ask before scheduling maintenance or one-time cleaning services.",
    },
    {
        slug: "pinellas-park",
        name: "Pinellas Park",
        stateCode: "FL",
        stateName: "Florida",
        bookingLocationNames: ["Pinellas Park"],
        intro:
            "Cleaning services in Pinellas Park designed for busy schedules, high-traffic households, and reliable recurring care.",
        coverageCopy:
            "We serve Pinellas Park with flexible scheduling, detail-minded teams, and service options that cover both routine maintenance and higher-effort reset cleaning.",
        neighborhoods: [
            "Mainlands",
            "Skyview Terrace",
            "Bon Park",
            "Pinellas Farms",
            "Northfield",
        ],
        nearbyAreas: ["Kenneth City", "Lealman", "St. Petersburg", "Largo"],
        metaTitle: "House Cleaning in Pinellas Park, FL | Home Cleaning & Co",
        metaDescription:
            "Recurring and one-time house cleaning in Pinellas Park, FL with options for deep cleaning, move-out cleaning, and short-term rental turnovers.",
        faqIntro:
            "What Pinellas Park homeowners usually ask before booking a recurring clean, deep clean, or move-focused service.",
    },
    {
        slug: "kenneth-city",
        name: "Kenneth City",
        stateCode: "FL",
        stateName: "Florida",
        bookingLocationNames: ["Kenneth City"],
        intro:
            "House cleaning in Kenneth City for homeowners who want dependable upkeep, detailed resets, and easier scheduling.",
        coverageCopy:
            "Our Kenneth City visits are designed to keep smaller homes and family properties consistently clean with flexible recurring and one-time service options.",
        neighborhoods: [
            "58th Street North corridor",
            "54th Avenue North area",
            "46th Avenue North area",
            "Park Boulevard corridor",
            "Residential blocks near 66th Street",
        ],
        nearbyAreas: ["Pinellas Park", "Lealman", "St. Petersburg", "Seminole"],
        metaTitle: "House Cleaning in Kenneth City, FL | Home Cleaning & Co",
        metaDescription:
            "Book house cleaning in Kenneth City, FL for maintenance visits, deep cleaning, move-related service, and flexible home cleaning support.",
        faqIntro:
            "Kenneth City booking guidance for service frequency, what is included, and how pricing is structured.",
    },
    {
        slug: "lealman",
        name: "Lealman",
        stateCode: "FL",
        stateName: "Florida",
        bookingLocationNames: ["Lealman"],
        intro:
            "Practical, reliable home cleaning in Lealman for households that need straightforward booking and repeatable quality.",
        coverageCopy:
            "We help Lealman homeowners stay ahead of dust, traffic, and day-to-day buildup with maintenance plans and detail-focused one-time visits.",
        neighborhoods: [
            "Lealman Avenue corridor",
            "49th Street North area",
            "38th Avenue North area",
            "North Lealman residential blocks",
            "South Lealman neighborhoods",
        ],
        nearbyAreas: ["West Lealman", "Kenneth City", "Pinellas Park", "St. Petersburg"],
        metaTitle: "House Cleaning in Lealman, FL | Home Cleaning & Co",
        metaDescription:
            "House cleaning services in Lealman, FL for recurring maintenance, deep cleaning, move-in or move-out needs, and more.",
        faqIntro:
            "Helpful Lealman-specific answers about timing, supplies, and which cleaning service fits your home best.",
    },
    {
        slug: "west-lealman",
        name: "West Lealman",
        stateCode: "FL",
        stateName: "Florida",
        bookingLocationNames: ["West Lealman"],
        intro:
            "West Lealman home cleaning for clients who need a dependable team, transparent pricing, and flexible appointment windows.",
        coverageCopy:
            "Our West Lealman service area supports regular housekeeping, heavier first-time resets, and cleaning plans that fit around family routines.",
        neighborhoods: [
            "46th Avenue North corridor",
            "Tyrone-adjacent residential blocks",
            "58th Street North area",
            "Northwest Lealman neighborhoods",
            "Central West Lealman homes",
        ],
        nearbyAreas: ["Lealman", "Kenneth City", "St. Petersburg", "Treasure Island"],
        metaTitle: "House Cleaning in West Lealman, FL | Home Cleaning & Co",
        metaDescription:
            "Professional house cleaning in West Lealman, FL with recurring, deep, move-focused, and rental-ready service options.",
        faqIntro:
            "Common West Lealman questions on booking, pricing, and what to expect on cleaning day.",
    },
    {
        slug: "gulfport",
        name: "Gulfport",
        stateCode: "FL",
        stateName: "Florida",
        bookingLocationNames: ["Gulfport"],
        intro:
            "House cleaning in Gulfport for homeowners, bungalows, and short-term rental properties that need consistent presentation.",
        coverageCopy:
            "We help Gulfport clients stay ready for everyday living, guest arrivals, and seasonal refreshes with detailed, checklist-led cleaning visits.",
        neighborhoods: [
            "Gulfport Waterfront District",
            "Art District",
            "Town Shores",
            "Pasadena Yacht and Country Club area",
            "Beach Boulevard neighborhood",
        ],
        nearbyAreas: ["South Pasadena", "St. Petersburg", "Treasure Island", "Seminole"],
        metaTitle: "House Cleaning in Gulfport, FL | Home Cleaning & Co",
        metaDescription:
            "Book house cleaning in Gulfport, FL for recurring care, deep cleaning, move-in or move-out service, and short-term rental support.",
        faqIntro:
            "Gulfport-specific booking answers for recurring care, deep cleaning, and guest-ready turnover service.",
    },
    {
        slug: "seminole",
        name: "Seminole",
        stateCode: "FL",
        stateName: "Florida",
        bookingLocationNames: ["Seminole"],
        intro:
            "Flexible house cleaning in Seminole for family homes, condos, and busy households that want reliable recurring support.",
        coverageCopy:
            "Our Seminole service coverage combines consistent maintenance visits with deeper one-time cleaning options for move timelines, seasonal resets, and special prep.",
        neighborhoods: [
            "Seminole Lake Country Club area",
            "Oakhurst",
            "Bardmoor-adjacent neighborhoods",
            "Park Boulevard corridor",
            "Seminole City Center area",
        ],
        nearbyAreas: ["Largo", "Kenneth City", "Bay Pines", "Madeira Beach"],
        metaTitle: "House Cleaning in Seminole, FL | Home Cleaning & Co",
        metaDescription:
            "Schedule house cleaning in Seminole, FL for weekly upkeep, deep cleaning, move-out cleaning, and flexible one-time service options.",
        faqIntro:
            "Seminole homeowner FAQs covering service frequency, pricing factors, and what our cleaners bring to each visit.",
    },
    {
        slug: "treasure-island",
        name: "Treasure Island",
        stateCode: "FL",
        stateName: "Florida",
        bookingLocationNames: ["Treasure Island"],
        intro:
            "Treasure Island cleaning services for beachfront homes, vacation properties, and households that need polished, guest-ready results.",
        coverageCopy:
            "We support Treasure Island properties with recurring housekeeping, deep cleaning resets, and turnover-ready service designed for coastal living and guest traffic.",
        neighborhoods: [
            "Sunset Beach",
            "Isle of Capri",
            "Paradise Island",
            "Gulf Boulevard homes",
            "Central Treasure Island waterfront blocks",
        ],
        nearbyAreas: ["Madeira Beach", "South Pasadena", "Gulfport", "St. Petersburg"],
        metaTitle: "House Cleaning in Treasure Island, FL | Home Cleaning & Co",
        metaDescription:
            "Professional house cleaning in Treasure Island, FL for maintenance plans, deep cleans, move-related visits, and vacation-rental turnovers.",
        faqIntro:
            "Treasure Island cleaning questions for homeowners and rental hosts who need dependable scheduling and clear pricing.",
    },
    {
        slug: "madeira-beach",
        name: "Madeira Beach",
        stateCode: "FL",
        stateName: "Florida",
        bookingLocationNames: ["Madeira Beach"],
        intro:
            "House cleaning in Madeira Beach for coastal homes, condos, and guest properties that need dependable, presentation-ready care.",
        coverageCopy:
            "We help Madeira Beach clients stay on top of sand, moisture, guest turnover needs, and everyday housekeeping with structured service plans.",
        neighborhoods: [
            "John's Pass area",
            "Gulf Boulevard corridor",
            "Crystal Island",
            "Madeira Way neighborhood",
            "Waterfront condo communities",
        ],
        nearbyAreas: ["Treasure Island", "Bay Pines", "Seminole", "South Pasadena"],
        metaTitle: "House Cleaning in Madeira Beach, FL | Home Cleaning & Co",
        metaDescription:
            "Book house cleaning in Madeira Beach, FL for recurring upkeep, deep cleaning, move-out service, and short-term rental turnovers.",
        faqIntro:
            "Madeira Beach booking guidance for homeowners and rental hosts comparing routine cleaning with deeper reset visits.",
    },
    {
        slug: "bay-pines",
        name: "Bay Pines",
        stateCode: "FL",
        stateName: "Florida",
        bookingLocationNames: ["Bay Pines"],
        intro:
            "Bay Pines home cleaning for homeowners and nearby residents who want a dependable cleaning team and flexible scheduling.",
        coverageCopy:
            "Our Bay Pines appointments are designed for routine upkeep, deeper resets, and move-related cleanings with a clear checklist and transparent pricing.",
        neighborhoods: [
            "Bay Pines waterfront blocks",
            "VA campus-adjacent neighborhoods",
            "shoreline residential streets",
            "Seminole-adjacent homes",
            "Madeira corridor properties",
        ],
        nearbyAreas: ["Madeira Beach", "Seminole", "Treasure Island", "St. Petersburg"],
        metaTitle: "House Cleaning in Bay Pines, FL | Home Cleaning & Co",
        metaDescription:
            "Schedule house cleaning in Bay Pines, FL for maintenance visits, deep cleaning, move-focused service, and flexible booking support.",
        faqIntro:
            "Bay Pines homeowner FAQs on what is included, how price is set, and when to choose deep cleaning over maintenance.",
    },
];

export const LOCATION_SLUGS = LOCATION_CONTENT.map((location) => location.slug);

export function getLocationBySlug(slug?: string | null): LocationContent | undefined {
    if (!slug) return undefined;
    return LOCATION_CONTENT.find((location) => location.slug === slug);
}
