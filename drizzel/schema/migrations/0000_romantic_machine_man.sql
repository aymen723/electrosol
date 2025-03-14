CREATE TABLE `client` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`contact_info` text,
	`industry` text,
	`company` text,
	`note` text
);
--> statement-breakpoint
CREATE TABLE `project` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`client_id` integer NOT NULL,
	`start_date` text NOT NULL,
	`end_date` text,
	`location` text NOT NULL,
	`budget` real NOT NULL,
	`status` text NOT NULL,
	`note` text,
	FOREIGN KEY (`client_id`) REFERENCES `client`(`id`) ON UPDATE no action ON DELETE no action
);
