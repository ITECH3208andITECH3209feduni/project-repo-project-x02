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
const allQuestionsArr =[
  {
    q: 'This is the step of the nursing process where you do the PES.',
    options:['Planning','Implementation','Diagonsis',],
    answer: 2
  },
  {
    q: 'What purpose does the nursing process serve?',
    options:['Assisting family members in making important healthcare decision decisions','Providing nurses with a framework to aid them in delivering comprenhensive care','Help other healthcare professionals know what is going on with the client',],
    answer: 1
  },
  {
    q: 'Which could be considered objective data from the following?',
    options:['A temperature of 100.1 degrees fahrenheit','A patients report of moderate pain','Complaints of nausea','None of the above'],
    answer: 0
  }, 
  {
    q: 'Which nusring diagnosis should recieve the highest priority in the case of a female patient who is diagnosed with deep vein thrombosis?',
    options:['Impaired gas exchange realating to an increased blood flow','Fluid volume excess relating to peripheral vascular disease','Altered peripheral tissue perfusion related tovenous congestion',],
    answer: 2
  },
  {
    q: 'From the following, which independent nursing intervention can a nurse include in the plan of care for a patient with fractured tibia?',
    options:['Perform a range of motion to right leg every 4 hour','Elevate the leg 5 inches above the heart', 'Apply a cold pack to the tibia'],
    answer: 1
  },
  {
    q: 'To participate in goal setting clients must be:',
    options:['Ambulatory and mobile','Alert and have some degree of independence','Able to read and write'],
    answer: 0
  },
  {
    q: 'A client-centered goal is a specific and measurable behaviour or response that reflects a clients:',
    options:['Desire for specific health care and interventions','Response when compared to another client with a like problem', 'Highest possible level of wellness and independence in function'],
    answer: 2
  },
  {
    q: 'What blood type is known as the “universal donor',
    options:['Type A','Type AB ','Type B','Type O'],
    answer: 3
  },
  {
    q: 'A donor has AB- blood. Which patient or patients below can receive this type of blood safely?',
    options:[' A patient with B- blood.','. A patient with AB- blood','A patient with O- blood.'],
    answer: 1
  },
  {
    q: 'What solution or solutions below are compatible with red blood cells?',
    options:['Normal Saline','Dextrose Solutions ',' No solutions are compatible with blood'],
    answer: 0
  },
  {
    q: ' What Glasgow Coma Scale score usually requires intubation because the airway reflexes are affected?',
    options:['10 or less',' 9 or greater',' 8 or less'],
    answer: 2
  },
  {
    q: 'During the Glasgow Coma Scale (GCS) assessment the nurse applies a central painful stimulus to test the best motor response. Which of the following is NOT this type of stimulus?',
    options:['Trapezius squeeze','Fingernail bed pressure','Supraorbital pressure'],
    answer: 1
  },
  {
    q: ' The Audit which is conducted between two regular audits?',
    options:['Interval aduit','Final audit',' Interim audit'],
    answer: 2
  },
  {
    q: ' The position ideal for Ryle’s tube insertion?',
    options:['Supine position','Neck extended position','high Fowlers position'],
    answer: 2
  },
  {
        q: 'Which of the clinical finding will the nurse identify while assessing a client with fever?',
    options:['Tachycardia','Elevate blood pressure','Dyspnoea'],
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