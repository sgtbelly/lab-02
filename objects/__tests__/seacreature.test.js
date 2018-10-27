'use strict';

const SeaCreature = require('../seacreature-factory.js');

describe('SeaCreature', () => {

  describe('Fish', () => {

    let fish = new SeaCreature.Fish('Nemo');

    it('has 2 fins', () => {
      expect(fish.fins).toEqual(2);
    });

    it('swims', () => {
      expect(fish.swimming()).toBeTruthy();
    });

    it('has an alias', () => {
      expect(fish.alias()).toBeTruthy();
    });

    it('lives', () => {
      expect(fish.live).toBeTruthy();
    });

  });

  describe('Lobster', () => {

    let lobster = new SeaCreature.Lobster('Boston');

    it('has rotary wings', () => {
      expect(lobster.fins).toEqual(0);
    });

    it('lives', () => {
      expect(lobster.live()).toBeTruthy();
    });

    it('has an alias', () => {
      expect(lobster.alias()).toBeTruthy();
    });

    it('is at home', () => {
      expect(lobster.home()).toBeTruthy();
    });

  });

});