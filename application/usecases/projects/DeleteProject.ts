import { Project } from "../../../domain/entities/Project";
import { ProjectRepository } from "../../../domain/repositories/ProjectRepository";

export class DeleteProject {
  constructor(private projectRepo: ProjectRepository) {}

  async execute(data: Project): Promise<void> {
    this.projectRepo.delete(data);
  }
}
