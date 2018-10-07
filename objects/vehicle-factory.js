'use strict';

const Vehicle = () => ({
  drive: ()=> {return('Moving Forward')},
  stop: ()=> {return('Stopping')},
});

function Car(name) {
  let wheels = 4;

  let car = Object.assign({}, {name}, {wheels}, Vehicle());

  return Object.freeze(car);
}

function Motorcycle(name) {
  let wheels = 2;

  let motorcycle = Object.assign({}, {name}, {wheels}, {wheelie}, Vehicle());

  function wheelie() { return 'Wheee!';}

  return Object.freeze(motorcycle);
}

module.exports = {Car, Motorcycle};

