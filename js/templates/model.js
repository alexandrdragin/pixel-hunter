import questsData from './questsData';
import {setTime,
        setLives,
        setCurrentLevel,
        setFinalResult,
        getPoints,
        addAnswer,
        checkAnswerSpeed
} from './set';

class Model {
  constructor(state = questsData.base) {
    this._state = state;
  }

  updateLives(lives) {
    this._state = setLives(this._state, lives);
  }

  tick() {
    this._state = setTime(this._state, this._state.time - 1);
  }

  resetTime() {
    this._state = setTime(this._state, 0);
  }

  timeIsOver() {
    return this._state.time >= this._state.timeLimit;
  }

  nextTask() {
    this._state = setCurrentLevel(this._state, this._state.questions + 1);
  }

  addAnswer(answer) {
    this._state = checkAnswerSpeed(this._state.time);
    this._state = addAnswer(this._state, answer);
  }

  end() {
    this._state = setFinalResult(this._state);
    this._state = getPoints(this._state);
  }

}

export default new Model();
