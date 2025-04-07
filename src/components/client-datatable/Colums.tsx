"use client";

// import { Client } from "@/models/Client";
import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
];

// public name: string,
//   public contactInfo?: string,
//   public industry?: string,
//   public company?: string,
//   public note?: string
// export const clientcolumns: ColumnDef<Client> = [
//   {
//     accessorKey: "",
//   },
// ];
