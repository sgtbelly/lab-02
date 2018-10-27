'use strict';

const FlyingVehicle = require('../flyingvehicle-factory.js');

describe('FlyingVehicles', () => {

  describe('Airplane', () => {

    let airplane = new FlyingVehicle.Airplane('c130');

    it('has fixed wings', () => {
      expect(airplane.wings).toEqual('fixed');
    });

    it('has seats', () => {
      expect(airplane.seats()).toBeTruthy();
    });

    it('has space', () => {
      expect(airplane.space()).toBeTruthy();
    });

    it('can fly', () => {
      expect(airplane.flying()).toBeTruthy();
    });

  });

  describe('Helicopter', () => {

    let helicopter = new FlyingVehicle.Helicopter('shithook');

    it('has rotary wings', () => {
      expect(helicopter.wings).toEqual('rotary');
    });

    it('has seats', () => {
      expect(helicopter.seats()).toBeTruthy();
    });

    it('has space', () => {
      expect(helicopter.space()).toBeTruthy();
    });

    it('when loading', () => {
      expect(helicopter.loading()).toBeTruthy();
    });

  });

});