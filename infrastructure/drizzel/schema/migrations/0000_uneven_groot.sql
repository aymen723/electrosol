CREATE TABLE `calculation_instances` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`project_id` integer NOT NULL,
	`calculation_type_id` integer NOT NULL,
	`user_id` integer NOT NULL,
	`timestamp` integer DEFAULT (CURRENT_TIMESTAMP),
	`status` text(50) NOT NULL,
	`version` integer DEFAULT 1,
	FOREIGN KEY (`project_id`) REFERENCES `projects`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`calculation_type_id`) REFERENCES `calculation_types`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `calculation_parameters` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`calculation_instance_id` integer NOT NULL,
	`name` text(255) NOT NULL,
	`value` real NOT NULL,
	`unit` text(50),
	FOREIGN KEY (`calculation_instance_id`) REFERENCES `calculation_instances`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `calculation_results` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`calculation_instance_id` integer NOT NULL,
	`result_name` text(255) NOT NULL,
	`value` real NOT NULL,
	`unit` text(50),
	FOREIGN KEY (`calculation_instance_id`) REFERENCES `calculation_instances`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `calculation_types` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text(255) NOT NULL,
	`description` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `calculation_types_name_unique` ON `calculation_types` (`name`);--> statement-breakpoint
CREATE TABLE `calculation_versions` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`calculation_type_id` integer NOT NULL,
	`version_number` real NOT NULL,
	`change_description` text,
	`created_at` integer DEFAULT (CURRENT_TIMESTAMP),
	FOREIGN KEY (`calculation_type_id`) REFERENCES `calculation_types`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `clients` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text(255) NOT NULL,
	`industry` text,
	`company` text,
	`note` text,
	`contact_id` integer,
	`created_at` integer DEFAULT (CURRENT_TIMESTAMP),
	FOREIGN KEY (`contact_id`) REFERENCES `contact_info`(`id`) ON UPDATE no action ON DELETE set null
);
--> statement-breakpoint
CREATE UNIQUE INDEX `clients_contact_id_unique` ON `clients` (`contact_id`);--> statement-breakpoint
CREATE TABLE `contact_info` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`phone_number` text(50),
	`email` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `contact_info_email_unique` ON `contact_info` (`email`);--> statement-breakpoint
CREATE TABLE `locations` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`latitude` real NOT NULL,
	`longitude` real NOT NULL
);
--> statement-breakpoint
CREATE TABLE `projects` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`client_id` integer NOT NULL,
	`name` text(255) NOT NULL,
	`start_date` integer,
	`end_date` integer,
	`location_id` integer,
	`budget` real,
	`status` text(50) NOT NULL,
	`note` text,
	`created_at` integer DEFAULT (CURRENT_TIMESTAMP),
	FOREIGN KEY (`client_id`) REFERENCES `clients`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`location_id`) REFERENCES `locations`(`id`) ON UPDATE no action ON DELETE set null
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL
);
