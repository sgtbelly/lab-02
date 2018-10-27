'use strict';

// Vehicle factory - parent

class Vehicle {

  constructor(name,wheels) {
    this.name = name;
    this.wheels = wheels;
  }

  drive(){
    return 'Moving Forward';
  }

  stop(){
    return 'Stopping';
  }

}

// Vehicle factory - child Car

class Car extends Vehicle {
  constructor(name) {
    super();
    this.name = name;
    this.wheels = 4;
  }
}

// Vehicle factory - child Motorcycle

class Motorcycle extends Vehicle {
  constructor(name){
    super();
    this.name = name;
    this.wheels = 2;
  }

  wheelie(){
    return 'Wheee!';
  }

}

module.exports = {Car, Motorcycle};
