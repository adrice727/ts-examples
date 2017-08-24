class Name {
  /**
   * Creates a name instance
   * @param {string} first
   * @param {string} last
   * @param {string} [middleInitial]
   */
  constructor(first, last, middleInitial) {
    if (!first || !last) {
      throw new TypeError('First and last name cannot be undefined');
    }
    this.first = first;
    this.last = last;
    this.middleInitial = middle;
  }
}

class Email {
  /**
   * @param {string} primary
   * @param {string} [secondary]
   */
  constructor(primary, secondary) {
    if (!primary) {
      throw new TypeError('Primary email cannot be undefined');
    }
    this.primary = primary;
    this.secondary = secondary;
  }
}

class Address {
  /**
   *
   * @param {string} street
   * @param {string} [streetAdditional]
   * @param {string} city
   * @param {string} state
   * @param {number} zip
   */
  constructor(street, streetAdditional, city, state, zip) {
    if (!streetPrimary || !city || !state || !zip) {
      throw new TypeError('Street, city, state, and zip cannot be undefined');
    }
    this.street = street;
    this.streetAdditional = streetAdditional;
    this.city = city;
    this.state = state;
    this.zip = zip;
  }
}

class Phone {
  /**
   * @param {string} primary
   * @param {string} [secondary]
   */
  constructor(primary, secondary) {
    if (!primary) {
      throw new TypeError('Primary phone number cannot be undefined');
    }
    this.primary = primary;
    this.secondary = secondary;
  }
}

class User {
  /**
   * Create a user
   * @param {Name} name
   * @param {Email} email
   * @param {Address} [address]
   * @param {Phone} [phone]
   */
  constructor(name, email, address, phone) {
    this.name = name;
    this.email = email;
    this.address = address;
    this.phone = phone;
  }
}

const tim = new User(
  new Name('tim', 'pike', 'd'),
  new Email('tim22@gmail.com'),
  new Address('1222 Haight Street', 'Apt 22', 'San Francisco', 'CA', 94117),
  new Phone('5553838393'),
);