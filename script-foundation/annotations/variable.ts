let apples = 1;
let texts: string = "get ready";

class Car {}
let car: Car = new Car();
let samObj: { x: number; y: number } = {
  x: 10,
  y: 20,
};

let sum: (x: number, y: number) => number = (x: number, y: number): number => {
  return x + y;
};

interface Car {
  //   make: string;
  //   model: string;
  //   year: number;
  summary(): string;
}

const printCar = (car: Car): void => {
  //   console.log(`care make is ${car.make}`);
  //   console.log(`model of the car is ${car.model}`);
  //   console.log(`year is ${car.year}`);
  console.log(car.summary());
};

const innova = {
  make: "Toyota",
  model: "Innova",
  year: 2015,
  summary() {
    return `this is car summary ${this.make}`;
  },
};
printCar(innova);
