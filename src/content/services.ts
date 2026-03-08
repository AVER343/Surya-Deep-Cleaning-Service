import { SERVICE_IDS } from "../db/constants";

export interface ServiceFAQ {
    question: string;
    answer: string;
}

export interface ServiceProcessStep {
    title: string;
    description: string;
}

export interface ServiceContent {
    id: string;
    slug: string;
    name: string;
    shortDescription: string;
    image: string;
    badge?: "Most Booked";
    galleryImages: string[];
    heroHighlights: [string, string, string];
    pricingNote: string;
    imageAltScenes: [string, string, string];
    seo: {
        title: string;
        description: string;
    };
    hero: {
        eyebrow: string;
        headline: string;
        subheadline: string;
    };
    includes: string[];
    process: ServiceProcessStep[];
    faq: ServiceFAQ[];
    related: string[];
}

const makePlaceholderGallery = (image: string): string[] => [image, image, image];

export const SERVICE_CONTENT: ServiceContent[] = [
    {
        id: SERVICE_IDS.REGULAR_MAINTENANCE,
        slug: "regular-maintenance",
        name: "Regular Maintenance",
        shortDescription:
            "Set your schedule and let us handle the rest. Enjoy a consistently spotless home with our reliable, stress-free recurring service.",
        image: "/images/services/regular-maintenance.png",
        badge: "Most Booked",
        galleryImages: [
            "/images/services/regular-maintenance/kitchen-cleaning.png",
            "/images/services/regular-maintenance/bathroom-cleaning.png",
            "/images/services/regular-maintenance/floor-vacuumed.png",
        ],
        heroHighlights: [
            "Kitchen Counters & Surfaces Refreshed",
            "Bathrooms Sanitized & Mirrors Polished",
            "Floors Vacuumed and Mopped Throughout"
        ],
        pricingNote:
            "Starting price varies by visit frequency, home size, and any extras you add to the appointment.",
        imageAltScenes: [
            "kitchen counter wipe-down",
            "bathroom sink and mirror refresh",
            "living room floor care",
        ],
        seo: {
            title:
                "Regular Maintenance Cleaning in St. Petersburg, FL | Home Cleaning & Co",
            description:
                "Keep your home consistently spotless with recurring maintenance cleaning in St. Petersburg. Flexible weekly, bi-weekly, and monthly plans.",
        },
        hero: {
            eyebrow: "Recurring Home Care",
            headline: "Stay on Top of Cleaning Without Losing Your Weekends",
            subheadline:
                "Our maintenance plan keeps high-traffic areas spotless and your routines easy to manage.",
        },
        includes: [
            "Kitchen wipe-down, counters, sink, and exterior appliances",
            "Bathroom sanitizing and mirror polishing",
            "Dusting on reachable surfaces and base touch-ups",
            "Vacuuming and mopping all major floor areas",
            "Trash collection and liner replacement",
        ],
        process: [
            {
                title: "Set Your Frequency",
                description:
                    "Pick weekly, bi-weekly, or monthly based on your household rhythm.",
            },
            {
                title: "We Follow a Repeatable Checklist",
                description:
                    "Each visit follows a consistent room-by-room workflow so quality stays high.",
            },
            {
                title: "Refine As You Go",
                description:
                    "Need us to focus more on a room next visit? We adjust without disrupting service.",
            },
        ],
        faq: [
            {
                question: "How long does a regular maintenance clean take?",
                answer:
                    "Most appointments range from 2 to 4 hours, depending on home size and condition.",
            },
            {
                question: "Can I switch between bi-weekly and monthly?",
                answer:
                    "Yes. We can update your cadence as your schedule changes, with advance notice.",
            },
            {
                question: "Do I need to provide supplies?",
                answer:
                    "No. We bring professional equipment and standard products for every visit.",
            },
        ],
        related: ["deep-cleaning", "airbnb-turnover"],
    },
    {
        id: SERVICE_IDS.DEEP_CLEANING,
        slug: "deep-cleaning",
        name: "Deep Cleaning",
        shortDescription:
            "Transform your home with our most detailed clean. Eliminates built-up dirt and restores neglected spaces to pristine condition.",
        image: "/images/services/deep-cleaning.png",
        badge: "Most Booked",
        galleryImages: [
            "/images/services/deep-cleaning/bathroom-grout-cleaning.png",
            "/images/services/deep-cleaning/kitchen-cabinet-wipe-down.png",
            "/images/services/deep-cleaning/clean-baseboard-corner.png",
        ],
        heroHighlights: [
            "Perfect First-Time Clean",
            "Intensive Detail Work",
            "Seasonal Reset Ready",
        ],
        pricingNote:
            "Deep cleaning starts higher than maintenance visits because it includes more detail work, buildup removal, and first-visit reset time.",
        imageAltScenes: [
            "bathroom grout and fixture detailing",
            "kitchen cabinet wipe-down",
            "baseboard and edge cleaning",
        ],
        seo: {
            title: "Deep House Cleaning in St. Petersburg, FL | Home Cleaning & Co",
            description:
                "Book a detailed deep cleaning service for kitchens, bathrooms, and hard-to-reach areas. Perfect for first-time or seasonal resets.",
        },
        hero: {
            eyebrow: "Detailed Reset",
            headline: "Get a True Deep Clean That Goes Beyond Surface Shine",
            subheadline:
                "Ideal for first-time visits, seasonal refreshes, or homes that need extra attention.",
        },
        includes: [
            "Detailed kitchen cleaning with backsplash and cabinet fronts",
            "Bathroom scrubbing with grout-line and fixture detailing",
            "Baseboards, trim, doors, and reachable vents",
            "Behind and under movable furniture where accessible",
            "Extra focus on buildup-prone rooms",
        ],
        process: [
            {
                title: "Walk Through Priorities",
                description:
                    "We identify heavy-use zones and surfaces that need detail-level attention.",
            },
            {
                title: "Deep Detail Pass",
                description:
                    "Our team handles edges, corners, fixtures, and hidden dust buildup.",
            },
            {
                title: "Final Quality Sweep",
                description:
                    "We complete a closing check to verify consistency across every room.",
            },
        ],
        faq: [
            {
                question: "Is deep cleaning required before recurring service?",
                answer:
                    "It is recommended for first-time clients so maintenance visits can stay efficient and consistent.",
            },
            {
                question: "Do you clean inside ovens and fridges?",
                answer:
                    "Those are typically available as add-ons so you can customize depth based on your needs.",
            },
            {
                question: "How often should I book deep cleaning?",
                answer:
                    "Many homeowners schedule every 3 to 6 months, depending on lifestyle and traffic.",
            },
        ],
        related: ["regular-maintenance", "post-construction"],
    },
    {
        id: SERVICE_IDS.MOVE_IN_OUT,
        slug: "move-in-move-out",
        name: "Move-In / Move-Out",
        shortDescription:
            "Ensure a flawless handoff. We prepare your vacant property to guarantee you get your deposit back.",
        image: "/images/services/move-in:move-out.png",
        galleryImages: [
            "/images/services/move-in-move-out/vacant-kitchen-handoff.png",
            "/images/services/move-in-move-out/empty-bathroom.png",
            "/images/services/move-in-move-out/empty-closet-cleaning.png",
        ],
        heroHighlights: [
            "Vacancy Specialists",
            "Flexible Move-Dates",
            "Walkthrough-Ready Finish",
        ],
        pricingNote:
            "Vacant property condition, appliance detailing, and move timeline all influence final move cleaning pricing.",
        imageAltScenes: [
            "vacant kitchen ready for handoff",
            "empty bathroom sanitized for move-in",
            "closet and baseboard cleaning in an empty room",
        ],
        seo: {
            title: "Move-In / Move-Out Cleaning in St. Petersburg, FL | Home Cleaning & Co",
            description:
                "Prepare your property for move-in or move-out with detailed vacancy cleaning. Great for renters, homeowners, and property managers.",
        },
        hero: {
            eyebrow: "Transition Cleaning",
            headline: "Hand Off or Move In to a Truly Clean Space",
            subheadline:
                "We handle the detail work needed during moving timelines so you can focus on logistics.",
        },
        includes: [
            "Inside cabinets, drawers, and empty closets",
            "Full bathroom sanitizing and fixture detailing",
            "Kitchen appliance exterior and reachable interior surfaces",
            "Floor vacuuming and mopping throughout vacant spaces",
            "Dust and debris removal from ledges and baseboards",
        ],
        process: [
            {
                title: "Book Around Your Move Date",
                description:
                    "We schedule around lease turnover or closing timelines.",
            },
            {
                title: "Vacancy-Ready Checklist",
                description:
                    "Our team cleans with move-level expectations, not maintenance-level speed.",
            },
            {
                title: "Ready for Walkthrough",
                description:
                    "Property is left in presentation-ready condition for handoff or arrival.",
            },
        ],
        faq: [
            {
                question: "Do you require the home to be empty?",
                answer:
                    "Vacant properties are ideal, but we can work around packed items when needed.",
            },
            {
                question: "Can you clean on the same day as move-out?",
                answer:
                    "Yes, subject to availability. Early booking is recommended for tight timelines.",
            },
            {
                question: "Is this suitable for rental turnovers?",
                answer:
                    "Yes. This service is commonly used by renters and property managers between occupants.",
            },
        ],
        related: ["deep-cleaning", "post-construction"],
    },
    {
        id: SERVICE_IDS.AIRBNB_TURNOVER,
        slug: "airbnb-turnover",
        name: "Airbnb Turnover",
        shortDescription:
            "Maximize your 5-star reviews. Keep guests happy with lightning-fast turnovers and hotel-quality cleaning standards.",
        image: "/images/services/airbnb-rentals.png",
        galleryImages: [
            "/images/services/airbnb-turnover/guest-bedroom-linen-refresh.png",
            "/images/services/airbnb-turnover/living-room-staging.png",
            "/images/services/airbnb-turnover/bathroom-turnover.png",
        ],
        heroHighlights: [
            "5-Star Guest Ready",
            "Same-Day Turnovers",
            "Host Checklist Standards",
        ],
        pricingNote:
            "Turnover pricing depends on property size, turnaround window, and whether linen or restocking extras are included.",
        imageAltScenes: [
            "guest bedroom linen refresh",
            "living room staging between stays",
            "bathroom turnover cleaning before check-in",
        ],
        seo: {
            title: "Airbnb Turnover Cleaning in St. Petersburg, FL | Home Cleaning & Co",
            description:
                "Reliable Airbnb and short-term rental turnover cleaning with checklist consistency and quick scheduling between guest stays.",
        },
        hero: {
            eyebrow: "Short-Term Rental Service",
            headline: "Keep Every Guest Check-In Ready",
            subheadline:
                "Turnover cleaning designed for host timelines, quality standards, and repeat consistency.",
        },
        includes: [
            "Quick-reset kitchen and bathroom detailing",
            "Bedroom and common-area dusting, vacuuming, and mopping",
            "Trash removal and visual presentation pass",
            "High-touch surface disinfection",
            "Consistent turnover checklist execution",
        ],
        process: [
            {
                title: "Set Property Preferences",
                description:
                    "We align on your turnaround windows and standards once, then repeat reliably.",
            },
            {
                title: "Guest-Ready Turnover",
                description:
                    "The team performs a focused reset between reservations with host-level consistency.",
            },
            {
                title: "Confidence Before Check-In",
                description:
                    "Every turnover ends with a final readiness review.",
            },
        ],
        faq: [
            {
                question: "Can you handle recurring Airbnb turnovers?",
                answer:
                    "Yes. We support repeat schedules and calendar-driven cleaning requests.",
            },
            {
                question: "Do you clean same-day between guests?",
                answer:
                    "Same-day availability is often possible and depends on timing and location.",
            },
            {
                question: "Is laundry included?",
                answer:
                    "Laundry and linen tasks can be configured as add-ons depending on your property setup.",
            },
        ],
        related: ["regular-maintenance", "deep-cleaning"],
    },
    {
        id: SERVICE_IDS.POST_CONSTRUCTION,
        slug: "post-construction",
        name: "Post-Construction",
        shortDescription:
            "Reveal the beauty of your new space. We remove hazardous fine dust, residue, and debris so you can move in safely.",
        image: "/images/services/post-construction.png",
        galleryImages: [
            "/images/services/post-construction/renovation-dust-removal.png",
            "/images/services/post-construction/dust-shill.png",
            "/images/services/post-construction/mop-after-stay.png",
        ],
        heroHighlights: [
            "Hazardous Dust Removal",
            "Remodel Handoff Ready",
            "Room-by-Room Detailing",
        ],
        pricingNote:
            "Post-construction pricing depends on dust load, room count, and whether the project is a partial renovation or full-home cleanup.",
        imageAltScenes: [
            "renovation dust removal from counters",
            "trim and sill detailing after remodel work",
            "final mop after contractor cleanup",
        ],
        seo: {
            title: "Post-Construction Cleaning in St. Petersburg, FL | Home Cleaning & Co",
            description:
                "Remove renovation dust and residue with professional post-construction cleaning. Great for remodel handoffs and final presentation.",
        },
        hero: {
            eyebrow: "Renovation Cleanup",
            headline: "Clear Construction Dust and Reveal the Finished Space",
            subheadline:
                "A targeted service for post-remodel cleanup, fine dust control, and final presentation.",
        },
        includes: [
            "Fine dust removal from surfaces, ledges, and trim",
            "Kitchen and bathroom wipe-down after contractor work",
            "Vacuuming and mopping for residue removal",
            "Window sill and frame detailing on reachable areas",
            "Debris final-pass for handoff readiness",
        ],
        process: [
            {
                title: "Assess Scope",
                description:
                    "We review property size, dust level, and room count to plan the cleanup pass.",
            },
            {
                title: "Targeted Dust and Residue Removal",
                description:
                    "Our team focuses on detail points where post-build particles settle.",
            },
            {
                title: "Final Presentation Pass",
                description:
                    "We leave the space ready for occupancy, staging, or client walkthrough.",
            },
        ],
        faq: [
            {
                question: "Do you remove heavy construction debris?",
                answer:
                    "This service focuses on cleaning and dust removal, not hauling bulk contractor debris.",
            },
            {
                question: "Can you clean right after contractors finish?",
                answer:
                    "Yes, once major construction work is complete and the site is safe for cleaning.",
            },
            {
                question: "Is this only for full-home remodels?",
                answer:
                    "No. We can handle single-room renovations and partial projects as well.",
            },
        ],
        related: ["deep-cleaning", "move-in-move-out"],
    },
    {
        id: SERVICE_IDS.OFFICE_CLEANING,
        slug: "office-cleaning",
        name: "Office Cleaning",
        shortDescription:
            "Boost team productivity with an immaculate workspace. Professional, discreet cleaning for offices and small businesses.",
        image:
            "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000",
        galleryImages: [
            "/images/services/office-cleaning/shared-sanitization.png",
            "/images/services/office-cleaning/cleaning-room.png",
            "/images/services/office-cleaning/flexible-timing.png",
        ],
        heroHighlights: [
            "Flexible After-Hours",
            "Shared-Space Sanitation",
            "Consistent Recurring Plans",
        ],
        pricingNote:
            "Office pricing depends on square footage, restroom count, and whether you need recurring or after-hours service.",
        imageAltScenes: [
            "conference room surface sanitizing",
            "break room wipe-down and trash reset",
            "reception area floor care",
        ],
        seo: {
            title: "Office Cleaning in St. Petersburg, FL | Home Cleaning & Co",
            description:
                "Consistent office cleaning for teams and small businesses in St. Petersburg. Flexible schedules and detailed workspace care.",
        },
        hero: {
            eyebrow: "Commercial Care",
            headline: "Maintain a Cleaner, Healthier Workspace",
            subheadline:
                "From lobby areas to break rooms, we keep your office environment polished and consistent.",
        },
        includes: [
            "Desk-area surface wipe-downs and dust control",
            "Break room and restroom sanitizing",
            "Entry and common-area vacuuming/mopping",
            "High-touch point disinfection",
            "Trash and liner resets across work zones",
        ],
        process: [
            {
                title: "Set Business-Friendly Schedule",
                description:
                    "Choose cleaning windows that minimize disruption to your team.",
            },
            {
                title: "Workspace Checklist Execution",
                description:
                    "We apply a repeatable process to shared spaces, restrooms, and touchpoints.",
            },
            {
                title: "Consistency Review",
                description:
                    "Service quality is tracked and adjusted as your office needs evolve.",
            },
        ],
        faq: [
            {
                question: "Do you clean outside business hours?",
                answer:
                    "Yes. We can schedule before open, after close, or during low-traffic windows.",
            },
            {
                question: "Can you service small offices weekly?",
                answer:
                    "Yes. Weekly and bi-weekly office plans are common and easy to maintain.",
            },
            {
                question: "Do you provide supplies?",
                answer:
                    "We bring standard cleaning supplies and equipment unless your policy requires specific products.",
            },
        ],
        related: ["regular-maintenance", "post-construction"],
    },
];

export const SERVICE_SLUGS = SERVICE_CONTENT.map((service) => service.slug);

export function getServiceBySlug(slug?: string | null): ServiceContent | undefined {
    if (!slug) return undefined;
    return SERVICE_CONTENT.find((service) => service.slug === slug);
}

export function getServiceById(id?: string | null): ServiceContent | undefined {
    if (!id) return undefined;
    return SERVICE_CONTENT.find((service) => service.id === id);
}

export function getRelatedServices(service: ServiceContent): ServiceContent[] {
    return service.related
        .map((slug) => getServiceBySlug(slug))
        .filter((related): related is ServiceContent => Boolean(related));
}
