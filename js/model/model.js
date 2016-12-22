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
    console.log("1", state);
    // вопрос
  }

  reset() {
    console.log("2", this._state);

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
    console.log("updateLives", this._state);
  }

  hasLevel() {
    return this._state.base.currentLevel + 1;
  }

  tick() {
    console.log("tick", this._state);
    this._state = setTime(this._state, this._state.base.timer - 1);
  }

  resetTime() {
    this._state = setTime(this._state, 30);
  }

  timeIsOver() {
    return this._state.base.timer >= 1;
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
