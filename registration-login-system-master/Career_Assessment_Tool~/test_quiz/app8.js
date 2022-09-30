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
    q: 'Patients with schizophrenia will most likely display ____ in their brains.',
    options:['Blood clots','Enlarged ventricles','Discoloratiom of connectives tissues'],
    answer: 1
  },
  {
    q: 'Which type of behavior modification relies on consequences?',
    options:['Classical conditioning','Operant conditioning','Aversion therapy'],
    answer: 1
  },
  {
    q: 'According to Freud, which inner force contains the libido?',
    options:['Superid','Ego','Id'],
    answer: 2
  }, 
  {
    q: 'Which of these is not one of Freud’s stages of psychosexual development?',
    options:['Phallic','Curious','Oral'],
    answer: 1
  },
  {
    q: 'Which of these might be prescribed to a patient who has been diagnosed with major depressive disorder?',
    options:['Norepinephrine','SSRI', 'Acetylcholine'],
    answer: 1
  },
 {
    q: 'What is the name of the book that holds the diagnosis criteria and overview of all documented psychological disorders?',
    options:['Overview and Criteria of Current Mental Disorders','APA Manual of Psychological Disorders','Diagnostic and Statistical Manual of Mental Disorders'],
    answer: 2
  },
  {
    q: 'In Maslow’s hierarchy of needs, which needs are considered the most primary?',
    options:['Physiological','Esteem','Love/Belonging'],
    answer: 0
  },
  {
    q: 'Who is known as the father of classical conditioning?',
    options:['B.F. Skinner','Ivan pavlov','jean-Paul Sartre','Sigmund Freud'],
    answer: 1
  }, 
  {
    q: 'Who was the first woman to earn a Ph.D. in psychology?',
    options:['Margaret Floy Washburn','Leta stetter Hollingworth','Mary Whiton Calkins','Helen Thompson Woolley'],
    answer: 0
  },
  {
    q: 'Which animals were primarily used in B.F. Skinner’s “Skinner Boxes” of operant conditioning?',
    options:['Dogs','Rats', 'Rabbits','Cats'],
    answer: 1
  },
  {
    q: 'Which area is predominatly concerned with helping people lead healthier, happier and more contented lives?',
    options:['Psychology','Psychiatry','Social work','All of the above'],
    answer: 1
  },
  {
    q: 'People working in this field help individuals find solutions to their everyday problems and can only offer NON-MEDICAL approaches.',
    options:['Psychology','Psychiatry','Social Work'],
    answer: 1
  },
  {
    q: 'The National Association of Social Work (NASW)  is the source for the code of ethics for professional social workers?',
    options:['True','False',],
    answer: 0
  }, 
  {
    q: 'Maintaining professional boundaries is the responsibility of :',
    options:['The supervisor at the agency','The worker and the client','The worker','The Client'],
    answer: 2
  },
  {
    q: 'Transference and counter transference between the work and a client is',
    options:['When strong physical attraction occurs','The worker accepts a monetary or valuable gift from a client','A client and worker  unconsciously transfers feeling regarding issues dealt with in the therapeutic relationship'],
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