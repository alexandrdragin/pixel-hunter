import draw from './utils/draw';
import getElementFromTemplate from './utils/getElementFromTemplate';

import stats from './view/stats';
import gameScreen from './view/gameScreen.js';

import Application from './Application';
import Header from './view/header';

import model from './model/model';

class GamePresenter {
  constructor(GameModel) {
    this.timer = null;
    this.timer = null;
    this.level = null;
    this.header = null;
    this.content = null;
    this.model = GameModel;
  }

  createScreenGame() {
    let screenGame = getElementFromTemplate('');

    this.header = this.createHeader();
    screenGame.appendChild(this.header);

    this.content = this.getContentGame();
    screenGame.appendChild(this.content);

    this.model.updateLives(3);

    draw(screenGame);
  }

  getContentGame() {
    console.log("1", this.model._state.base.currentLevel);
    if (this.model._state.questions[this.model._state.base.currentLevel]) {

      const node = gameScreen(
          this.model._state.questions[this.model._state.base.currentLevel].type,
          this.model._state.questions[this.model._state.base.currentLevel]
        );

      this.model._state.base.currentLevel++;
      return node;

    } else {
      return this.endGame();
    }
  }

  startGame() {
    this.createScreenGame();
    this.startTimer();
  }

  endGame() {
    this.model.end();
    this.stopTimer();

    return stats();
  }


/*
  startTask() {
    this.updateContentGame();
    this.startTimer();
  }

  nextTask() {
    if (!(this.model.hasLevel(this.model._state.base.currentLevel + 1))) {
      this.endGame();
      return;
    }

    this.model.nextTask();
    this.startTask();
  }

  onAnswer(time, answer) {
    this.stopTimer();
    this.model.addAnswer(time, answer);
    this.nextTask();
  }
*/

  startTimer() {
    this.model.resetTime();
    this.stopTimer();
    this.updateHeader();

    this.timer = setInterval(() => {
      if (!this.model.timeIsOver()) {
        this.stopTimer();
        this.nextTask();
        return;
      }

      this.model.tick();
      this.updateHeader();
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.timer);
  }

  createHeader() {
    return new Header(this.model.state.base).element;
  }

  updateHeader() {
    const newHeader = this.createHeader();

    this.header.parentElement.replaceChild(newHeader, this.header);
    this.header = newHeader;
  }

  // вопрос
  bindHandlers() {
    this._element.querySelector('.header__back').addEventListener('click', this.onClick);
  }

  clearHandlers() {
    this._element.querySelector('.header__back').removeEventListener('click', this.onClick);
  }

  onClick() {
    Application.showRules();
  }
}

const gamePresenter = new GamePresenter(model);

export default () => gamePresenter.startGame();
