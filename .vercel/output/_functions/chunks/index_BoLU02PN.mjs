import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { pgTable, decimal, integer, uuid, text, pgEnum, timestamp } from 'drizzle-orm/pg-core';
import { config } from 'dotenv';

const pricing = pgTable("pricing", {
  id: uuid("id").defaultRandom().primaryKey(),
  base: integer("base").notNull(),
  bed: integer("bed").notNull(),
  bath: integer("bath").notNull(),
  sqft: decimal("sqft").notNull()
});
const locations = pgTable("locations", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  pricingId: uuid("pricing_id").references(() => pricing.id).notNull()
});
const bookingStatusEnum = pgEnum("booking_status", ["pending", "confirmed", "completed", "cancelled"]);
const paymentStatusEnum = pgEnum("payment_status", ["unpaid", "paid", "refunded"]);
const bookings = pgTable("bookings", {
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
  date: text("date").notNull(),
  // YYYY-MM-DD
  time: text("time").notNull(),
  price: integer("price").notNull(),
  notes: text("notes"),
  userAgent: text("user_agent"),
  status: bookingStatusEnum("status").default("pending").notNull(),
  paymentStatus: paymentStatusEnum("payment_status").default("unpaid").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull().$onUpdate(() => /* @__PURE__ */ new Date())
});

const schema = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    bookingStatusEnum,
    bookings,
    locations,
    paymentStatusEnum,
    pricing
}, Symbol.toStringTag, { value: 'Module' }));

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": undefined, "SSR": true};
config();
const connectionString = import.meta && Object.assign(__vite_import_meta_env__, { DATABASE_URL: "postgresql://neondb_owner:npg_ZIYGQriT0z7F@ep-calm-feather-aiwi3saw-pooler.c-4.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require" }) && "postgresql://neondb_owner:npg_ZIYGQriT0z7F@ep-calm-feather-aiwi3saw-pooler.c-4.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require" || process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error("DATABASE_URL is not set");
}
const sql = neon(connectionString);
const db = drizzle(sql, { schema });

export { bookings as b, db as d, locations as l, pricing as p };
