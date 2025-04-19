import { Client } from "../entities/Client";

export interface ClientRepository {
  create(client: Client): Promise<Client>;
  getAll(): Promise<Client[]>;
  delete(client: Client): Promise<Client>;
  update(client: Client): Promise<Client>;
}
