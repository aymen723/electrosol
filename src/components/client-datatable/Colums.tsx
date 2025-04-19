import { Client } from "../../../shared/models/Client";
import { ColumnDef } from "@tanstack/react-table";

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
