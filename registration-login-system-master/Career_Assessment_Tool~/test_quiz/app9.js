
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
    q: 'Which tool is used in business analyst?',
    options:['My Sql','MS Excel','MS Access'],
    answer: 1
  },
  {
    q: 'FMEA stands for?',
    options:['Functions Managed Extension Activities','Failure Mode and Effect Anyalsis','Functions Mode and Effects Analysis'],
    answer: 1
  },
  {
    q: '_________ Analysis is used to analyze a system in terms of its requirements to identify its impact on customer satisfaction',
    options:['Kano','Paretto','Root Cause'],
    answer: 0
  }, 
  {
    q: 'The ______ Technique is used to give priority to various items in a process',
    options:['Pair-Choice','Paretto','Impact'],
    answer: 0
  },
  {
    q: 'Which of the following is not one of the three major classes of information systems?',
    options:['Management information system','Transaction processing system', 'Collaboration system'],
    answer: 1
  },
  {
    q: 'Which type of information systems automates handling of data about business activities?',
    options:['Decision support system','Management information system','Transaction processing system'],
    answer: 1
  },
  {
    q: 'Which of the following is the process of investigating a system, identifying problems, and using the information to recommend improvements to the system?',
    options:['System Analysis','Planning','System Design'],
    answer: 0
  },
  {
    q: 'Which type of information systems helps the decision maker to make long term decisions?',
    options:['Decision support system','Collaboration system','Management information system', 'Transaction processing system'],
    answer: 0
  }, 
  {
    q: 'Which of the following is not one of the functions of an information system?',
    options:['Maintaining files','Producing information','Make decisions','Generate report'],
    answer: 2
  },
  {
    q: 'System Analyst performs analysis and design based upon:',
    options:['Creating and Maintaining system that perform basic business functions','Understanding of organizations objectives, structure and processes','Developing or acquiring application software'],
    answer: 1
  },
  {
    q: 'System interacts with other systems through its environment',
    options:['True','False'],
    answer: 1
  },
  {
    q: 'Management Information Systems converts raw data from transaction processing system into meaningful form.',
    options:['True','False'],
    answer: 0
  },
  {
    q: 'Decision support system deals with information that is required at the operational level of an organization',
    options:['True','False'],
    answer: 1
  }, 
  {
    q: 'Constraints separate a system from other systems',
    options:['True','False'],
    answer: 1
  },
  {
    q: 'The basic structure of a system consists of input, output and processing',
    options:['True','False'],
    answer: 0
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