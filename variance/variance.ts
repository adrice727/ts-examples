class Animal {
  constructor(public name: string) { }
}

class Cat extends Animal {
  constructor(name: string) {
    super(name);
  }
}

class Lion extends Cat {
  constructor(name: string) {
    super(name)
  }
}

const albert = new Animal('albert');
const charles = new Cat('charles');
const lisa = new Lion('lisa');


const show = (a: Cat): void => {
  console.log(a.name);
}

// Invariant: Cat
// Covariant: Cat | Lion
// Contravariant: Animal | Cat
// Bivariant: Animal | Cat | Lion