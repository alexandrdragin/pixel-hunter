import getElementFromTemplate from '../getElementFromTemplate';

const statsMap = {
  h1: 'Победа!',
  score1: {
    result__number: '1.',
    result__points: '×&nbsp;100',
    result__total: '900',
    bonus1: {
      bonus__forwhat: 'Бонус за скорость:',
      result__extra: '1&nbsp;',
      result__points: '×&nbsp;50',
      result__total: '50'
    },
    bonus2: {
      bonus__forwhat: 'Бонус за жизни:',
      result__number: '2&nbsp;',
      result__points: '×&nbsp;50',
      result__total: '100'
    },
    bonus3: {
      bonus__forwhat: 'Штраф за медлительность:',
      result__number: '2&nbsp;',
      result__points: '×&nbsp;50',
      result__total: '-100'
    },
    finalscore: '950'
  },
  score2: {
    result__number: '2.',
    result__points: '',
    result__total: 'fail'
  },
  score3: {
    result__number: '3.',
    result__points: '×&nbsp;100',
    result__total: '900',
    bonus1: {
      bonus__forwhat: 'Бонус за жизни:',
      result__number: '2&nbsp;',
      result__points: '×&nbsp;50',
      result__total: '100'
    },
    finalscore: '1000'
  },
};

const stats = getElementFromTemplate(`<header class="header">
    <div class="header__back">
      <span class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.png" width="101" height="44">
      </span>
    </div>
  </header>
  <div class="result">
    <h1>${statsMap.h1}</h1>
    <table class="result__table">
      <tr>
        <td class="result__number">${statsMap.score1.result__number}</td>
        <td colspan="2">
          <ul class="stats">
            <li class="stats__result stats__result--wrong"></li>
            <li class="stats__result stats__result--slow"></li>
            <li class="stats__result stats__result--fast"></li>
            <li class="stats__result stats__result--correct"></li>
            <li class="stats__result stats__result--wrong"></li>
            <li class="stats__result stats__result--unknown"></li>
            <li class="stats__result stats__result--slow"></li>
            <li class="stats__result stats__result--unknown"></li>
            <li class="stats__result stats__result--fast"></li>
            <li class="stats__result stats__result--unknown"></li>
          </ul>
        </td>
        <td class="result__points">${statsMap.score1.result__points}</td>
        <td class="result__total">${statsMap.score1.result__total}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">${statsMap.score1.bonus1.bonus__forwhat}</td>
        <td class="result__extra">${statsMap.score1.bonus1.result__extra}<span class="stats__result stats__result--fast"></span></td>
        <td class="result__points">${statsMap.score1.bonus1.result__points}</td>
        <td class="result__total">${statsMap.score1.bonus1.result__total}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">${statsMap.score1.bonus2.bonus__forwhat}</td>
        <td class="result__extra">${statsMap.score1.bonus2.result__extra}<span class="stats__result stats__result--heart"></span></td>
        <td class="result__points">${statsMap.score1.bonus2.result__points}</td>
        <td class="result__total">${statsMap.score1.bonus2.result__total}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">${statsMap.score1.bonus3.bonus__forwhat}</td>
        <td class="result__extra">${statsMap.score1.bonus3.result__extra}<span class="stats__result stats__result--slow"></span></td>
        <td class="result__points">${statsMap.score1.bonus3.result__points}</td>
        <td class="result__total">${statsMap.score1.bonus3.result__total}</td>
      </tr>
      <tr>
        <td colspan="5" class="result__total  result__total--final">${statsMap.score1.finalscore}</td>
      </tr>
    </table>
    <table class="result__table">
      <tr>
        <td class="result__number">${statsMap.score2.result__number}</td>
        <td>
          <ul class="stats">
            <li class="stats__result stats__result--wrong"></li>
            <li class="stats__result stats__result--slow"></li>
            <li class="stats__result stats__result--fast"></li>
            <li class="stats__result stats__result--correct"></li>
            <li class="stats__result stats__result--wrong"></li>
            <li class="stats__result stats__result--unknown"></li>
            <li class="stats__result stats__result--slow"></li>
            <li class="stats__result stats__result--wrong"></li>
            <li class="stats__result stats__result--fast"></li>
            <li class="stats__result stats__result--wrong"></li>
          </ul>
        </td>
        <td class="result__total">${statsMap.score2.result__points}</td>
        <td class="result__total  result__total--final">${statsMap.score2.result__total}</td>
      </tr>
    </table>
    <table class="result__table">
      <tr>
        <td class="result__number">${statsMap.score3.result__number}</td>
        <td colspan="2">
          <ul class="stats">
            <li class="stats__result stats__result--wrong"></li>
            <li class="stats__result stats__result--slow"></li>
            <li class="stats__result stats__result--fast"></li>
            <li class="stats__result stats__result--correct"></li>
            <li class="stats__result stats__result--wrong"></li>
            <li class="stats__result stats__result--unknown"></li>
            <li class="stats__result stats__result--slow"></li>
            <li class="stats__result stats__result--unknown"></li>
            <li class="stats__result stats__result--fast"></li>
            <li class="stats__result stats__result--unknown"></li>
          </ul>
        </td>
        <td class="result__points">${statsMap.score3.result__points}</td>
        <td class="result__total">${statsMap.score3.result__total}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">${statsMap.score3.bonus1.bonus__forwhat}</td>
        <td class="result__extra">${statsMap.score3.bonus1.result__extra}<span class="stats__result stats__result--heart"></span></td>
        <td class="result__points">${statsMap.score3.bonus1.result__points}</td>
        <td class="result__total">${statsMap.score3.bonus1.result__total}</td>
      </tr>
      <tr>
        <td colspan="5" class="result__total  result__total--final">${statsMap.score3.finalscore}</td>
      </tr>
    </table>
  </div>`);

export default stats;
