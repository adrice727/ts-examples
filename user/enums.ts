import { User } from './user';


class Admin extends User {
  constructor(name: Name, email: Email, public access: AccessLevel, address: Address, phone: Phone) {
    super(name, email, address, phone);
  }
}

const adminTim = new Admin(
  { first: 'tim', last: 'pike', middleInitial: 'd' },
  { primary : 'tim22@gmail.com' },
  AccessLevel.standard,
  { street: '1222 Haight Street', streetAdditional: 'Apt 22', city: 'San Francisco', state: 'CA', zip: 94117 },
  { primary: '5553838393' },
);

const updateAcessLevel = (admin: Admin, level: AccessLevel): Admin => {
    return Object.assign({}, admin, { access: level });
}

updateAcessLevel(adminTim, AccessLevel.standard)