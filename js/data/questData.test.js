import assert from 'assert';
import gameData from './questsData';

import {setTime, setFinalResult,
    setCurrentLevel, getLevel} from '../model/set';

describe('Game', function () {

  describe('Getting level', () => {
    describe('Returns', () => {
      it('setCurrentLevel() should return an {Object}', () => {
        assert.ok(typeof setCurrentLevel(gameData, 3) === 'object');
      });

      it('getLevel() should return an {Object}', () => {
        assert.ok(typeof getLevel(gameData, 1) === 'object');
      });
    });
  });
  describe('Time', () => {
    describe('Failures', () => {
      it('setTime throws an error if time is larger than 30', () => {
        assert.throws(() => setTime(gameData, 9999999));
      });
    });
  });

  describe('Game result', () => {
    describe('Failures', () => {
      it('setGameResult throws an error if undefined/null value passed to it', () => {
        assert.throws(() => setFinalResult(null));
      });
    });
  });
});
