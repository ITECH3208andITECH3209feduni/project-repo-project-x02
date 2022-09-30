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
    q: 'In JavaScript, what method adds an element to the end of an array?',
    options:['.pop()','.unshift()','.push()'],
    answer: 2
  },
  {
    q: 'What is the main purpose of HTML in a website?',
    options:['Style','Structure','Functionality'],
    answer: 1
  },
  {
    q: 'In CSS, what does the A stand for in HSLA?',
    options:['Alpha','Ancient','Ambiguous'],
    answer: 0
  }, 
  {
    q: 'In CSS, how do you add content before an element?',
    options:[':after','::before','::add-content'],
    answer: 1
  },
  {
    q: 'In JavaScript, which of the following methods returns the milliseconds in the specified date according to local time?',
    options:['getMilliseconds()','getMinutes()', 'getTheMillisecondsNow()'],
    answer: 0
  },
 {
    q: 'In CSS, what is the name of the rule that will override CSS style for an element?',
    options:['!specific','!override','!important'],
    answer: 2
  },
  {
    q: 'In HTML, what is a span tag?',
    options:['A generic inline container for grouping content','A container used to only header content','A container used to only group footer linkss'],
    answer: 1
  },
  {
    q: 'In JavaScript, a variable that has been declared but not assigned a value is known as ____________.',
    options:['undefined','pending','unassigned','unknown'],
    answer: 0
  }, 
  {
    q: 'In Linux, which keyboard shortcut will stop running the ping command?',
    options:['ctrl-D','Ctrl-C','exit','command-D'],
    answer: 1
  },
  {
    q: 'Which layer of the Open Systems Interconnection (OSI) model is responsible for data formatting and encryption?',
    options:['The application layer','Layer 1', 'Layer 2','The presentation layer'],
    answer: 3
  },{
    q: 'In Linux, what does the ls -a command do?',
    options:['show deleted files .','lists files and then deletes them','list only the hidden files','list out the directories and files - including all hidden files'],
    answer: 3
  },
  {
    q: 'In HTML, what does X-UA-Compatible mean?',
    options:['specifices the document mode for Internet Explorer','specifies the document mode for Brave','specifies the document mode for Google chrome','specifies the document for Safari'],
    answer: 0
  },
  {
    q: 'What is a Bug',
    options:['A programming structure that repeats a block of code a given number of times','An error in a computer program that causes it to generate an incorrect or unexpected result or output','A programming paradigm.'],
    answer: 1
  }, 
  {
    q: 'Which protocol is used for transferring files between a client and server over a network?',
    options:['FTP','PTP','POP','SMTP'],
    answer: 0
  },
  {
    q: 'Which of the following tools are the most convenient for running tasks in a NodeJS environment?',
    options:['gulp','Makefile', 'grunt','npm scripts'],
    answer: 3
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