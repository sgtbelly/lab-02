'use strict';

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

class SeaCreature {

  constructor(name, fins) {
    this.name = name;
    this.fins = fins;

  }

  live(){
    return 'Under the sea Under the sea';
  }




}

class Fish extends SeaCreature {

  constructor(name) {
    super();
    this.name = name;
    this.fins = 2;
  }

  swimming(){
    return 'just keep swimming, just keep swimming, swimming, swimming';
  }

  alias(){
    return 'Dory';
  }

}

class Lobster extends SeaCreature {

  constructor(name) {
    super();
    this.name = name;
    this.fins = 0;
  }

  alias(){
    return 'Sebastian';
  }

  home(){
    return 'My Belly';
  }
}
module.exports = {Car, Motorcycle, Airplane, Helicopter, SeaCreature};
