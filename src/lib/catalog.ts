import { LOCATION_CONTENT, getLocationBySlug, type LocationContent } from "../content/locations";
import { getServiceBySlug } from "../content/services";
import BOOKING_CATALOG, { type BookingCatalogSnapshot } from "../generated/booking-catalog";

export function formatUsd(value?: number | null): string {
    if (typeof value !== "number" || Number.isNaN(value)) return "Custom";
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: value % 1 === 0 ? 0 : 2,
    }).format(value);
}

export function getCatalogServiceBySlug(
    serviceSlug?: string | null,
    catalog: BookingCatalogSnapshot = BOOKING_CATALOG,
) {
    const service = getServiceBySlug(serviceSlug);
    if (!service) return undefined;
    return catalog.services.find((entry) => entry.id === service.id);
}

export function getBookingLocationIdsForSeoLocation(
    locationOrSlug?: LocationContent | string | null,
    catalog: BookingCatalogSnapshot = BOOKING_CATALOG,
): string[] {
    const location =
        typeof locationOrSlug === "string"
            ? getLocationBySlug(locationOrSlug)
            : locationOrSlug;

    if (!location) return [];

    return location.bookingLocationNames
        .map((bookingName) =>
            catalog.locations.find((catalogLocation) => catalogLocation.name === bookingName),
        )
        .filter((catalogLocation): catalogLocation is BookingCatalogSnapshot["locations"][number] =>
            Boolean(catalogLocation),
        )
        .map((catalogLocation) => catalogLocation.id);
}

export function getPrimaryBookingLocationIdForSeoLocation(
    locationSlug?: string | null,
    catalog: BookingCatalogSnapshot = BOOKING_CATALOG,
): string | undefined {
    return getBookingLocationIdsForSeoLocation(locationSlug, catalog)[0];
}

export function getStartingPriceForService(
    serviceId: string,
    locationIds?: string[],
    catalog: BookingCatalogSnapshot = BOOKING_CATALOG,
): number | undefined {
    const relevantRows = catalog.basePricing.filter((row) => row.serviceId === serviceId);

    if (relevantRows.length === 0) return undefined;

    if (!locationIds || locationIds.length === 0) {
        const prices = relevantRows.map((row) => row.basePrice);
        return prices.length > 0 ? Math.min(...prices) : undefined;
    }

    const exactMatches = relevantRows.filter(
        (row) => row.locationId && locationIds.includes(row.locationId),
    );

    if (exactMatches.length > 0) {
        return Math.min(...exactMatches.map((row) => row.basePrice));
    }

    const fallbackMatches = relevantRows.filter((row) => row.locationId === null);
    if (fallbackMatches.length > 0) {
        return Math.min(...fallbackMatches.map((row) => row.basePrice));
    }

    return undefined;
}

export function getAvailableCitiesForService(
    serviceSlug: string,
    catalog: BookingCatalogSnapshot = BOOKING_CATALOG,
) {
    const service = getServiceBySlug(serviceSlug);
    if (!service) return [];

    return LOCATION_CONTENT.map((location) => ({
        location,
        startingPrice: getStartingPriceForService(
            service.id,
            getBookingLocationIdsForSeoLocation(location, catalog),
            catalog,
        ),
    }));
}

export function getAvailableServicesForLocation(
    locationSlug: string,
    catalog: BookingCatalogSnapshot = BOOKING_CATALOG,
) {
    const location = getLocationBySlug(locationSlug);
    if (!location) return [];

    const locationIds = getBookingLocationIdsForSeoLocation(location, catalog);

    return catalog.services
        .map((catalogService) => {
            const service = getServiceBySlug(catalogService.slug);
            if (!service) return undefined;

            return {
                service,
                catalogService,
                startingPrice: getStartingPriceForService(service.id, locationIds, catalog),
            };
        })
        .filter(
            (
                entry,
            ): entry is {
                service: NonNullable<ReturnType<typeof getServiceBySlug>>;
                catalogService: BookingCatalogSnapshot["services"][number];
                startingPrice: number | undefined;
            } => Boolean(entry),
        );
}
