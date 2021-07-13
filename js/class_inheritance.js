class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  run(speed) {
    this.speed = speed;
    console.log(`${this.name} starts running with speed ${this.speed}.`);
  }

  stop() {
    this.speed = 0;
    console.log(`${this.name} stands still`);
  }
}

let animal = new Animal("Rhino");
console.log("Before running:", animal);
animal.run(40);
console.log("During running:", animal);
animal.stop();
console.log("After running:", animal);

// Rabbit class inherits from Animal class
class Rabbit extends Animal {
  // Constructor overriding
  constructor(name, earLength) {
    super(name);
    this.earLength = earLength;
  }

  hide() {
    console.log(`${this.name} hides!`);
  }

  //Function overriding
  stop() {
    super.stop();
    this.hide();
  }
}

let rabbit = new Rabbit("White Rabbit", 7);
rabbit.run(5);
rabbit.stop();
// rabbit.hide();

console.log(rabbit.name, rabbit.earLength);
