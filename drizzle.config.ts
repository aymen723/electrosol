import { defineConfig } from "drizzle-kit";
import "dotenv/config";
export default defineConfig({
  schema: "./infrastructure/drizzel/schema/schema.ts",
  out: "./infrastructure/drizzel/schema/migrations",
  dialect: "sqlite",
  dbCredentials: {
    url: process.env.DATABASE_URL as string,
  },

  verbose: true,
  strict: true,
});
