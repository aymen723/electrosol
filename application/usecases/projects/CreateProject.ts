import { Project } from "../../../domain/entities/Project";
import { ProjectRepository } from "../../../domain/repositories/ProjectRepository";

export class CreateProject {
  constructor(private projectRepo: ProjectRepository) {}

  async execute(data: Project): Promise<Project> {
    // if (!data.name || data.name.length < 2) {
    //   throw new Error(
    //     "Client name is required and must be at least 2 characters."
    //   );
    // }

    const project: Project = {
      name: data.name,
      client: data.client,
      budget: data.budget,
      startdate: data.startdate,
      enddate: data.enddate,
      status: data.status,
      note: data.note,
      createdAt: data.createdAt,
    };

    return this.projectRepo.create(project);
  }
}
