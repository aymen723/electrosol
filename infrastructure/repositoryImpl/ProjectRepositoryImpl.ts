import { Project, Status } from "../../domain/entities/Project";
import { ProjectRepository } from "../../domain/repositories/ProjectRepository";
import { dbClient } from "../drizzel/schema";
import { projects } from "../drizzel/schema/schema";

export class ProjectRepositoryImpl implements ProjectRepository {
  async create(project: Project) {
    const res = await dbClient
      .insert(projects)
      .values({
        name: project.name,
        status: project.status,
        budget: project.budget ?? null, // Convertir undefined en null si budget est nullable
        startDate: project.startdate,
        endDate: project.enddate,
        createdAt: project.createdAt,
        note: project.note,
        clientId: project.client?.id, // Assurez-vous que client.id existe
      })
      .returning({
        id: projects.id,
      });

    console.log(res);
  }
}
