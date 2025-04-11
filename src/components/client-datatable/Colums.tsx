import { Client } from "../../models/Client";
import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const columns: ColumnDef<Client>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "company",
    header: "Company",
  },
  {
    accessorKey: "contact",
    header: "Contact",
  },

  {
    accessorKey: "industry",
    header: "Industry",
  },
  {
    accessorKey: "note",
    header: "Note",
  },
];
