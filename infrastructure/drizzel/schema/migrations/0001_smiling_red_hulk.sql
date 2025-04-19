PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_clients` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text(255) NOT NULL,
	`industry` text,
	`company` text,
	`note` text,
	`created_at` integer DEFAULT (CURRENT_TIMESTAMP)
);
--> statement-breakpoint
INSERT INTO `__new_clients`("id", "name", "industry", "company", "note", "created_at") SELECT "id", "name", "industry", "company", "note", "created_at" FROM `clients`;--> statement-breakpoint
DROP TABLE `clients`;--> statement-breakpoint
ALTER TABLE `__new_clients` RENAME TO `clients`;--> statement-breakpoint
PRAGMA foreign_keys=ON;--> statement-breakpoint
CREATE TABLE `__new_projects` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`client_id` integer NOT NULL,
	`name` text(255) NOT NULL,
	`start_date` integer,
	`end_date` integer,
	`budget` real,
	`status` text(50) NOT NULL,
	`note` text,
	`created_at` integer DEFAULT (CURRENT_TIMESTAMP),
	FOREIGN KEY (`client_id`) REFERENCES `clients`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
INSERT INTO `__new_projects`("id", "client_id", "name", "start_date", "end_date", "budget", "status", "note", "created_at") SELECT "id", "client_id", "name", "start_date", "end_date", "budget", "status", "note", "created_at" FROM `projects`;--> statement-breakpoint
DROP TABLE `projects`;--> statement-breakpoint
ALTER TABLE `__new_projects` RENAME TO `projects`;--> statement-breakpoint
ALTER TABLE `contact_info` ADD `client_id` integer REFERENCES clients(id);--> statement-breakpoint
CREATE UNIQUE INDEX `contact_info_client_id_unique` ON `contact_info` (`client_id`);--> statement-breakpoint
ALTER TABLE `locations` ADD `project_id` integer REFERENCES projects(id);