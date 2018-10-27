'use strict';

// SeaCreature factory - Parent

class SeaCreature {

  constructor(name, fins) {
    this.name = name;
    this.fins = fins;

  }

  live(){
    return 'Under the sea, Under the sea';
  }

}

// SeaCreature factory - child Fish

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

// SeaCreature factory - child Lobster

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

module.exports = {Fish, Lobster};

