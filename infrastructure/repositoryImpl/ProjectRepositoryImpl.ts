import { Project, Status } from "../../domain/entities/Project";
import { ProjectRepository } from "../../domain/repositories/ProjectRepository";
import { dbClient } from "../drizzel/schema";
import { projects } from "../drizzel/schema/schema";

export class ProjectRepositoryImpl implements ProjectRepository {
  async create(project: Project): Promise<Project> {
    const result = await dbClient
      .insert({
        name: project.name!,
        startDate: project.startdate?.getTime() ?? null,
        endDate: project.enddate?.getTime() ?? null,
        budget: project.budget ? parseFloat(project.budget) : null,
        status: Status[project.status!].toLowerCase(),
        note: project.note ?? null,
        createdAt: project.createdAt ?? Date.now(),
      })
      .values(project)
      .returning();
  }
}
