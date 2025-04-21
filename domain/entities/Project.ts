import { Client } from "./Client";

// export class Project {
//   id?: number;
//   client?: Client;
//   name?: string;
//   startdate?: Date;
//   enddate?: Date;
//   budget?: string;
//   status?: Status;
//   note?: string;
//   createdAt?: number;
// }

export interface Project {
  id?: number;
  client?: Client;
  name?: string;
  startdate?: Date;
  enddate?: Date;
  budget?: string;
  status?: Status;
  note?: string;
  createdAt: Date | null;
}

export enum Status {
  onProgress,
  Cancelled,
  onHold,
  finished,
}
