class Ninja {
  constructor(name) {
    this.name = name;
  }

  announce() {alert(`${this.name} Ninja is here!`)}
}

let testNinja = new Ninja('Shadowbox');

testNinja.announce();