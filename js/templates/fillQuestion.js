// три функци заполняющие разметку под принятые данные

let task = null;
let questOption1 = null;
let questOption2 = null;
let questOption3 = null;

const fillQuestionTypeEach = (question) => {

  // вот здесь должна быть деконструкция questsData.question
  // и разбивка на параметры task, questOption1, questOption2
  // пожалуйста подскажи более изящное решение

  task = question.questTask;
  questOption1 = question.questOption1;
  questOption2 = question.questOption2;

  let markDown = (`
    <p class="game__task">${task}</p>

    <form class="game__content">
      <div class="game__option">
        <img src="${questOption1}" alt="Option 1" width="468" height="458">
        <label class="game__answer game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
      <div class="game__option">
        <img src="${questOption2}" alt="Option 2" width="468" height="458">
        <label class="game__answer  game__answer--photo">
          <input name="question2" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--paint">
          <input name="question2" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
    </form>
  `);

  return markDown;
};

const fillQuestionTypedrawOrPhoto = (question) => {

  task = question.questTask;
  questOption1 = question.questOption1;

  let markDown = (`<p class="game__task">${task}</p>

  <form class="game__content  game__content--wide">
    <div class="game__option">
      <img src="${questOption1}" alt="Option 1" width="705" height="455">
      <label class="game__answer  game__answer--photo">
        <input name="question1" type="radio" value="photo">
        <span>Фото</span>
      </label>
      <label class="game__answer  game__answer--wide  game__answer--paint">
        <input name="question1" type="radio" value="paint">
        <span>Рисунок</span>
      </label>
    </div>
  </form>
  `);

  return markDown;
};

const fillQuestionTypefindOne = (question) => {

  task = question.questTask;
  questOption1 = question.questOption1;
  questOption2 = question.questOption2;
  questOption3 = question.questOption3;

  let markDown = (`<p class="game__task">${task}</p>

    <form class="game__content  game__content--triple">
      <div class="game__option">
        <img src="${questOption1}" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option  game__option--selected">
        <img src="${questOption2}" alt="Option 2" width="304" height="455">
      </div>
      <div class="game__option">
        <img src="${questOption3}" alt="Option 3" width="304" height="455">
      </div>
    </form>
  `);

  return markDown;
};

export {fillQuestionTypeEach, fillQuestionTypedrawOrPhoto, fillQuestionTypefindOne};
