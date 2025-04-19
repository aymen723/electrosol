import { Client } from "./Client";
import { Location } from "./Location";

enum Status {
  onprogress,
  onhold,
  finished,
  cancelled,
}
export class Project {
  id: number;
  client: Client;
  name: string;
  startDate: string | null;
  endDate: string | null;
  location: Location;
  budget: number | null;
  status: Status;
  note: string | null;
  createdAt: string;

  constructor(
    id: number,
    client: Client,
    name: string,
    startDate: string | null,
    endDate: string | null,
    location: Location,
    budget: number | null,
    status: Status,
    note: string | null,
    createdAt: string
  ) {
    this.id = id;
    this.client = client;
    this.name = name;
    this.startDate = startDate;
    this.endDate = endDate;
    this.location = location;
    this.budget = budget;
    this.status = status;
    this.note = note;
    this.createdAt = createdAt;
  }
}
