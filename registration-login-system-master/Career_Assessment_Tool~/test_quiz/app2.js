// Dynamic Quiz App with randomly chosen multiple choice questions
// Design and development by Micke Berg

const main = document.querySelector('main');
const theQuestion = document.querySelector('.the-question');
const optionsFieldContainer = document.querySelector('.options-field');
const optionField = document.querySelector('.options-field').children;
const answerTrackerContainer = document.querySelector('.answers-tracker');
const questionsOfTotal = document.querySelector('.question-of-total');
const totalQuestionSpan = document.querySelector('.total-question');
const totalQuestionSpan2 = document.querySelector('.total-question2');
const makeChoice = document.querySelector('.make-choice');
const correctAnswerSpan = document.querySelector('.correct-answers');
const percentage = document.querySelector('.percentage');
const gameOver = document.querySelector('.game-over');
const option = document.querySelector('.option');
const allQuestionsArr = [
  {
     q: 'You should not ask people with disabilities to participate in moderate and vigorous physical activity because the intensity is too high for them.',
    options:['True','False'],
    answer: 1
  },
  {
     q: 'Zack is a 62-year old man. His resting heart rate is 82. if he wants to participate in moderate physical activity, his target rate will be?',
    options:['132','148'],
    answer: 1
  },
  {
    q: 'Older adults are most concerned about fanatical pressures for themselves."',
    options:['False','True'],
    answer: 0
  }, 
  {
    q: 'Percentage of adults who achieve a least 3000 minutes a week of moderate-intensity aerobic physical activity or 150 minutes a week of vigorous-intensity aerobic activity decreases with age.',
    options:['True','False'],
    answer: 0
  },
  {
    q: 'If you want to design the exercise for older adults who need to improve skills in moving furniture, do kitchen activities, putting things away and shopping cart, what kinds of exercise would be most suitable for the population?',
    options:['wall push ups','leg press'],
    answer: 0
  },
 {
    q: 'Significant physiological change occurs to the female anatomy during menopause due to estrogen loss',
    options:['True','False'],
    answer: 0
  },
  {
    q: 'As people grow older, their intelligence declines significantly.',
    options:['True','False'],
    answer: 1
  },
  {
   q: 'Clinical depression occurs more frequently in older than younger people.',
    options:['True','False'],
    answer: 1
  }, 
  {
   q: 'Alcoholism and alcohol abuse are significantly greater problems in the adult population over age 65 than that under age 65.',
    options:['True','False'],
    answer: 1
  },
  {
   q: 'Older adults have more trouble sleeping than younger adults do',
    options:['False', 'True'],
    answer: 1
  },
  {
    q: 'Older people perspire less, so they are more likely to suffer from hyperthermia',
    options:['True', 'False'],
    answer: 0
  },
  {
    q: 'Bladder capacity  decreases with  age,  which leads to  frequent  urination',
    options:['False', 'True'],
    answer: 1
  },
  {
   q: 'Increased problems  with  constipation  represent a normal  change  as  people  get older',
    options:['True','False'],
    answer: 1
  },
  {
    q: 'Symptoms of depression in midlife women overlap with those of menopause',
    options:['False', 'True'],
    answer: 1
  },
  {
    q: 'As  people  live  longer, they  face  fewer acute conditions  and more  chronic health conditions.',
    options:['False', 'True'],
    answer: 1
  },
  ];

let questionIndex = 0;
let index = 0;
let myArray = [];
let myArr = [];
let score = 0;

let allQuestions = [...allQuestionsArr];
let theRandomQuestions = [];

function selectQuestions() {
  if (allQuestions.length < 5) {
    allQuestions = [...allQuestionsArr];
  };
  
  theRandomQuestions = [];

  for (let i = 0; i < 5; i++) {
    let randomQuestion = Math.floor(Math.random() * allQuestions.length);

    theRandomQuestions.push(allQuestions[randomQuestion]);
    allQuestions.splice(randomQuestion, 1);
  };
};

function load() {
  questionsOfTotal.innerHTML = index+1;
  optionsFieldContainer.innerHTML = '';
  theQuestion.innerHTML = theRandomQuestions[questionIndex].q;

  for(let i = 0; i < theRandomQuestions[questionIndex].options.length; i++) {
    optionsFieldContainer.innerHTML += `<div class="option">${theRandomQuestions[questionIndex].options[i]}</div>`;
  };

  const parent = optionsFieldContainer;
  const children = Array.from(parent.children);

  children.map((option, index) => {
    option.addEventListener('click', () => {
      checkIfRightAnswer(index);
    });
  })
};

function next() {
  validate();
};

function checkIfRightAnswer(index) {
  if(index == theRandomQuestions[questionIndex].answer) {
    optionField[index].classList.add('correct');
    updateAnswerTracker('correct');
    score++;
  } else {
    optionField[index].classList.add('wrong');
    optionField[theRandomQuestions[questionIndex].answer].classList.add('correct');
    updateAnswerTracker('wrong');
  }
  disableOptions();
  
  makeChoice.innerHTML = '';
  makeChoice.style.backgroundColor = '';
};

function disableOptions() {
  for(let i = 0; i < optionField.length; i++) {
    optionField[i].classList.add('disabled');
  }
};

function enableOptions() {
  for(let i = 0; i < optionsFieldContainer.children.length; i++) {
    optionField[i].classList.remove('disabled', 'correct', 'wrong');
  }
};

function validate() {
  if(!optionField[0].classList.contains('disabled')) {
    makeChoice.innerHTML = 'Välj ett alternativ innan du kan gå vidare.';
    makeChoice.style.backgroundColor = 'rgba(255, 255, 255, 0.415)';
  }
  else {
    if (questionIndex === 4) {
      quizOver();
      questionIndex = 0;
    } else {
      enableOptions();
      questionIndex++;
      load();
    }
  }
};

function answerTracker() {
    for(let i = 0; i < theRandomQuestions.length; i++){ 
      const div = document.createElement('div');
        answerTrackerContainer.appendChild(div);
  }
}

function updateAnswerTracker(classNam) {
  let boxes = Array.from(answerTrackerContainer.children);
  boxes[index].classList.add(classNam);
  index++;
};

function tryAgain() {
  index = 0;
  answerTrackerContainer.innerHTML = '';
  document.querySelector('.quiz-over').classList.remove('show');
  score = 0;
  loadRound();
};

window.onload = function () {
  loadRound();
};

function loadRound() {
  selectQuestions();
  load();
  
  totalQuestionSpan.innerHTML = theRandomQuestions.length;

  answerTracker();
  index = 0;
};

const gameOverStatements = [
  { option: 'More practice need!!!' },
  { option: 'Time to do more Practice!!!'},
  { option: 'More study time needed!!!'},
  { option: 'You can do better than this!!!!' },
  { option: 'You seem very good. Good luck for futher!!!' },
  { option: 'OUTSTANDING!!!!!' },
  { option: 'Please Test yourself again!!' }
];

function quizOver() {
  document.querySelector('.quiz-over').classList.add('show');

  let finishScore = (score/theRandomQuestions.length)*100;
  
  correctAnswerSpan.innerHTML = score;
  totalQuestionSpan2.innerHTML = theRandomQuestions.length;
  percentage.innerHTML = (score/theRandomQuestions.length)*100 + '%';

  switch (finishScore) {
    case 0:
      gameOver.innerHTML = gameOverStatements[0].option;
      break;
    case 20:
      gameOver.innerHTML = gameOverStatements[1].option;
      break;
    case 40:
      gameOver.innerHTML = gameOverStatements[2].option;
      break;
    case 60:
      gameOver.innerHTML = gameOverStatements[3].option;
      break;
    case 80:
      gameOver.innerHTML = gameOverStatements[4].option;
      break;
    case 100:
      gameOver.innerHTML = gameOverStatements[5].option;
      break;
    default:
      gameOver.innerHTML = gameOverStatements[6].option;
  }
};