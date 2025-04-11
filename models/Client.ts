import { ContactInfo } from "./Contact";

export class Client {
  constructor(
    public id: number,
    public name: string,
    public industry?: string,
    public company?: string,
    public note?: string,
    public contact?: ContactInfo,
    public createAt?: number
  ) {}
}
