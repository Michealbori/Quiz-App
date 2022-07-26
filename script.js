const quizData = [
    {
        question: "Who is the world president in year 2022?",
        a: "George Washington",
        b: "John Adams",
        c: "Thomas Jefferson",
        d: "Joe Biden",
        correct: "d",
    },
    {
        question: "What is the fullName of Enland Ruller (2022)?",
        a: "King Edward VI",
        b: "Elizabeth Alexandra Mary Windsor",
        c: "King George V",
        d: "King George VI",
        correct: "b",
    },
    {
        question: "When was Ukrine and Russian war start?",
        a: "24 February 2022",
        b: "24 February 2020",
        c: "24 February 2019",
        d: "24 February 2017",
        correct: "a",
    },
    {
        question: "What Cause Ukrine and Russian war?",
        a: "Raping all woman in Ukraine", 
        b: "demilitarise and de-Nazify Ukraine",
        c: "Killing all men in Ukraine",
        d: "Taking all Ukraine Accset",
        correct: "b",
    },
    { //adding new aspect;
        question: "What Is the longest courses in university?",
        a: "computer Engineering",
        b: "Doctoral program",
        c: "Robotics",
        d: "Nursing",
        correct: "b",
    },
    { 
        question: "How many planet are on earth?",
        a: "100 countries",
        b: "120 countries",
        c: "193 countries",
        d: "93 countries",
        correct: "c",
    },
    { 
        question: "FullMeaning of UAE?",
        a: " United andriod equipment",
        b: " Unicorn app Emirates",
        c: " UAE",
        d: " United Arab Emirates",
        correct: "d",
    },
    { 
        question: "How old is old Enough to vote?",
        a: "18 years old",
        b: "12 years old",
        c: "28 years old",
        d: "78 years old",
        correct: "a",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})