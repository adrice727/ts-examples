class User {
  /**
   * Create a user
   * @param {Object} name
   * @param {string} name.first
   * @param {string} name.last
   * @param {string} [name.middleInitial]
   * @param {Object} email
   * @param {string} email.primary
   * @param {string} [email.secondary]
   * @param {Object} [address]
   * @param {string} address.street
   * @param {string} [address.streetAdditional]
   * @param {string} address.city
   * @param {string} address.state
   * @param {number} address.zip
   * @param {Object} [phone]
   * @param {string} phone.primary
   * @param {string} phone.secondary
   */
  constructor(name, email, address, phone) {
    this.name = name;
    this.email = email;
    this.address = address;
    this.phone = phone;
  }
}


const tim = new User(
  { first: 'tim', last: 'pike', middleInitial: 'd' },
  { primary: 'tim22@gmail.com' },
  { street: '1222 Haight Street', streetAdditional: 'Apt 22', city: 'San Francisco', state: 'CA', zip: 94117 },
  { primary: '5553838393' },
)
