class User {
  constructor(name) {
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 4) {
      console.log("Name is too short");
      return;
    }

    this._name = value;
  }

  sayHello() {
    console.log("Hello World!");
    if (this._name !== undefined) {
      console.log(`This is ${this.name} here. Nice to meet you.`);
    }
  }
}

let user = new User("");
user.sayHello();

// console.log(typeof User);
