const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const timerElement= document.getElementById('counter')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const intialsElement = document.getElementById('initials')

let shuffledQuestions, currentQuestionIndex
//listening for click on start and next button 
startButton.addEventListener('click', startQuiz, startTimer)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})
//Start quiz function
function startQuiz() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}
//fuction that displays and shuffles next question and resets the red and green answer attributes
function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}
//unhide question function
function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    } 
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'What does HTML stand for?',
        answers: [
            { text: 'Hyper Text Marked Letters.', correct: false},
            { text: 'Hyper Texting Marking Language.', correct: false},
            { text: 'Hue Text Markup Language.', correct: false},
            { text: 'Hyper Text Markup Language.', correct: true}

        ]
    },
    {
        question: 'What does CSS stand for?',
        answers: [
            { text: 'Cascading Style Sheets.', correct: true},
            { text: 'Cascade Styling Sheet.', correct: false},
            { text: 'Code Style Syntax.', correct: false},
            { text: 'Cascading Syntax Sheet.', correct: false}

        ]
    },
    {
        question: 'What is an Array in JavaScript?',
        answers: [
            { text: 'A name given to an object.', correct: false},
            { text: 'It is a single variable that is used to store different elements.', correct: true},
            { text: 'Someone named Ray.', correct: false},
            { text: 'It is a single variable that is used to delete different elements.', correct: false}

        ]
    },
    {
        question: 'What does var do in Javascript?',
        answers: [
            { text: 'It declares a variable.', correct: true},
            { text: 'It declares a true, false statement.', correct: false},
            { text: 'It styles a variable.', correct: false},
            { text: 'It styles an object.', correct: false}

        ]
    },  
    {
        question: 'What is a Boolean in JavaScript?',
        answers: [
            { text: 'It is a skinny Ghost.', correct: false},
            { text: 'It is a datatype that returns either of two values i.e. true or false.', correct: true},
            { text: 'It is an Array.', correct: false},
            { text: 'It is styles that are applied to a string.', correct: false}

        ]
    },  
    {
        question: 'What does JSON stand for?',
        answers: [
            { text: 'JavaScript Object Notation.', correct: true},
            { text: 'It is short for Jason.', correct: false},
            { text: 'JavaScript Only Notation.', correct: false},
            { text: 'JavaScripture Object Nation.', correct: false}

        ]
    },  
    {
        question: 'Which language is used for styling web pages?',
        answers: [
            { text: 'JavaScript', correct: false},
            { text: 'JQuery', correct: false},
            { text: 'CSS', correct: true},
            { text: 'HTML', correct: false}

        ]
    },  
    {
        question: 'How do you style an "id" in CSS?',
        answers: [
            { text: 'By using an "*" before the id name.', correct: false},
            { text: 'By using a "." before the id name.', correct: false},
            { text: 'By using a "#" before the id name.', correct: true},
            { text: 'By calling the DMV and seeting up an appointment.', correct: false}

        ]
    },  
    {
        question: 'How do you style a class in CSS?',
        answers: [
            { text: 'By typying a "#" before the class name.', correct: false},
            { text: 'By hiring a personal stylist for the class.', correct: false},
            { text: 'By typing the class name only.', correct: false},
            { text: 'By using a "." before the class name.', correct: true}

        ]
    },  
    {
        question: 'How do you create a line break in HTML?',
        answers: [
            { text: 'By using a <br> tag.', correct: true},
            { text: 'By using a <br></br> tag.', correct: false},
            { text: 'By using a br tag.', correct: false},
            { text: 'By using a <break> tag.', correct: false}

        ]
    },  
]

//timer function
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onclick = function () {
    var threeMinutes = 60 * 3,
        display = timerElement;
    startTimer(threeMinutes, display);
};