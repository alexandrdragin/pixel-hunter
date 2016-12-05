// три функци заполняющие разметку под принятые данные

const questionsCreate = (src, num, cls = '', size = 'width="468" height="458"') => {
  let questionsMarkDown = (`<div class="game__option">
    <img src="${src}" alt="Option ${num}" ${size}>
    <label class="game__answer game__answer--photo">
      <input name="question${num}" type="radio" value="photo">
      <span>Фото</span>
    </label>
    <label class="game__answer game__answer--paint ${cls}">
      <input name="question${num}" type="radio" value="paint">
      <span>Рисунок</span>
    </label>
  </div>`
);

  return questionsMarkDown;
};

const fillQuestionTypeEach = (question) => {

  let {questTask: task, questOption1: questOption1, questOption2: questOption2} = question;

  let markDown = (`<p class="game__task">${task}</p>

    <form class="game__content">
      ${questionsCreate(questOption1, 1)}
      ${questionsCreate(questOption2, 2)}
    </form>
  `);

  return markDown;
};

const fillQuestionTypedrawOrPhoto = (question) => {

  let {questTask: task, questOption1: questOption1} = question;

  let markDown = (`<p class="game__task">${task}</p>

  <form class="game__content  game__content--wide">
    <div class="game__option">
      ${questionsCreate(questOption1, 1, 'game__answer--wide', 'width="705" height="455"')}
    </div>
  </form>
  `);

  return markDown;
};

const fillQuestionTypefindOne = (question) => {

  let {questTask: task, questOption1: questOption1, questOption2: questOption2, questOption3: questOption3} = question;

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
