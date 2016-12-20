import draw from './utils/draw';
import getElementFromTemplate from './utils/getElementFromTemplate';

import Header from './view/header';

import model from './model/model';
import startGame from './startGame';

class GamePresenter {
  constructor(GameModel) {
    this.timer = null;
    this.header = null;
    this.content = null;

    this.model = GameModel;
  }

  createScreenGame() {
    let screenGame = getElementFromTemplate('');

    this.header = this.createHeader();
    screenGame.appendChild(this.header);

    draw(startGame());
  }

  startGame() {
    this.model.reset();
    this.createScreenGame();
    this.startTimer();
  }

  endGame() {
    this.model.end();
  }

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

  startTimer() {
    this.model.resetTime();
    this.updateHeader();

    this.timer = setInterval(() => {
      if (!this.model.timeIsOver()) {
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

  onAnswer(time, answer) {
    this.stopTimer();
    this.model.addAnswer(time, answer);
    this.nextTask();
  }

  createHeader() {
    return new Header(this.model.state.base).element;
  }

  updateHeader() {
    const newHeader = this.createHeader();

    this.header.parentElement.replaceChild(newHeader, this.header);
    this.header = newHeader;
  }
}

const gamePresenter = new GamePresenter(model);

export default () => gamePresenter.startGame();
