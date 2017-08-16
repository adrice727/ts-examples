export default class User {
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

const susan = new User(
  { first: 'susan', last: 'williamson' },
  { primary : 'susq@gmail.com' },
  { street: '787 Waller Street', city: 'San Francisco', state: 'CA', zip: 94114 },
  { primary: '7872982929' },
);

const lili = new User(
  { first: 'lili', last: 'halson' },
  { primary : 'lilihal04@gmail.com' },
)

const peter = new User(
  { first: 'peter', last: 'song' },
  { primary : 'peterokok@gmail.com' },
  { street: '373 Mandolin', streetAdditional: 'Apt 684', city: 'Oakland', state: 'CA', zip: 94608 },
  { primary: '9456278716' },
);

const anna = new User(
  { first: 'anna', last: 'klein' },
  { primary : 'annaptok88@gmail.com' },
  { street: '2322 20th Steet', streetAdditional: 'Apt 4A', city: 'San Francisco', state: 'CA', zip: 94110 },
  { primary: '9456278716', secondary: '9457279992' },
);

const alberto = new User(
  { first: 'alberto', last: 'guzman' },
  { primary : 'slimalberto@gmail.com' },
  { street: '440 Page Street', streetAdditional: 'Apt 1A', city: 'San Francisco', state: 'CA', zip: 94114 },
);

const users = [tim, susan, lili, peter, anna, alberto];

const userZipCodes: number[] = users.reduce((acc: number[], user: User) => {
  return (user && user.address) ? acc.concat(user.address.zip) : acc;
}, []);

const secondaryPhoneNumbers: string[] = users.reduce((acc: string[], user: User) => {
  return (user.phone && user.phone.secondary) ? acc.concat(user.phone.secondary) : acc;
}, []);

const usersAroundLowerHaight = users.filter(users => users.address && users.address.zip === 94114)


