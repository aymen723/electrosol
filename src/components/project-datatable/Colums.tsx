import { Project } from "../../models/Project";
import { ColumnDef } from "@tanstack/react-table";

// export const columns: ColumnDef<Payment>[] = [
//   {
//     accessorKey: "status",
//     header: "Status",
//   },
//   {
//     accessorKey: "email",
//     header: "Email",
//   },
//   {
//     accessorKey: "amount",
//     header: "Amount",
//   },
// ];

export const columns: ColumnDef<Project>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "client",
    header: "Client",
  },
  {
    accessorKey: "budget",
    header: "Budget",
  },

  {
    accessorKey: "startDate",
    header: "StartDate",
  },
  {
    accessorKey: "endDate",
    header: "EndDate",
  },
  {
    accessorKey: "location",
    header: "Location",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
];
