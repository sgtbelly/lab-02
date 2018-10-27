'use strict';

// Vehicle Factory
const Vehicle = function(name, wheels) {
  this.name = name;
  this.wheels = wheels;
};

Vehicle.prototype.drive = () => {
  return 'Moving Forward';
};

Vehicle.prototype.stop = () => {
  return 'Stopping';
};

// Car Constructor
const Car = function(name) {
  Vehicle.call(this, name, 4);
};

Car.prototype = new Vehicle();

const Motorcycle = function(name) {
  Vehicle.call(this,name,2);
};

Motorcycle.prototype = new Vehicle();

Motorcycle.prototype.wheelie = () => {
  return 'Wheee!';
};

// Flying Vehicle factory

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

module.exports = {Car, Motorcycle};
