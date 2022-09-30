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
    q: 'What will happen if your catalytic converter is going bad?',
    options:['Your vehicle will shake upon driving.','Your engine will turn off or stall upon a complete stop','Your vehicle will backfire upon driving'],
    answer: 1
  },
  {
    q: 'What will happen if your constant velocity or cv joint is going bad?',
    options:['There will be a burning smell upon driving','Your wheels will make a clicking sound upon turning the wheels','Your vehicle shake upon backing up'],
    answer: 1
  },
  {
    q: 'What will happen if you place the spark plug wires out of origional order?',
    options:['Your vehicle will backfire upon drivig','Your engine will misfire upon starting','Your engine will stall upon driving'],
    answer: 1
  }, 
  {
    q: 'What will happen if you do not screw your spark plugs in tightly or correctly?',
    options:['The plug will blow out with a pop and the engine will turn off immediately after starting','Your vehicle will smoke soon after starting','Your plug will fall out soon after driving'],
    answer: 2
  },
  {
    q: 'What will happen if your wheel barrings need tightened?',
    options:['Your wheels will rust and decay upon driving','Your vehicle will not ride smooth upon driving', 'Your tires will fly off of the wheels upon driving'],
    answer: 1
  },
 {
    q: 'What do you do and in what order if your brakes go out while driving an automatic?',
    options:['Emergency brake then first gear then second gear','First gear then second gear then emergency brake','Second gear then first gear then emergency brake'],
    answer: 2
  },
  {
    q: 'what are parts of a distributors?',
    options:['Rotor and drum and rod','Cap and rotor and camshaft','Camshaft and throttle and gasket'],
    answer: 1
  },
  {
    q: 'The Compressor sends high pressure to which of the following components?',
    options:['Evaporator','Condenser','Accumulator'],
    answer: 1
  }, 
  {
    q: 'Which is a type of fittings',
    options:['Compression','Pipe','Flare','All of above'],
    answer: 3
  },
  {
    q: 'Which statement is correct? a. Anaerobic cures without air b. between two pieces of metal',
    options:['A only','B only', 'Both A and B are correct'],
    answer: 2
  },
  {
    q: 'A brake proportioning valve:',
    options:['Reduces brake pressure to the rear wheels','Reduces brake pressure to the front wheels','Is part of the antilock brake system'],
    answer: 0
  },
  {
    q: 'All of the following statements about radiator caps are true EXCEPT:',
    options:['Caps have different pressure ratings','Pressurizing the coolant lowers its freezing temperature','Pressurizing the coolant raises its boiling temperature'],
    answer: 1
  },
  {
    q: 'When a clutch is disengaged, What part does the release bearing make contact with?',
    options:['Fingers on the clutch plate','Fingers on the pressure plate','Both are correct'],
    answer: 1
  }, 
  {
    q: 'What is the best way to identify the axle ratio?',
    options:['Transmission Code','Tag on the axle','Tag on the ECM'],
    answer: 1
  },
  {
    q: 'DOT 5 brake fluid is made of?',
    options:['Mineral oil','Silicon', 'Vegetable Oil'],
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