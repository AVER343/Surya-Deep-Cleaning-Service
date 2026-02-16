
import { boolean, integer, pgTable, text, timestamp, uuid, decimal, pgEnum } from "drizzle-orm/pg-core";

export const pricing = pgTable("pricing", {
    id: uuid("id").defaultRandom().primaryKey(),
    base: integer("base").notNull(),
    bed: integer("bed").notNull(),
    bath: integer("bath").notNull(),
    sqft: decimal("sqft").notNull(),
});

export const locations = pgTable("locations", {
    id: uuid("id").defaultRandom().primaryKey(),
    name: text("name").notNull(),
    pricingId: uuid("pricing_id").references(() => pricing.id).notNull(),
});


export const bookingStatusEnum = pgEnum("booking_status", ["pending", "confirmed", "completed", "cancelled"]);
export const paymentStatusEnum = pgEnum("payment_status", ["unpaid", "paid", "refunded"]);

export const bookings = pgTable("bookings", {
    id: uuid("id").defaultRandom().primaryKey(),
    firstName: text("first_name").notNull(),
    lastName: text("last_name"),
    email: text("email").notNull(),
    phone: text("phone"),
    placeId: uuid("place_id").references(() => locations.id).notNull(),
    serviceType: text("service_type").notNull(),
    bedrooms: integer("bedrooms").notNull(),
    bathrooms: integer("bathrooms").notNull(),
    sqft: integer("sqft").notNull(),
    date: text("date").notNull(), // YYYY-MM-DD
    time: text("time").notNull(),
    price: integer("price").notNull(),
    notes: text("notes"),
    userAgent: text("user_agent"),
    status: bookingStatusEnum("status").default('pending').notNull(),
    paymentStatus: paymentStatusEnum("payment_status").default('unpaid').notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull().$onUpdate(() => new Date()),
});
