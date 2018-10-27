'use strict';

class Vehicle {

  constructor(name,wheels) {
    this.name = name;
    this.wheels = wheels;
  }

  email(isvalid){
    return 'Valid Email';
  }

  stop(){
    return 'Stopping';
  }

}


class Car extends Vehicle {
  constructor(name) {
    super();
    this.name = name;
    this.wheels = 4;
  }
}
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

class FlyingVehicle {

  constructor(name,wings) {
    this.name = name;
    this.wings = wings;

  }

  seats(){
    return 'full';
  }

  space(){
    return 'Sardines';
  }


}

class Airplane extends FlyingVehicle {
  constructor(name) {
    super();
    this.name = name;
    this.wings = fixed;
  }

  flying(){
    return 'ZEE PLANE! ZEE PLANE!';
  }
}

class Helicopter extends FlyingVehicle {
  constructor(name) {
    super();
    this.name = name;
    this.wings = rotary;
  }

  loading(){
    return 'GET TO THE CHOOPPAA!!!';
  }
}



module.exports = {Car, Motorcycle, Airplane, Helicopter};
