import questsData from '../data/questsData';
import {setTime,
        setLives,
        setCurrentLevel,
        checkRightAnswerSpeed
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
    this._state = setLives(this._state, lives);
  }

  hasLevel() {
    return this._state.base.currentLevel + 1;
  }

  tick() {
    this._state = setTime(this._state, this._state.base.timer - 1);
  }

  resetTime() {
    this._state = setTime(this._state, 10);
  }

  timeIsOver() {
    return this._state.base.timer >= 1;
  }

  nextTask() {
    this._state = setCurrentLevel(this._state, this._state.base.currentLevel + 1);
  }

  addAnswer(time, answer) {
    this._state = checkRightAnswerSpeed(this._state, time, answer);
  }

  end() {
  //  this._state = setFinalResult(this._state);
    // this._state = getPoints(this._state);
  }

}

export default new Model();
