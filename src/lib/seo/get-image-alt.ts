import type { LocationContent } from "../../content/locations";
import type { ServiceContent } from "../../content/services";

export function getImageAlt(
    service: ServiceContent,
    location?: LocationContent,
    sceneIndex = 0,
): string {
    const scene = service.imageAltScenes[sceneIndex] ?? service.imageAltScenes[0];
    const serviceLabel = service.name.toLowerCase();

    if (location) {
        return `Professional ${serviceLabel} in ${location.name}, ${location.stateCode} ${scene}`;
    }

    return `Professional ${serviceLabel} service by Home Cleaning & Co with ${scene}`;
}
