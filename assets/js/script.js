var topHeader = document.getElementById("top");
var countDown = document.getElementById("countdown");
var quizBox = document.getElementById("quizContainer");
var resultBox = document.getElementById("result");
var submitBtn = document.getElementById("btn-1")
var mainBox = document.getElementById("mainContainer");
// var trueCount = 







 // create getting started elements
 function quizEnter () {
//top timer display 
var countDown = document.createElement("div")
countDown.textContent = "Timer";
countDown.className = "timer";
topHeader.appendChild(countDown); 

//opening statement
var quizBox = document.createElement("h2")
quizBox.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your remaining time by ten seconds!";
quizBox.className = "h2";
mainBox.appendChild(quizBox);   

//start button
 var submitBtn = document.createElement("button");
 submitBtn.textContent = "Start Quiz";
 submitBtn.className = "btn";
 submitBtn.addEventListener('click', runGame)
 mainBox.appendChild(submitBtn);

//Answer Result display
 var resultBox = document.createElement("h2");
 resultBox.textContent = "Wrong Answer!";
 resultBox.className = "result";
 mainBox.appendChild(resultBox);
};
console.log(submitBtn);
quizEnter();

//Countdown function 
function runGame () {
    let timeLeft = 75; 

   timeLess = setInterval(() => {
        if (timeLeft <= 0) {
            console.log("timeLeft", timeLeft);
            countDown.textContent = ''; 
            countDown.className = "timer";
            clearInterval(timeLess);
        }
        else {
            countDown.textContent = timeLeft
            timeLeft--
        }
    }, 1000);

};

//questions array 
var questionArray = [
    {
        question: "When setting up a countdown timer for a coding quiz which of the following would be helpful?",
        choices: ["panicking because you've never built a timer", "eventAddtime", "setInterval", "watch Dr. Who for inspiration on timetravel" ],
        correct: 2
    },

    {
        question: "Inside which HTML element do we put the JavaScript?",
        choices: ["<js>", "<javascript>", "<scripting>", "<script>"],
        correct: 3
    },

    {
        question: "What is the correct syntax for referring to an exteranl script called script.js ?",
        choices: ['<script src="scrip.js">', '<script name="script.js">', '<script href="script.js">', '<"script.js">'],
        correct: 0
    },

    
    {
        question: "Which is an example of an arrow function?",
        choices: ["var arrowAdd = (a,b) => a + b;", "var add = function(a,b) {return a + b;}", "var obj1 = {valueOfThis: function() {return this;}}", ".arrowFun"],
        correct: 0
    },
    
    //Add different questions to
    {
        question: "What is the correct syntax for referring to an exteranl script called script.js ?",
        choices: ['<script src="scrip.js">', '<script name="script.js">', '<script href="script.js">', '<"script.js">'],
        correct: 0
    },

    {
        question: "What is the correct syntax for referring to an exteranl script called script.js ?",
        choices: ['<script src="scrip.js">', '<script name="script.js">', '<script href="script.js">', '<"script.js">'],
        correct: 0
    },

    {
        question: "What is the correct syntax for referring to an exteranl script called script.js ?",
        choices: ['<script src="scrip.js">', '<script name="script.js">', '<script href="script.js">', '<"script.js">'],
        correct: 0
    },

    {
        question: "What is the correct syntax for referring to an exteranl script called script.js ?",
        choices: ['<script src="scrip.js">', '<script name="script.js">', '<script href="script.js">', '<"script.js">'],
        correct: 0
    },

    {
        question: "What is the correct syntax for referring to an exteranl script called script.js ?",
        choices: ['<script src="scrip.js">', '<script name="script.js">', '<script href="script.js">', '<"script.js">'],
        correct: 0
    },

    {
        question: "What is the correct syntax for referring to an exteranl script called script.js ?",
        choices: ['<script src="scrip.js">', '<script name="script.js">', '<script href="script.js">', '<"script.js">'],
        correct: 0
    },

    {
        question: "What is the correct syntax for referring to an exteranl script called script.js ?",
        choices: ['<script src="scrip.js">', '<script name="script.js">', '<script href="script.js">', '<"script.js">'],
        correct: 0
    },

    {
        question: "What is the correct syntax for referring to an exteranl script called script.js ?",
        choices: ['<script src="scrip.js">', '<script name="script.js">', '<script href="script.js">', '<"script.js">'],
        correct: 0
    },

    {
        question: "What is the correct syntax for referring to an exteranl script called script.js ?",
        choices: ['<script src="scrip.js">', '<script name="script.js">', '<script href="script.js">', '<"script.js">'],
        correct: 0
    },

    {
        question: "What is the correct syntax for referring to an exteranl script called script.js ?",
        choices: ['<script src="scrip.js">', '<script name="script.js">', '<script href="script.js">', '<"script.js">'],
        correct: 0
    },

    {
        question: "What is the correct syntax for referring to an exteranl script called script.js ?",
        choices: ['<script src="scrip.js">', '<script name="script.js">', '<script href="script.js">', '<"script.js">'],
        correct: 0
    },

    {
        question: "What is the correct syntax for referring to an exteranl script called script.js ?",
        choices: ['<script src="scrip.js">', '<script name="script.js">', '<script href="script.js">', '<"script.js">'],
        correct: 0
    },

    {
        question: "What is the correct syntax for referring to an exteranl script called script.js ?",
        choices: ['<script src="scrip.js">', '<script name="script.js">', '<script href="script.js">', '<"script.js">'],
        correct: 0
    },

    {
        question: "What is the correct syntax for referring to an exteranl script called script.js ?",
        choices: ['<script src="scrip.js">', '<script name="script.js">', '<script href="script.js">', '<"script.js">'],
        correct: 0
    },

    {
        question: "What is the correct syntax for referring to an exteranl script called script.js ?",
        choices: ['<script src="scrip.js">', '<script name="script.js">', '<script href="script.js">', '<"script.js">'],
        correct: 0
    },

    {
        question: "What is the correct syntax for referring to an exteranl script called script.js ?",
        choices: ['<script src="scrip.js">', '<script name="script.js">', '<script href="script.js">', '<"script.js">'],
        correct: 0
    },
];


