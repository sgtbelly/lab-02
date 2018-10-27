'use strict';

// Vehicle factory - Parent

const Vehicle = () => ({
  drive: ()=> {return('Moving Forward');},
  stop: ()=> {return('Stopping');},
});

// Vehicle factory - child Car

function Car(name) {
  let wheels = 4;

  let car = Object.assign({}, {name}, {wheels}, Vehicle());

  return Object.freeze(car);
}

// Vehicle factory - child Motorcycle

function Motorcycle(name) {
  let wheels = 2;

  let motorcycle = Object.assign({}, {name}, {wheels}, {wheelie}, Vehicle());

  function wheelie() { return 'Wheee!';}

  return Object.freeze(motorcycle);
}

module.exports = {Car, Motorcycle};

