import draw from './utils/draw.js';

import intro from './view/intro';
import greeting from './view/greeting';
import rules from './view/rules';
import stats from './view/stats';
import errorElement from './view/error';

import gamePresenter from './GamePresenter';

let gameData;

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
    gamePresenter(gameData);
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
