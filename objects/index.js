'use strict';

// const Vehicle = require('./vehicle-constructor.js');
// const Vehicle = require('./vehicle-class.js');
const Vehicle = require('./vehicle-factory.js');

// const FlyingVehicle = require('./flyingvehicle-class.js')
// const FlyingVehicle = require('./flyingvehicle-constructor.js');
const FlyingVehicle = require('./flyingvehicle-factory.js');

// const SeaCreature = require('./seacreature-class.js');
// const SeaCreature = require('./seacreature-constructor.js');
const SeaCreature = require('./seacreature-factory.js');

// Implement a car, motorcycle, flying vehicle, and sea creatures
const mazda = new Vehicle.Car('Mazda 3');
console.log(mazda.name, mazda.drive(), mazda.stop());

const harley = new Vehicle.Motorcycle('Harley');
console.log(harley.name, harley.wheelie(), harley.stop());

const apache = new FlyingVehicle.Helicopter('Apache');
console.log(apache.name, apache.seats(), apache.space(), apache.loading());

const cropduster = new FlyingVehicle.Airplane('Cropduster');
console.log(cropduster.name, cropduster.seats(), cropduster.space(), cropduster.flying());

const nemo = new SeaCreature.Fish('Nemo');
console.log(nemo.name, nemo.fins, nemo.live(), nemo.swimming(), nemo.alias());

const larry = new SeaCreature.Lobster('Larry');
console.log(larry.name, larry.fins, larry.live(), larry.alias(), larry.home());