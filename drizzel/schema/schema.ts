import { sqliteTable, text, integer, real } from "drizzle-orm/sqlite-core";

// Define the clients table
export const ClientTable = sqliteTable("client", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
  contactInfo: text("contact_info"),
  industry: text("industry"),
  company: text("company"),
  note: text("note"),
});

// Define the projects table
export const ProjectTable = sqliteTable("project", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
  clientId: integer("client_id")
    .notNull()
    .references(() => ClientTable.id),
  startDate: text("start_date").notNull(), // Store dates as ISO strings
  endDate: text("end_date"),
  location: text("location").notNull(),
  //   soilType: text("soil_type").notNull(),
  budget: real("budget").notNull(),
  status: text("status").notNull(), // E.g., 'Pending', 'In Progress', 'Completed'
  //   createdBy: text("created_by").notNull(),
  note: text("note"),
});
