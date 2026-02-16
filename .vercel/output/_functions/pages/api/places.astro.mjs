import { d as db, l as locations, p as pricing } from '../../chunks/index_BoLU02PN.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const GET = async () => {
  try {
    const [placesData, pricingData] = await Promise.all([
      db.select().from(locations),
      db.select().from(pricing)
    ]);
    return new Response(JSON.stringify({ places: placesData, pricing: pricingData }), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    console.error("Error fetching places/pricing:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch configuration data" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
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
