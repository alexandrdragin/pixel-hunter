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

  startGame() {
    if (!this.model._state.questions[this.model._state.base.currentLevel + 1]) {
      this.endGame();
    } else {
      this.nextTask();
    }
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

  createHeader() {
    return new Header(this.model.state.base).element;
  }

  updateHeader() {
    const newHeader = this.createHeader();

    this.header.parentElement.replaceChild(newHeader, this.header);
    this.header = newHeader;
  }

  nextTask() {

    this.createScreenGame();
    this.model.nextTask();
    this.startTimer();
  }

  getContentGame() {
    return gameScreen(
        this.model._state.questions[this.model._state.base.currentLevel].type,
        this.model._state.questions[this.model._state.base.currentLevel]
      );
  }

  startTimer() {
    this.model.resetTime();
    this.stopTimer();
    this.updateHeader();

    this.timers = setInterval(() => {
      if (!this.model.timeIsOver()) {
        this.stopTimer();
        this.startGame();
        return;
      }

      this.model.tick();
      this.updateHeader();
    }, 1000);
  }

  // //////////////////////////

  onAnswer(time, answer) {
    this.stopTimer();
    this.model.addAnswer(time, answer);
    this.nextTask();
  }

  stopTimer() {
    clearInterval(this.timers);
  }

  endGame() {
    this.stopTimer();
    this.model.end();

    return stats();
  }

  endGame() {
    this.stopTimer();
    this.model.end();


    let screenGame = getElementFromTemplate('');
    this.header = this.createHeader();
    screenGame.appendChild(this.header);

    screenGame.appendChild(stats());

    draw(screenGame);

  }

  // вопрос ////////////////////////////
  bindHandlers() {
    this._element.querySelector('.header__back').addEventListener('click', this.onClick);

    this.element.querySelector('.header__back').addEventListener('click', () => {
      Application.showGreeting();
    });
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
