import { Client } from "../../domain/entities/Client";
import { ClientRepository } from "../../domain/repositories/ClientRepository";

export class CreateClient {
  constructor(private clientRepo: ClientRepository) {}

  async execute(data: Client): Promise<Client> {
    if (!data.name || data.name.length < 2) {
      throw new Error(
        "Client name is required and must be at least 2 characters."
      );
    }

    const client: Client = {
      name: data.name,
      industry: data.industry,
      company: data.company,
      note: data.note,
      createdAt: Date.now(),
    };

    return this.clientRepo.create(client);
  }
}
