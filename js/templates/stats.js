import getElementFromTemplate from '../getElementFromTemplate';

import smallHeader from './smallHeader.js';

const statsMap = {
  h1: 'Победа!',
  score1: {
    resultNumber: '1.',
    resultPoints: '×&nbsp;100',
    resultTotal: '900',
    bonus1: {
      bonusForWhat: 'Бонус за скорость:',
      resultExtra: '1&nbsp;',
      resultPoints: '×&nbsp;50',
      resultTotal: '50'
    },
    bonus2: {
      bonusForWhat: 'Бонус за жизни:',
      resultNumber: '2&nbsp;',
      resultPoints: '×&nbsp;50',
      resultTotal: '100'
    },
    bonus3: {
      bonusForWhat: 'Штраф за медлительность:',
      resultNumber: '2&nbsp;',
      resultPoints: '×&nbsp;50',
      resultTotal: '-100'
    },
    finalscore: '950'
  },
  score2: {
    resultNumber: '2.',
    resultPoints: '',
    resultTotal: 'fail'
  },
  score3: {
    resultNumber: '3.',
    resultPoints: '×&nbsp;100',
    resultTotal: '900',
    bonus1: {
      bonusForWhat: 'Бонус за жизни:',
      resultNumber: '2&nbsp;',
      resultPoints: '×&nbsp;50',
      resultTotal: '100'
    },
    finalscore: '1000'
  },
};

const stats = getElementFromTemplate(`<header class="header">
  ${smallHeader}
  </header>
  <div class="result">
    <h1>${statsMap.h1}</h1>
    <table class="result__table">
      <tr>
        <td class="resultNumber">${statsMap.score1.resultNumber}</td>
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
        <td class="resultPoints">${statsMap.score1.resultPoints}</td>
        <td class="resultTotal">${statsMap.score1.resultTotal}</td>
      </tr>
      <tr>
        <td></td>
        <td class="resultExtra">${statsMap.score1.bonus1.bonusForWhat}</td>
        <td class="resultExtra">${statsMap.score1.bonus1.resultExtra}<span class="stats__result stats__result--fast"></span></td>
        <td class="resultPoints">${statsMap.score1.bonus1.resultPoints}</td>
        <td class="resultTotal">${statsMap.score1.bonus1.resultTotal}</td>
      </tr>
      <tr>
        <td></td>
        <td class="resultExtra">${statsMap.score1.bonus2.bonusForWhat}</td>
        <td class="resultExtra">${statsMap.score1.bonus2.resultExtra}<span class="stats__result stats__result--heart"></span></td>
        <td class="resultPoints">${statsMap.score1.bonus2.resultPoints}</td>
        <td class="resultTotal">${statsMap.score1.bonus2.resultTotal}</td>
      </tr>
      <tr>
        <td></td>
        <td class="resultExtra">${statsMap.score1.bonus3.bonusForWhat}</td>
        <td class="resultExtra">${statsMap.score1.bonus3.resultExtra}<span class="stats__result stats__result--slow"></span></td>
        <td class="resultPoints">${statsMap.score1.bonus3.resultPoints}</td>
        <td class="resultTotal">${statsMap.score1.bonus3.resultTotal}</td>
      </tr>
      <tr>
        <td colspan="5" class="resultTotal  resultTotal--final">${statsMap.score1.finalscore}</td>
      </tr>
    </table>
    <table class="result__table">
      <tr>
        <td class="resultNumber">${statsMap.score2.resultNumber}</td>
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
        <td class="resultTotal">${statsMap.score2.resultPoints}</td>
        <td class="resultTotal  resultTotal--final">${statsMap.score2.resultTotal}</td>
      </tr>
    </table>
    <table class="result__table">
      <tr>
        <td class="resultNumber">${statsMap.score3.resultNumber}</td>
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
        <td class="resultPoints">${statsMap.score3.resultPoints}</td>
        <td class="resultTotal">${statsMap.score3.resultTotal}</td>
      </tr>
      <tr>
        <td></td>
        <td class="resultExtra">${statsMap.score3.bonus1.bonusForWhat}</td>
        <td class="resultExtra">${statsMap.score3.bonus1.resultExtra}<span class="stats__result stats__result--heart"></span></td>
        <td class="resultPoints">${statsMap.score3.bonus1.resultPoints}</td>
        <td class="resultTotal">${statsMap.score3.bonus1.resultTotal}</td>
      </tr>
      <tr>
        <td colspan="5" class="resultTotal  resultTotal--final">${statsMap.score3.finalscore}</td>
      </tr>
    </table>
  </div>`);

export default stats;
