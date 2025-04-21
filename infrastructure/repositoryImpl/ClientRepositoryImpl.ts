import { Client } from "../../domain/entities/Client";
import { ClientRepository } from "../../domain/repositories/ClientRepository";
import { dbClient } from "../drizzel/schema";
import { clients } from "../drizzel/schema/schema";

export class ClientRepositoryImpl implements ClientRepository {
  async create(data: Client): Promise<Client> {
    const result = await dbClient.insert(clients).values(data).returning();
    // result[0].
    return result[0];
  }

  async getAll(): Promise<Client[]> {
    return dbClient.select().from(clients);
  }

  delete(client: Client): Promise<Client> {
    // return ;
  }

  update(client: Client): Promise<Client> {}
}
