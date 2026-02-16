
import type { APIRoute } from 'astro';
import { db } from '../../db';
import { locations, pricing } from '../../db/schema';

export const prerender = false;

export const GET: APIRoute = async () => {
    try {
        const [placesData, pricingData] = await Promise.all([
            db.select().from(locations),
            db.select().from(pricing),
        ]);

        return new Response(JSON.stringify({ places: placesData, pricing: pricingData }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        console.error('Error fetching places/pricing:', error);
        return new Response(JSON.stringify({ error: 'Failed to fetch configuration data' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
};
