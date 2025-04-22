// import { ipcRenderer } from "electron";
import { columns } from "../../components/project-datatable/Colums";
import { DataTable } from "../../components/project-datatable/Data-table";

import React, { useState } from "react";

export const Projects = () => {
  const [Data, setData] = useState([]);

  function Test() {
    window.api.test(data).then((res) => {
      console.log(res);
    });
  }

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <h1>Projects</h1>
      <button onClick={Test} className="bg-red-500">
        test
      </button>
      {Data.length > 0 ? <DataTable columns={columns} data={Data} /> : null}
    </div>
  );
};
