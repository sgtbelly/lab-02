'use strict';

// FlyingVehicle factory - parent

const FlyingVehicle = function(name, wings) {
  this.name = name;
  this.wings = wings;
};

FlyingVehicle.prototype.seats = () => {
  return 'full';
};

FlyingVehicle.prototype.space = () => {
  return 'Sardines';
};

// FlyingVehicle factory - child Airplane

const Airplane = function(name) {
  FlyingVehicle.call(this, name, 'fixed');
};

Airplane.prototype = new FlyingVehicle();

Airplane.prototype.flying = () => {
  return 'ZEE PLANE! ZEE PLANE!';
};

// FlyingVehicle factory - child Helicopter

const Helicopter = function(name) {
  FlyingVehicle.call(this,name,'rotary');
};

Helicopter.prototype = new FlyingVehicle();

Helicopter.prototype.loading = () => {
  return 'GET TO TH CHOPPA!!!';
};

module.exports = {Airplane, Helicopter};