
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';
import { config } from 'dotenv';

config(); // Load .env file

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
    console.warn('DATABASE_URL is not set. Mocking DB connection.');
}

export const db = connectionString 
    ? drizzle(neon(connectionString), { schema })
    : ({} as any);
