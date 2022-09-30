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
    q: 'What is halitosis?',
    options:['Dental filling','Regular dental checkups','Bad breath'],
    answer: 2
  },
  {
    q: 'What is gingivitis?',
    options:['Tooth erosion','Inflammation of the gums','Mouth sores'],
    answer: 1
  },
  {
    q: 'What is this procedure to replace a missing tooth termed as?',
    options:['Tooth-supported fixed bridge','Removal partial denture','Dental implant'],
    answer: 2
  }, 
  {
    q: 'Which of the following procedures is considered as orthodontia?',
    options:['Teeth whitening','Dental bonding','Braces installation'],
    answer: 2
  },
  {
    q: 'Why would a patient require a root canal treatment?',
    options:['To treat diseases and injuries to the dental pulp so as to conserve a tooth that will otherwise have to be extracted','To correct the alignment of teeth and bite-related problems', 'To repair chipped decayed or stained teeth and help in closing gaps between teeth'],
    answer: 0
  },
 {
    q: 'By what age should a child have first dental checkup?',
    options:['4 years old','1 year old','3 years old'],
    answer: 1
  },
  {
    q: 'What kind of tooth is adapted for cutting?',
    options:['Canine','Incisor','Molar'],
    answer: 1
  },
  {
    q: ' Tooth enamel is the hardest substance in the human body.',
    options:['True','False',],
    answer: 0
  }, 
  {
    q: ' When you lose tooth enamel, how long does it take to grow back?',
    options:['10 days','2 weeks','6 months','Tooth enamel doesnot grow back'],
    answer: 3
  },
  {
    q: ' George Washington wore wooden dentures',
    options:['True','False'],
    answer: 1
  },
  {
    q: ' A toothache can be caused by:',
    options:['Tooth decay','Teeth grinding','Inflected gums','All of the above'],
    answer: 1
  },
  {
    q: ' Tooth enamel is the hardest substance in the human body.',
    options:['True','False',],
    answer: 0
  }, 
   {
    q: 'In ancient times, people thought that tiny worms inside teeth were the cause of cavities',
    options:['True','False',],
    answer: 0
  },
   {
    q: 'Known as, “nature’s cavity fighter,” _________ also helps repair the early stages of tooth decay and strengthen tooth enamel.',
    options:['Calcium','Fluoride','Iron','Copper'],
    answer: 1
  },
   {
    q: 'No 2 teeth are exactly the same shape and size.',
    options:['True','False'],
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