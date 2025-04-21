import { ipcMain } from "electron";
import { ProjectRepositoryImpl } from "../repositoryImpl/ProjectRepositoryImpl";
import { CreateProject } from "../../application/usecases/projects/CreateProject";

const repo = new ProjectRepositoryImpl();
export const createProject = new CreateProject(repo);

ipcMain.handle("project:create", async (_, data) => {
  try {
    const result = await createProject.execute(data);
    return { success: true, client: result };
  } catch (e: any) {
    return { success: false, error: e.message };
  }
});
