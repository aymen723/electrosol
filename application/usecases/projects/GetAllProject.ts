import { Project } from "../../../domain/entities/Project";
import { ProjectRepository } from "../../../domain/repositories/ProjectRepository";

export class GetAllProject {
  constructor(private projectRepo: ProjectRepository) {}

  async execute(): Promise<Project[]> {
    return this.projectRepo.getAll();
  }
}
