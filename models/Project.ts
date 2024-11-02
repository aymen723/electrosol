import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
} from "typeorm";
import { Client } from "./Client";

@Entity()
export class Project extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  projectname!: string;

  @Column()
  projectdate!: string;

  @ManyToOne(() => Client, (client) => client.projects)
  client: Client;
}
