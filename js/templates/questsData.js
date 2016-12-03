const questsData = {
  base: {
    currentLevel: 1,
    timer: 'NN',
    lives: '2',
    levelNow: '0',
    levelLast: '10'
  },

  question1: {
    type: 'each',
    questTask: 'Угадайте для каждого изображения фото или рисунок?',
    questOption1: 'http://placehold.it/468x458',
    questOption2: 'http://placehold.it/468x458',
    correctAnswer1: 'draw',
    correctAnswer2: 'draw'
  },
  question2: {
    type: 'drawOrPhoto',
    questTask: 'Угадай, фото или рисунок',
    questOption1: 'http://placehold.it/705x455',
    correctAnswer: 'draw'
  },
  question3: {
    type: 'findOne',
    questTask: 'Найдите рисунок среди изображений',
    questOption1: 'http://placehold.it/304x455',
    questOption2: 'http://placehold.it/304x455',
    questOption3: 'http://placehold.it/304x455',
    correctAnswer: 'questOption1'
  },
  question4: {
    type: 'findOne',
    questTask: 'Найдите рисунок среди изображений',
    questOption1: 'http://placehold.it/304x455',
    questOption2: 'http://placehold.it/304x455',
    questOption3: 'http://placehold.it/304x455',
    correctAnswer: 'questOption1'
  },
  question5: {
    type: 'drawOrPhoto',
    questTask: 'Угадай, фото или рисунок',
    questOption1: 'http://placehold.it/705x455',
    correctAnswer: 'draw'
  },
  question6: {
    type: 'each',
    questTask: 'Угадайте для каждого изображения фото или рисунок?',
    questOption1: 'http://placehold.it/468x458',
    questOption2: 'http://placehold.it/468x458',
    correctAnswer1: 'draw',
    correctAnswer2: 'draw'
  },
};

export default questsData;
