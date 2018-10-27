'use strict';

// FlyingVehicle factory - parent

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

// FlyingVehicle factory - child Airplane

class Airplane extends FlyingVehicle {
  constructor(name) {
    super();
    this.name = name;
    this.wings = 'fixed';
  }

  flying(){
    return 'ZEE PLANE! ZEE PLANE!';
  }
}

// FlyingVehicle factory - child Helicopter

class Helicopter extends FlyingVehicle {
  constructor(name) {
    super();
    this.name = name;
    this.wings = 'rotary';
  }

  loading(){
    return 'GET TO THE CHOOPPAA!!!';
  }
}

module.exports = {Airplane, Helicopter};