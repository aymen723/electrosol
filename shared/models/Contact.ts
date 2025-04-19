export class ContactInfo {
  id: number;
  phoneNumber: string | null;
  email: string;

  constructor(id: number, phoneNumber: string | null, email: string) {
    this.id = id;
    this.phoneNumber = phoneNumber;
    this.email = email;
  }
}
