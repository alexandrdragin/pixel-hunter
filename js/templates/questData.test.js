import assert from 'assert';
import gameData from './questsData';

import {setLives,
   setTime,
    getPoints,
     setFinalResult,
      addAnswer, setCurrentLevel, getLevel} from './set';

describe('Game', function () {

  describe('Getting level', () => {
    describe('Returns', () => {
      it('setCurrentLevel() should return an {Object}', () => {
        assert.ok(typeof setCurrentLevel(gameData, 1) === 'object');
      });

      it('getLevel() should return an {Object}', () => {
        assert.ok(typeof getLevel(1) === 'object');
      });

      it('If I add answer Ill go to the next level', () => {
        assert.deepEqual(addAnswer(0, 1, 2), {answer: 1, level: 2});
      });
    });
  });

  describe('Lives', () => {
    describe('Setting', () => {
      it('Number of player\'s lives successfully changes', () => {
        assert.deepEqual(setLives({lives: 1}, 2), {lives: 2});
      });
      it('setLives throws an error if Number of lives < 0', () => {
        assert.throws(() => {
          setLives(gameData, -1);
        });
      });
    });
  });

  describe('Time', () => {
    describe('Setting', () => {
      it('Number of time successfully changes', () => {
        assert.equal(setTime(gameData, 15).time, 15);
      });
    });
    describe('Failures', () => {
      it('setTime throws an error if time is larger than 30', () => {
        assert.throws(() => setTime(gameData, 9999999));
      });
    });
  });

  describe('Points', () => {
    describe('Calculating', () => {
      it(`Points calculates correctly with the following input parameters:
        total = 0, fast = 0, lives = 0, slow = 0`, () => {
        assert.equal(getPoints(0, 0, 0, 0), 0);
      });
      it(`Points calculates correctly with the following input parameters:
        total = 9, fast = 1, lives = 2, slow = 2`, () => {
        assert.equal(getPoints(9, 1, 2, 2), 950);
      });
      it(`Points calculates correctly with the following input parameters:
        total = 9, fast = 0, lives = 2, slow = 0`, () => {
        assert.equal(getPoints(9, 0, 2, 0), 1000);
      });
      it(`Points calculates correctly with the following input parameters:
        total = 10, fast = 10, lives = 0, slow = 0`, () => {
        assert.equal(getPoints(10, 10, 0, 0), 1500);
      });
    });
  });

  describe('Game result', () => {
    describe('Setting', () => {
      it('Game result successfully find', () => {
        assert.deepEqual(setFinalResult('win'), {result: 'win'} );
      });
    });
    describe('Failures', () => {
      it('setGameResult throws an error if undefined/null value passed to it', () => {
        assert.throws(() => setFinalResult(null));
      });
    });
  });
});
