import AbstractView from './abstract-view';
import Application from '../Application';

import statsBlock from '../templates/statsBlock.js';

import {fillQuestionTypeEach, fillQuestionTypedrawOrPhoto, fillQuestionTypefindOne} from '../templates/fillQuestion.js';

// в зависимости от типа вопроса погдрузка нужного шаблона
// заполнение его данными
// выгрузка полностью собранного экрана игры

export default (typeOfQuestion, question) => {

  class GameScreen extends AbstractView {
    constructor(data) {
      super();
      this.data = data;

      this.questBlock = [];

      this.answer = null;

      switch (typeOfQuestion) {
        case 'each':
          this.questBlock = fillQuestionTypeEach(question);
          break;
        case 'drawOrPhoto':
          this.questBlock = fillQuestionTypedrawOrPhoto(question);
          break;
        case 'findOne':
          this.questBlock = fillQuestionTypefindOne(question);
          break;
        default:
          throw new Error('sorry, wierd question');
      }
    }

    set sendAnswer(handler) {
      this._sendAnswer = handler;
    }

    getMarkup() {
      return `
      <div class="game">
        ${this.questBlock}
        ${statsBlock}
      </div>
      `;
    }

    bindHandlers() {
      let answers = this.element.querySelectorAll('.game__answer');

      switch (answers.length) {
        case 0:
          answers = this.element.querySelectorAll('.game__option');
          for (const item of answers) {
            item.onclick = (event) => {
              const answer = event.target;
              if (answer.classList.contains('game__option--selected')) {
                this._sendAnswer(answer.querySelector('img').alt);
              } else {
                this._sendAnswer(false);
              }
              this.onClick(event);
            };
          }
          break;
        case 2:
          for (const item of answers) {
            item.onclick = (event) => {
              event.preventDefault();
              this._sendAnswer(event.target.parentElement.querySelector('input[type=radio]').value);
              this.onClick(event);
            };
          }
          break;
        case 4:
          for (const item of answers) {
            item.onclick = (event) => {

              event.preventDefault();
              event.currentTarget.querySelector('input[type=radio]').checked = true;
              const checkedAnswers = this.element.querySelectorAll('input[type=radio]:checked');

              if (checkedAnswers.length === 2) {
                const answer = [checkedAnswers[0].value, checkedAnswers[1].value];
                this._sendAnswer(answer);
                this.onClick(event);
              }
            };
          }
          break;
        default:
          throw new Error('wtf');
      }
    }

    // вопрос  ///////////////////
    clearHandlers() {
      this.answer.removeEventListener('click', this.onClick);
    }

    onClick() {
      Application.showGame();
    }
  }

  return new GameScreen().element;
};
