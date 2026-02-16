import { d as db } from '../../chunks/index_BoLU02PN.mjs';
import { sql } from 'drizzle-orm';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const GET = async ({ request }) => {
  const url = new URL(request.url);
  const dateParam = url.searchParams.get("date");
  if (!dateParam) {
    return new Response(JSON.stringify({ error: "Date parameter is required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
  try {
    const result = await db.execute(sql`
            SELECT time FROM bookings 
            WHERE date = ${dateParam} 
            AND status != 'cancelled'
        `);
    const bookedTimes = result.rows.map((row) => row.time);
    return new Response(JSON.stringify({ bookedTimes }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("[Availability] Error fetching availability:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch availability" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    GET,
    prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
