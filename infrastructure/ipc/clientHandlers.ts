import { ipcMain } from "electron";
import { ClientRepositoryImpl } from "../repositoryImpl/ClientRepositoryImpl";
import { CreateClient } from "../../application/usecases/client/CreateClient";

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
