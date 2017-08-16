import { User } from './user';


class Admin extends User {
  private access: AccessLevel
  constructor(name: Name, email: Email, access: AccessLevel, address: Address, phone: Phone) {
    super(name, email, address, phone);
    this.access = access;
  }
}

const adminTim = new Admin(
  { first: 'tim', last: 'pike', middleInitial: 'd' },
  { primary : 'tim22@gmail.com' },
  AccessLevel.standard,
  { street: '1222 Haight Street', streetAdditional: 'Apt 22', city: 'San Francisco', state: 'CA', zip: 94117 },
  { primary: '5553838393' },
);