class Animal {
  name: string
  constructor(name: string) {
    this.name = name;
  }
}

class Cat extends Animal {
  name: string
  constructor(name: string) {
    super(name);
  }
}

class Lion extends Cat {
  name: string
  constructor(name: string) {
    super(name)
  }
}

const albert = new Animal('albert');
const charles = new Cat('charles');
const lisa = new Lion('lisa');


const show = (a: Cat): void => {
  console.log(a);
}

// Invariant: Cat
// Covariant: Cat | Lion
// Contravariant: Animal | Cat
// Bivariant: Animal | Cat | Lion
