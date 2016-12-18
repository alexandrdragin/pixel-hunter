import draw from '../draw.js';

import intro from './intro';

import greeting from './greeting';
import rules from './rules';
import startGame from './startGame';
import stats from './stats';

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
    draw(startGame());
  }

  static showStats(data) {
    draw(startGame(stats(data)));
  }

}
