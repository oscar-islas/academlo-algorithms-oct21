class Vehicle {
  constructor(sourceOfEnergy, tires, color, maxSpeed) {
    this.tires = tires;
    this.color = color;
    this.speed = 0;
    this.maxSpeed = maxSpeed;
    this.sourceOfEnergy = sourceOfEnergy;
  }

  sound() {}
  speedUp() {}
  brake() {}
}

class Car extends Vehicle {
  constructor(sourceOfEnergy, tires, color, maxSpeed) {
    super(sourceOfEnergy, tires, color, maxSpeed);
  }

  static sound() {
    console.log('brrr...');
  }

  speedUp() {
    if (this.maxSpeed < this.speed) {
      this.speed += 20;
    }
  }

  brake() {
    if (this.speed >= 20) {
      this.speed -= 20;
    }
  }
}

// const audi = new Car('fuel', 4, 'gray', 250);
// audi.speedUp();
// audi.speedUp();
// audi.speedUp();
// audi.speedUp();
// audi.speedUp();
// audi.brake();
// audi.brake();
// audi.brake();
// audi.brake();
// audi.brake();
// audi.brake();
// console.log(audi.speed);
Car.sound();
class Mario {
  #color;
  constructor() {
    this.#color = 'red';
    this.size = 3;
    this.coordX = 0;
    this.coordY = 0;
  }

  talk() {
    console.log('Mamma Mia!');
  }

  jump() {
    this.coordY = 2;
  }

  moveForward() {
    this.coordX += 2;
  }

  moveBackwards() {
    this.coordX -= 2;
  }

  getColor() {
    return this.#color;
  }
}

const marioBross = new Mario();
console.log(marioBross.color);
console.log(marioBross.getColor());
