import draw from './utils/draw.js';

import intro from './view/intro';
import greeting from './view/greeting';
import rules from './view/rules';
import stats from './view/stats';
import errorElement from './view/error';

import GamePresenter from './GamePresenter';
import Model from './model/model';

let gameData;
let presenter;

export default class Application {

  static showWelcome() {
    draw(intro());
  }

  static showGreeting() {
    draw(greeting());
  }

  static showRules() {
    draw(rules());
  }


  static showGame() {
    if (!presenter) {
      presenter = new GamePresenter(new Model(gameData));
    }

    presenter.startGame();
  }

  static showStats(data) {
    draw(stats(data));
  }

  static showError(data) {
    draw(errorElement(data));
  }


  static set data(data) {
    gameData = data;
  }
}
