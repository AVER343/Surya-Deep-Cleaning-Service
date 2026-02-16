
import type { APIRoute } from 'astro';
import { db } from '../../db';
import { bookings } from '../../db/schema';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
    try {
        const body = await request.json();

        // Basic validation
        if (!body.placeId || !body.serviceType || !body.email || !body.date) {
            return new Response(JSON.stringify({ error: 'Missing required fields' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        const newBooking = await db.insert(bookings).values({
            firstName: body.firstName,
            lastName: body.lastName || '',
            email: body.email,
            phone: body.phone || '',
            placeId: body.placeId,
            serviceType: body.serviceType,
            bedrooms: body.bedrooms || 0,
            bathrooms: body.bathrooms || 0,
            sqft: body.sqft || 0,
            date: body.date,
            time: body.time,
            price: body.price || 0,
            status: 'pending',
            userAgent: request.headers.get('user-agent') || 'unknown',
        }).returning({ id: bookings.id });

        return new Response(JSON.stringify({ message: 'Booking created successfully', id: newBooking[0].id }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (error) {
        console.error('Error creating booking:', error);
        return new Response(JSON.stringify({ error: 'Failed to create booking' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
};
