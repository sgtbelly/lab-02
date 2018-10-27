'use strict';

// FlyingVehicle factory - parent

const FlyingVehicle = () => ({
  seats: ()=> {return('full');},
  space: ()=> {return('Sardines');},
});

// FlyingVehicle factory - child Airplane

function Airplane(name) {
  let wings = 'fixed';

  let airplane = Object.assign({}, {name}, {wings}, {flying}, FlyingVehicle());

  function flying() { return 'ZEE PLANE! ZEE PLANE!';}

  return Object.freeze(airplane);
}

// FlyingVehicle factory - child Helicopter

function Helicopter(name) {
  let wings = 'rotary';

  let helicopter = Object.assign({}, {name}, {wings}, {loading}, FlyingVehicle());

  function loading() { return 'GET TO THE CHOPPA!!!';}

  return Object.freeze(helicopter);
}

module.exports = {Airplane, Helicopter};