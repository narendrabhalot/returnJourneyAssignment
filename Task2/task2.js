class Car {
    constructor(brand, model, year) {
      this.brand = brand;
      this.model = model;
      this.year = year;
    }
    toString() {
      return `This car is a ${this.year} ${this.brand} ${this.model}.`;
    }
  }
  function mergeCarObjects(car1, car2) {
    const mergedCar = {};
  
  
    
    for (const [key, value] of Object.entries(car1)) {
      mergedCar[key] = value;
    }
  
    for (const [key, value] of Object.entries(car2)) {
      if (!(key in mergedCar)) {
        mergedCar[key] = value;
      }
    }
  
    return new Car(mergedCar.brand, mergedCar.model, mergedCar.year);
  }
  
  const car1 = new Car("Toyota", "Camry", 2023);
  const car2 = new Car("Honda", "Civic", 2022);
  const mergedCar = mergeCarObjects(car1, car2);
  console.log(mergedCar); 
  
  