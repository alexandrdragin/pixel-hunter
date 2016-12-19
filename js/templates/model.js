import questsData from './questsData';
import {setTime,
        setLives,
        setCurrentLevel,
        setFinalResult,
        getPoints,
        checkAnswerSpeed
} from './set';

class Model {
  constructor(state = questsData.base) {
    this._state = state;
  }

  reset() {
    this._state = questsData.base;
  }

  get state() {
    return this._state;
  }

  getStats() {
    return this._state.answer;
  }

  updateLives(lives) {
    this._state = setLives(this._state, lives);
  }

  tick() {
    this._state = setTime(this._state, this._state.time - 1);
  }

  resetTime() {
    this._state = setTime(this._state, 30);
  }

  timeIsOver() {
    return this._state.time >= 0;
  }

  nextTask() {
    this._state = setCurrentLevel(this._state, this._state.base.currentLevel + 1);
  }

  addAnswer(time, answer) {
    this._state = checkAnswerSpeed(this._state, time, answer);
  }

  end() {
    this._state = setFinalResult(this._state);
    this._state = getPoints(this._state);
  }

}

export default new Model();
