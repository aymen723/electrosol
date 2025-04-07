import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { columns, Payment } from "../../components/client-datatable/Colums";
import { DataTable } from "../../components/client-datatable/Data-table";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ];
}

export const Clients = () => {
  const [Data, setData] = useState<Payment[] | []>([]);
  useEffect(() => {
    async function fetch() {
      const res = await getData();
      setData(res);
    }
    fetch();
  }, []);
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Clients</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
          {Data.length > 0 ? <DataTable columns={columns} data={Data} /> : null}
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
};
