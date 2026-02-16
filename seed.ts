
import { db } from './src/db';
import { locations, pricing, bookings } from './src/db/schema';
import { v4 as uuidv4 } from 'uuid';

const seed = async () => {
    console.log('Clearing existing data...');
    try {
        await db.delete(bookings);
        await db.delete(locations);
        await db.delete(pricing);
    } catch (e) {
        console.warn('Error clearing data (might be empty):', e);
    }

    console.log('Seeding pricing...');
    const standardPriceId = uuidv4();
    const premiumPriceId = uuidv4();

    // Real pricing estimates based on service type logic
    await db.insert(pricing).values([
        { id: standardPriceId, base: 110, bed: 25, bath: 35, sqft: '0.06' },
        { id: premiumPriceId, base: 140, bed: 30, bath: 40, sqft: '0.08' },
    ]).onConflictDoNothing();

    console.log('Seeding locations...');
    // Locations from Areas.astro
    await db.insert(locations).values([
        { id: uuidv4(), name: 'St. Petersburg', pricingId: standardPriceId },
        { id: uuidv4(), name: 'South Pasadena', pricingId: standardPriceId },
        { id: uuidv4(), name: 'Pinellas Park', pricingId: standardPriceId },
        { id: uuidv4(), name: 'Kenneth City', pricingId: standardPriceId },
        { id: uuidv4(), name: 'Lealman', pricingId: standardPriceId },
        { id: uuidv4(), name: 'West Lealman', pricingId: standardPriceId },
        { id: uuidv4(), name: 'Gulfport', pricingId: standardPriceId },
        { id: uuidv4(), name: 'Seminole', pricingId: standardPriceId },
        { id: uuidv4(), name: 'Treasure Island', pricingId: premiumPriceId },
        { id: uuidv4(), name: 'Madeira Beach', pricingId: premiumPriceId },
        { id: uuidv4(), name: 'Bay Pines', pricingId: premiumPriceId },
    ]).onConflictDoNothing();

    console.log('Seeding complete!');
    process.exit(0);
};

seed().catch((err) => {
    console.error('Seeding failed:', err);
    process.exit(1);
});
