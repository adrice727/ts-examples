export class User {
  name: Name
  email: Email
  address?: Address
  phone?: Phone
  constructor(name: Name, email: Email, address?: Address, phone?: Phone) {
    this.name = name;
    this.email = email;
    this.address = address;
    this.phone = phone;
  }
}

const tim = new User(
  { first: 'tim', last: 'pike', middleInitial: 'd' },
  { primary : 'tim22@gmail.com' },
  { street: '1222 Haight Street', streetAdditional: 'Apt 22', city: 'San Francisco', state: 'CA', zip: 94117 },
  { primary: '5553838393' },
);

