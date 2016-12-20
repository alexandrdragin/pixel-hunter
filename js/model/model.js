import questsData from '../data/questsData';
import {setTime,
        setLives,
        setCurrentLevel,
        setFinalResult,
        getPoints,
        checkAnswerSpeed
} from './set';

class Model {
  constructor(state = questsData) {
    this._state = state;
    // вопрос
  }

  reset() {
    this._state = questsData;
  }

  get state() {
    return this._state;
  }

  getStats() {
    return this._state.answer;
  }

  updateLives(lives) {
    this._state = setLives(this._state.base.lives, lives);
  }

  hasLevel() {
    return this._state.base.currentLevel + 1;
  }

  tick() {
    this._state = setTime(this._state.base.timer, this._state.base.timer - 1);
  }

  resetTime() {
    this._state = setTime(this._state.base.timer, 30);
  }

  timeIsOver() {
    debugger;
    return this._state.base.timer >= 0;
  }

  nextTask() {
    this._state = setCurrentLevel(this._state.base.currentLevel, this._state.base.currentLevel + 1);
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
