import { getRelatedServices, getServiceBySlug } from "../../content/services";
import BOOKING_CATALOG from "../../generated/booking-catalog";
import {
    getAvailableCitiesForService,
    getCatalogServiceBySlug,
    getStartingPriceForService,
} from "../catalog";

export function getServiceSeoModel(serviceSlug?: string | null) {
    const service = getServiceBySlug(serviceSlug);
    if (!service) return undefined;

    const catalogService = getCatalogServiceBySlug(service.slug, BOOKING_CATALOG);
    if (!catalogService) return undefined;

    return {
        service,
        catalogService,
        startingPrice:
            getStartingPriceForService(service.id, undefined, BOOKING_CATALOG) ??
            catalogService.globalStartingPrice,
        cityPages: getAvailableCitiesForService(service.slug, BOOKING_CATALOG),
        relatedServices: getRelatedServices(service),
    };
}
