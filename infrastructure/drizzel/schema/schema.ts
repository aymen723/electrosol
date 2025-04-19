import { sqliteTable, integer, text, real } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";
export const clients = sqliteTable("clients", {
  id: integer({ mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name", { length: 255 }).notNull(),
  industry: text("industry"),
  company: text("company"),
  note: text("note"),
  // contactId: integer("contact_id", { mode: "number" })
  //   .unique()
  //   .references(() => contactInfo.id, { onDelete: "set null" }),
  createdAt: integer("created_at", { mode: "timestamp_ms" }).default(
    sql`(CURRENT_TIMESTAMP)`
  ),
});

export const projects = sqliteTable("projects", {
  id: integer({ mode: "number" }).primaryKey({ autoIncrement: true }),
  clientId: integer("client_id")
    .notNull()
    .references(() => clients.id, { onDelete: "cascade" }),
  name: text("name", { length: 255 }).notNull(),
  startDate: integer("start_date", { mode: "timestamp" }),
  endDate: integer("end_date", { mode: "timestamp" }),
  // locationId: integer("location_id").references(() => locations.id, {
  //   onDelete: "set null",
  // }),
  budget: real("budget"),
  status: text("status", {
    length: 50,
    enum: ["onprogress", "cancelled", "onHold", "finished"],
  }).notNull(),
  note: text("note"),
  createdAt: integer("created_at", { mode: "timestamp_ms" }).default(
    sql`(CURRENT_TIMESTAMP)`
  ),
});

export const locations = sqliteTable("locations", {
  id: integer({ mode: "number" }).primaryKey({ autoIncrement: true }),
  latitude: real("latitude").notNull(),
  longitude: real("longitude").notNull(),
  projectId: integer("project_id").references(() => projects.id, {
    onDelete: "set null",
  }),
});

export const contactInfo = sqliteTable("contact_info", {
  id: integer({ mode: "number" }).primaryKey({ autoIncrement: true }),
  phoneNumber: text("phone_number", { length: 50 }),
  email: text("email").unique(),
  clientId: integer("client_id", { mode: "number" })
    .unique()
    .references(() => clients.id, { onDelete: "set null" }),
});

export const calculationTypes = sqliteTable("calculation_types", {
  id: integer({ mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name", { length: 255 }).unique().notNull(),
  description: text("description"),
});

export const calculationInstances = sqliteTable("calculation_instances", {
  id: integer({ mode: "number" }).primaryKey({ autoIncrement: true }),
  projectId: integer("project_id")
    .notNull()
    .references(() => projects.id, { onDelete: "cascade" }),
  calculationTypeId: integer("calculation_type_id")
    .notNull()
    .references(() => calculationTypes.id, { onDelete: "cascade" }),
  userId: integer("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  timestamp: integer("timestamp", { mode: "timestamp_ms" }).default(
    sql`(CURRENT_TIMESTAMP)`
  ),
  status: text("status", {
    length: 50,
    enum: ["onprogress", "cancelled", "onHold", "finished"],
  }).notNull(),
  version: integer("version").default(1),
});

export const calculationParameters = sqliteTable("calculation_parameters", {
  id: integer({ mode: "number" }).primaryKey({ autoIncrement: true }),
  calculationInstanceId: integer("calculation_instance_id")
    .notNull()
    .references(() => calculationInstances.id, { onDelete: "cascade" }),
  name: text("name", { length: 255 }).notNull(),
  value: real("value").notNull(),
  unit: text("unit", { length: 50 }),
});

export const calculationResults = sqliteTable("calculation_results", {
  id: integer({ mode: "number" }).primaryKey({ autoIncrement: true }),
  calculationInstanceId: integer("calculation_instance_id")
    .notNull()
    .references(() => calculationInstances.id, { onDelete: "cascade" }),
  resultName: text("result_name", { length: 255 }).notNull(),
  value: real("value").notNull(),
  unit: text("unit", { length: 50 }),
});

export const calculationVersions = sqliteTable("calculation_versions", {
  id: integer({ mode: "number" }).primaryKey({ autoIncrement: true }),
  calculationTypeId: integer("calculation_type_id")
    .notNull()
    .references(() => calculationTypes.id, { onDelete: "cascade" }),
  versionNumber: real("version_number").notNull(),
  changeDescription: text("change_description"),
  createdAt: integer("created_at", { mode: "timestamp_ms" }).default(
    sql`(CURRENT_TIMESTAMP)`
  ),
});

export const user = sqliteTable("users", {
  id: integer({ mode: "number" }).primaryKey({ autoIncrement: true }),
});
