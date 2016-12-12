const questsData = {
  base: {
    currentLevel: 0,
    timer: 30,
    lives: 3
  },

  answer: {},

// для подсчета очков
  player: {
    rightAnswers: 0,
    wrongAnswers: 0,
    fast: 0,
    slow: 0,
    result: ''
  },

  questions: [
    {
      type: 'each',
      questTask: 'Угадайте для каждого изображения фото или рисунок?',
      questOption1: 'http://placehold.it/468x458',
      questOption2: 'http://placehold.it/468x458',
      correctAnswer1: 'draw',
      correctAnswer2: 'draw'
    },
    {
      type: 'drawOrPhoto',
      questTask: 'Угадай, фото или рисунок',
      questOption1: 'http://placehold.it/705x455',
      correctAnswer: 'draw'
    },
    {
      type: 'findOne',
      questTask: 'Найдите рисунок среди изображений',
      questOption1: 'http://placehold.it/304x455',
      questOption2: 'http://placehold.it/304x455',
      questOption3: 'http://placehold.it/304x455',
      correctAnswer: 'questOption1'
    },
    {
      type: 'findOne',
      questTask: 'Найдите рисунок среди изображений',
      questOption1: 'http://placehold.it/304x455',
      questOption2: 'http://placehold.it/304x455',
      questOption3: 'http://placehold.it/304x455',
      correctAnswer: 'questOption1'
    },
    {
      type: 'drawOrPhoto',
      questTask: 'Угадай, фото или рисунок',
      questOption1: 'http://placehold.it/705x455',
      correctAnswer: 'draw'
    },
    {
      type: 'each',
      questTask: 'Угадайте для каждого изображения фото или рисунок?',
      questOption1: 'http://placehold.it/468x458',
      questOption2: 'http://placehold.it/468x458',
      correctAnswer1: 'draw',
      correctAnswer2: 'draw'
    },
    {
      type: 'drawOrPhoto',
      questTask: 'Угадай, фото или рисунок',
      questOption1: 'http://placehold.it/705x455',
      correctAnswer: 'draw'
    },
    {
      type: 'findOne',
      questTask: 'Найдите рисунок среди изображений',
      questOption1: 'http://placehold.it/304x455',
      questOption2: 'http://placehold.it/304x455',
      questOption3: 'http://placehold.it/304x455',
      correctAnswer: 'questOption1'
    },
    {
      type: 'drawOrPhoto',
      questTask: 'Угадай, фото или рисунок',
      questOption1: 'http://placehold.it/705x455',
      correctAnswer: 'draw'
    },
  ]
};

export default questsData;
