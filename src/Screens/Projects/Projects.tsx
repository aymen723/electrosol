import { columns } from "../../components/project-datatable/Colums";
import { DataTable } from "../../components/project-datatable/Data-table";

import React, { useState } from "react";

export const Projects = () => {
  const [Data, setData] = useState([]);

  async function HandleTEST() {
    const data = {
      name: "test",
      // status: ,
      budget: 1000,
      clientId: 1,
      startDate: new Date(),
      endDate: new Date(),
      createdAt: new Date(),
      note: "test",
    };
    window.ipcRenderer;

    // const response: CreateProjectResponse = await window.api.createProject(
    //   data
    // );
    console.log(window.ipcRenderer.test());
  }
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <h1>Projects</h1>
      <button onClick={HandleTEST} className="bg-red-500">
        test
      </button>
      {Data.length > 0 ? <DataTable columns={columns} data={Data} /> : null}
    </div>
  );
};
