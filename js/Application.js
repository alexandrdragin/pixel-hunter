import draw from './utils/draw.js';

import intro from './view/intro';
import greeting from './view/greeting';
import rules from './view/rules';
import stats from './view/stats';

import startGame from './startGame';
import gamePresenter from './gamePresenter';

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
    gamePresenter();
  }

  static showStats(data) {
    draw(startGame(stats(data)));
  }

}
