import { LOCATION_CONTENT } from "./locations";

export interface ServiceArea {
    name: string;
    slug: string;
    primary?: boolean;
}

export const SERVICE_AREAS: ServiceArea[] = LOCATION_CONTENT.map((location) => ({
    name: location.name,
    slug: location.slug,
    primary: location.slug === "st-petersburg",
}));
