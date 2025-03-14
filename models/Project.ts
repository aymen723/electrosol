// export interface Project {
//   id: number;
//   name: string;
//   clientId: number;
//   startDate: string; // ISO date string
//   endDate?: string;
//   location: string;
//   budget: number;
//   status: string; // 'Pending' | 'In Progress' | 'Completed'
//   note?: string;
// }

export class Project {
  constructor(
    public id: number,
    public name: string,
    public clientId: number,
    public startDate: string, // ISO date string
    public location: string,
    public budget: number,
    public status: string, // 'Pending' | 'In Progress' | 'Completed'
    public endDate?: string,
    public note?: string
  ) {}
}
