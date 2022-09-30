const quizData = [
    {
       question: "Which one of the skills will be suited role for you?",
       a: "Providing the information and helping to the people to understand and interpret it, in every field like business, teaching, advisory and others",
       b: "Design, create and create things by using the skills like science, engineering, and math",
       c: "Solving the challenge by using different kind if technology and digital program",
       d: "Finished the different series of task in proper plan step by step each day",
    },
    {
        question : "Which of the role would you like to enjoy?",
        a: "Working as the sound engineering, audio engineering and making a suitable sound the shows",
        b: "As teaching actors and working as a language coach",
        c: "Playing as a role of the character on the stage or screen",
    },
    {
        question: "What your friend mentioned you are most interested in?",
        a: "Making new connection and bringing people together",
        b: "Having interested on the houses and design how it looks like stylish and other",
        c: "none",
        d: "none",
    
    },
    {
        question: "On what things you want a invest your time?",
        a: "Playing with Pets like cat, dog and others",
        b: "Exploring the new sites and location",
        c: "Filming and editing",
        d: "none",
    
    },
    {
        question: "What is your strongest skillsets is mostly related to?",
        a: "Coaching or motivating others",
        b: "Learning about the interesting new development in culture, politics, and every daily life",
        c: "Talking and entertaining to other arranging get together with friends",
        d: "Keeping your hand busy on the something to build rather than buying",
    
    },
    {
        question: "Which types of the work you like the most?",
        a: "Working in lab experimenting where you must be very careful with the different chemical and create something meaningful",
        b: "Working in an animal care and plan for the conservation setting",
        c: "Being a part of the working in a office which is growing business",
        d: "none",
    
    },
    {
        question: "What subject will you find interesting and play your strength?",
        a: "Math, science, and engineering",
        b: "Health, community studies, Early childhood, environmental studies",
        c: "Retail studies, Hospitality, and business administration",
        d: "Commerce and legal studies",
    
    },
    {
        question: "What you see in yourself?",
        a: "Designer",
        b: "Handcrafter",
        c: "Technician",
        d: "none",
    
    },
    {
        question: "If you get chance to work in the match, what would you prefer to?",
        a: "Work with the team as healthcare team and providing the health fitness",
        b: "Working with the technician team help to stream the match",
        c: "Working with organizer to assembling the tents and stalls",
        d: "Watch and enjoy with your friends",
    
    },


];

const quiz= document.getElementById('quizData')
const answerEls = document.querySelectorAll('answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

