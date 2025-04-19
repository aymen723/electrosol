import { Client } from "../entities/Client";

export interface ClientRepository {
  create(client: Client): Promise<Client>;
  getAll(): Promise<Client[]>;
}
