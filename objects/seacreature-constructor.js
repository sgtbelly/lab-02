'use strict';

// SeaCreature Factory - parent

const SeaCreature = function(name, fins) {
  this.name = name;
  this.fins = fins;
};

SeaCreature.prototype.live = () => {
  return 'Under the sea, Under the sea';
};

// SeaCreature factory - child Fish

const Fish = function(name) {
  SeaCreature.call(this, name, 2);
};

Fish.prototype = new SeaCreature();

Fish.prototype.swimming = () => {
  return 'just keep swimming, just keep swimming, swimming, swimming';
};

Fish.prototype.alias = () => {
  return 'Dory';
};

// SeaCreature factory - child Lobster

const Lobster = function(name) {
  SeaCreature.call(this,name,0);
};

Lobster.prototype = new SeaCreature();

Lobster.prototype.alias = () => {
  return 'Sebastian';
};

Lobster.prototype.home = () => {
  return 'My Belly';
};

module.exports = {Fish, Lobster};