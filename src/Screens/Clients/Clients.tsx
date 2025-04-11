// import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
// import { columns, Payment } from "../../components/client-datatable/Colums";
// import { DataTable } from "../../components/client-datatable/Data-table";

export const Clients = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Clients</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
          {/* {Data.length > 0 ? <DataTable columns={columns} data={Data} /> : null} */}
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
};
