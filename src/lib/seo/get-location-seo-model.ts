import { getLocationBySlug } from "../../content/locations";
import BOOKING_CATALOG from "../../generated/booking-catalog";
import {
    getAvailableServicesForLocation,
    getBookingLocationIdsForSeoLocation,
} from "../catalog";

export function getLocationSeoModel(locationSlug?: string | null) {
    const location = getLocationBySlug(locationSlug);
    if (!location) return undefined;

    return {
        location,
        bookingLocationIds: getBookingLocationIdsForSeoLocation(location, BOOKING_CATALOG),
        services: getAvailableServicesForLocation(location.slug, BOOKING_CATALOG),
    };
}
