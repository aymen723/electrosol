import { ipcMain } from "electron";
import { ProjectRepositoryImpl } from "../repositoryImpl/ProjectRepositoryImpl";
import { CreateProject } from "../../application/usecases/projects/CreateProject";

const repo = new ProjectRepositoryImpl();
export const createProject = new CreateProject(repo);

ipcMain.handle("test", async (_, data) => {
  console.log("Received from renderer:", data);
  return { success: true, client: { id: 1, ...data } };
});
ipcMain.handle("project:create", async (_, data) => {
  try {
    const result = await createProject.execute(data);
    return { success: true, client: result };
  } catch (e: any) {
    return { success: false, error: e.message };
  }
});
