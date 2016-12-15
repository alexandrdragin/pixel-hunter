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

  hasLives() {
    this._state = setLives(this._state);
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

  addAnswer() {
    this._state = checkAnswerSpeed(this._state.time);
    this._state = addAnswer(this._state);
  }

  end() {
    this._state = setFinalResult(this._state);
    this._state = getPoints(this._state);
  }

}

export default new Model();
