

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
    q: 'What score does a trainee need to get to pass the BPI Building Analyst?',
    options:['75% Written/ 70% Field','70% Written/ 70% Field','75% Written / 75% Field'],
    answer: 1
  },
  {
    q: 'What score does a trainee need to get to pass the NABCEP Installer Exam?',
    options:['70%','75%','80%'],
    answer: 0
  },
  {
    q: 'What are the Continuing Education requirements for NABCEP?',
    options:['24 hours every 3 years','18 hours every 3 years','24 hours every 2 years'],
    answer: 1
  }, 
  {
    q: 'Which of the following certifications do NOT qualify a business to apply for BPI Accreditation?',
    options:['BPI Multifamily','BPI Air Sealing / Weatherization','BPI Envelope Shell'],
    answer: 0
  },
  {
    q: 'Which of the following is a similarity between RESNET testing and BPI testing?',
    options:['REM/Rate Software','Combustion Safety Testing', 'Blower Door Test'],
    answer: 2
  },
 {
    q: 'The order for an indirect persuasive letter is',
    options:['Reducing resistance, getting attention, building interests, motivating action','Motivating action, reducing resistance, building interest, getting attention','Getting attention, building interest, reduce resistance, motivating action'],
    answer: 2
  },
  {
    q: 'When you want to write an effective persuasion communication, first you have to determine',
    options:['The message purpose','The product price','The audience needs'],
    answer: 0
  },
  {
    q: 'What score does a trainee need to get to pass the LEED Green Associate?',
    options:['170','180','150'],
    answer: 0
  }, 
  {
    q: 'When talking about the Naira amount of the service or product you are selling, the word YOU would use is',
    options:['Total','Price','Cost'],
    answer: 2
  },
  {
    q: 'Customer references are another great tool because those stories often represent a ___________________, that was overcome with success. ',
    options:['Challenge','Hardship','Pain or Objection', 'All of the above'],
    answer: 2
  },
  {
    q: 'What are the common reasons customers object?',
    options:['Lack of knowledge, specific warranted concern, Hidden agenda, Perception issue, Not be clear about their interest','Lack of Knowledge, Lack of money, Lack of interest','Perception issue, lack of knowledge, Not be clear about their interests'],
    answer: 0
  },
  {
    q: 'Managing objections takes _________.',
    options:['Practice','Time','Skill'],
    answer: 0
  },
  {
    q: 'When a customer puts an objection in front of you, you should _____________.',
    options:['Find a way to overcome it','Thank them','Ignore it'],
    answer: 1
  }, 
  {
    q: '______________ is a way to connect with your customer on a personal level.',
    options:['Empathy','Conversation','Eye contact'],
    answer: 0
  },
  {
    q: 'Good customer discovery always focuses on asking __________________.',
    options:['The customer about themselves','Open ended questions','Inquisitive questions'],
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