import { ipcMain } from "electron";
import { CreateClient } from "../../application/usecases/CreateClient";
import { ClientRepositoryImpl } from "../repositoryImpl/ClientRepositoryImpl";

const repo = new ClientRepositoryImpl();
const createClient = new CreateClient(repo);

ipcMain.handle("client:create", async (_, data) => {
  try {
    const result = await createClient.execute(data);
    return { success: true, client: result };
  } catch (e: any) {
    return { success: false, error: e.message };
  }
});
