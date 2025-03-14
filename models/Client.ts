// export interface Client {
//   id: number;
//   name: string;
//   contactInfo?: string;
//   industry?: string;
//   company?: string;
//   note?: string;
// }

export class Client {
  constructor(
    public id: number,
    public name: string,
    public contactInfo?: string,
    public industry?: string,
    public company?: string,
    public note?: string
  ) {}
}
