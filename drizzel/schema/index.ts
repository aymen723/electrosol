import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import * as schema from "./schema";

// Initialize SQLite database
const Client = Database(process.env.DATABASE_URL as string); // Replace 'app.db' with your database file path

export const dbClient = drizzle(Client, { schema, logger: true });
// Initialize Drizzle ORM with schema
// export const db = drizzle(sqlite, { schema });

// export interface drizzle {}
