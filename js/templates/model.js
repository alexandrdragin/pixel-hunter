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
    this.state = state;
  }

  reset() {
    this.state = questsData.base;
  }

  get state() {
    return this.state;
  }

  getStats() {
    return this.state.answer;
  }

  updateLives(lives) {
    this.state = setLives(this.state, lives);
  }

  tick() {
    this.state = setTime(this.state, this.state.time - 1);
  }

  resetTime() {
    this.state = setTime(this.state, 30);
  }

  timeIsOver() {
    return this.state.time >= 0;
  }

  nextTask() {
    this.state = setCurrentLevel(this.state, this.state.base.currentLevel + 1);
  }

  addAnswer(time, answer) {
    this.state = checkAnswerSpeed(this.state, time, answer);
  }

  end() {
    this.state = setFinalResult(this.state);
    this.state = getPoints(this.state);
  }

}

export default new Model();
