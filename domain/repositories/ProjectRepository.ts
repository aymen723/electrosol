import { Project } from "../entities/Project";

export interface ProjectRepository {
  create(project: Project): Promise<Project>;
  getAll(): Promise<Project[]>;
  delete(project: Project): Promise<Project>;
  update(project: Project): Promise<Project>;
  getById(id: number): Promise<Project | null>;
}
