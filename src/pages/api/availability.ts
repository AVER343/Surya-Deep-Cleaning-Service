
import type { APIRoute } from 'astro';
import { db } from '../../db';
import { sql } from 'drizzle-orm';

export const prerender = false;


export const GET: APIRoute = async ({ request }) => {
    const url = new URL(request.url);
    const dateParam = url.searchParams.get('date'); // YYYY-MM-DD

    if (!dateParam) {
        return new Response(JSON.stringify({ error: 'Date parameter is required' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    try {
        // Query bookings for the specific date
        // Note: 'date' column in bookings is text YYYY-MM-DD
        const result = await db.execute(sql`
            SELECT time FROM bookings 
            WHERE date = ${dateParam} 
            AND status != 'cancelled'
        `);

        // Extract booked times
        const bookedTimes = result.rows.map((row: any) => row.time);

        return new Response(JSON.stringify({ bookedTimes }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (error) {
        console.error('[Availability] Error fetching availability:', error);
        return new Response(JSON.stringify({ error: 'Failed to fetch availability' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
};
