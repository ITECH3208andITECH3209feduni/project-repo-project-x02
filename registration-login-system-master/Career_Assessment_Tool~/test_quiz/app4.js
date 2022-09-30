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
    q: 'The positive effects of early learning are still measurable when a child is:',
    options:['5 years old','7 years old','15 years old'],
    answer: 0
  },
  {
    q: 'Who is Bluey?',
    options:['An animated dog on Australian TV','A 1970s TV detective','A budgerigar'],
    answer: 1
  },
  {
    q: 'According to research, what is the most important factor in delivering high quality early learning and care?',
    options:['The amount of money spent on toys','The colour of the walls','Educators who can create strong relationships with children'],
    answer: 2
  }, 
  {
    q: 'What is the difference between a childcare worker and an early childhood educator?',
    options:['A childcare worker does administrative work, not teaching.','A childcare worker is less experienced than an early childhood educator.','Childcare worker and early childhood educator are the same thing'],
    answer: 2
  },
  {
    q: ' I am most attracted to jobs that have:',
    options:['A supportive team','The opportunity to progress in my career', 'The feeling that I’m making a difference in the world'],
    answer: 2
  },
 {
    q: 'In the first few years of life, how many new connections does a childs brain create?',
    options:['More than one million new connections every day','More than one million new connections every hour','More than one million new connections every second'],
    answer: 2
  },
  {
    q: 'What qualification does an early childhood educator need?',
    options:['Certificate III in Early Childhood Education and Care','Bachelor of Early Childhood Education','Diploma in Early Childhood Education and Care'],
    answer: 1
  },
  {
    q: 'The child care assistant employed good working habits within the work environment.',
    options:['Hired','Utilised','Complained'],
    answer: 1
  }, 
  {
    q: 'Health and safety hazards can be minimised by enforcing good health and safety practices within the workplace',
    options:['Reduced','Deficient','Prevented'],
    answer: 0
  },
  {
    q: 'Early childhood professionals encourage children to explore their surroundings, solv Practice Aptitude QUIZ problems, communicate and think creatively and constructively.',
    options:['Find','Look','Investigate'],
    answer: 2
  },
  {
    q: 'Food allergies are usually caused by:',
    options:['The proteins in some foods','The falvour of the food','The size of the portion food'],
    answer: 0
  },
  {
    q: 'Which of the following is not a possible symptom of a food allergy?',
    options:['Vomiting','Car sickness','Difficulty breathing'],
    answer: 1
  },
  {
    q: 'In Children’s Services, you need to work as part of a group to achieve your goals.',
    options:['Team','Colleagues','Friends'],
    answer: 0
  }, 
  {
    q: 'Isabel had to catch a train to work. She caught the 8.25 am Smithfield train. She arrived at the Central Station at 9.00 am. How long was her travel time?',
    options:['35 minutes','30 minutes','50 minutes'],
    answer: 0
  },
  {
    q: 'If a city’s maximum temperature was 42 degrees and the minimum was 9 degrees, what is the difference between the two temperatures? ',
    options:['27','29', '33'],
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