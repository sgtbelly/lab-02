'use strict';

//SeaCreature factory - Parent

const SeaCreature = () => ({
  live: ()=> {return('Under the sea, Under the sea');},
});

// SeaCreature factory - child Fish

function Fish(name) {
  let fins = 2;

  let fish = Object.assign({}, {name}, {fins}, {swimming}, {alias}, SeaCreature());

  function swimming() {
    return 'just keep swimming, just keep swimming, swimming, swimming';
  }

  function alias() {
    return 'Dory';
  }

  return Object.freeze(fish);
}

// SeaCreature factory - child Lobster

function Lobster(name) {
  let fins = 0;

  let lobster = Object.assign({}, {name}, {fins}, {alias}, {home}, SeaCreature());

  function alias() { return 'Sebastian';}

  function home() { return 'My Belly';}

  return Object.freeze(lobster);
}

module.exports = {Fish, Lobster};