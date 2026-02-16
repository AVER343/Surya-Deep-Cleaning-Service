import { d as db, b as bookings } from '../../chunks/index_BoLU02PN.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  try {
    const body = await request.json();
    if (!body.placeId || !body.serviceType || !body.email || !body.date) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const newBooking = await db.insert(bookings).values({
      firstName: body.firstName,
      lastName: body.lastName || "",
      email: body.email,
      phone: body.phone || "",
      placeId: body.placeId,
      serviceType: body.serviceType,
      bedrooms: body.bedrooms || 0,
      bathrooms: body.bathrooms || 0,
      sqft: body.sqft || 0,
      date: body.date,
      time: body.time,
      price: body.price || 0,
      status: "pending",
      userAgent: request.headers.get("user-agent") || "unknown"
    }).returning({ id: bookings.id });
    return new Response(JSON.stringify({ message: "Booking created successfully", id: newBooking[0].id }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Error creating booking:", error);
    return new Response(JSON.stringify({ error: "Failed to create booking" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST,
    prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
