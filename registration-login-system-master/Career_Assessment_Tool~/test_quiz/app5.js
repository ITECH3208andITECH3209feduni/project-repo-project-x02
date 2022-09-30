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
    q: 'What do julienne cuts look like?',
    options:['Freds','Matchsticks','Coins'],
    answer: 1
  },
  {
    q: 'What is not a binding agent in cooking?',
    options:['Mayonnaise','Vinegar','Flour'],
    answer: 1
  },
  {
    q: 'What does it mean to blanch?',
    options:['To cook from Frozen','To quickly boil and then put in ice water','To quickly sear at avery hot temperature'],
    answer: 1
  }, 
  {
    q: 'What are the two main ingredients in a custard?',
    options:['Egg yolks and cream','Egg whites and whipping cream','Cream and butter'],
    answer: 0
  },
  {
    q: 'Which of these has the highest smoke point?',
    options:['Extra-virgin olive oil','Avocado oil','Canola oil'],
    answer: 1
  },
 {
    q: 'What do we call the caramelised juices remaining in our pan after meat is browned?',
    options:['Vignettes','Deglace','Fond'],
    answer: 2
  },
  {
    q: 'Which of the following ingredients is used when poaching foods?',
    options:['Oil','Sugar','Water'],
    answer: 2
  },
  {
    q: 'What do we call the process of submerging veggies or fruits quickly in boiling water?',
    options:['Soaking','Blanching','Shocking'],
    answer: 1
  }, 
  {
    q: 'A roux is often added while cooking to help thicken sauces or soups. What are the main ingredients of this sauces?',
    options:['Flour and butter','Flour and egg','Flour and water'],
    answer: 0
  },
  {
    q: 'Which of the following kinds of pasta has its name meaning “little worms” in Italian?',
    options:['Spaghetti','Fidelini', 'Vermicelli'],
    answer: 2
  },
  {
    q: 'Which dish do we have when cooking beef in puff pastry?',
    options:['Baklava','Beef wellington','Shepherds Pie'],
    answer: 1
  },
  {
    q: 'Which of the following additives consists of skin and bones of animals?',
    options:['Gelatin','Custard Powder','Carrageenan'],
    answer: 0
  },
  {
    q: 'Which shape do we have when julienning veggies or fruits?',
    options:['Round shapes','Cubes','Matchsticks'],
    answer: 2
  }, 
  {
    q: 'To cook pasta al dente perfectly, which should its texture look like?',
    options:['Crunchy and crispy ','Moist and soft ','Tender and firm'],
    answer: 2
  },
  {
    q: 'What do we do when zesting a citrus fruit?',
    options:['Squeeze juice','Cut the membranes', 'Scrape off the rid '],
    answer: 2
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