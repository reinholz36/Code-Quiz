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
    
    {
        question: "What is DOM?",
        choices: ["Digital Origin Main", "Document Object Model", "Document Object Motel", "Dial Open Modem"],
        correct: 1
    },
    
    {
        question: 'How do you write "Help, I am trapped in a coding quiz!" in an alert box?',
        choices: ['msg("Help, I am trapped in a coding quiz!");', 'alertBox("Help, I am trapped in a coding quiz!");', 'msgBox("Help, I am trapped in a coding quiz!");', 'alert("Help, I am trapped in a coding quiz!");'],
        correct: 3
    },
    
    {
        question: "How do you create a function in JavaScript?",
        choices: ["<myFunction>()", "function = myFunction()", "function myFunction()", "function:myFunction()"],
        correct: 2
    },
    
    {
        question: 'How do you call a function named "myFunction"?',
        choices: ["myFunction()", "call{myFunction}", "return = myFunction;", "myFunction{}"],
        correct: 0
    },
    
    {
        question: "How do you write an IF statement in JavaScript?",
        choices: ["if i = 5 then", "if i = 5", "if i == 5 then", "if (i==5)"],
        correct: 3
    },
    
    {
        question: "How do you write an IF statement for executin some code if 'i' is NOT equal to 5?",
        choices: ["if (i! = 5)", "if i <> 5", "if (i <> 5)", "if i = !5 then"],
        correct: 0
    },
    
    {
        question: "How does a WHILE loop start?",
        choices: ["while (i<= 10;i++)", "while i = 1 to 10", "while (i <= 10) ", "while {i <= 10}"],
        correct: 2
    },
    
    {
        question: "How does a FOR loop start?",
        choices: ["for (i <= 5; i++)", "for (i = 0; i <= 5; i++)", "for i = 1 to 5", "for (i = 0; i <= 5)"],
        correct: 1
    },
    
    {
        question: "How can you add a comment in a JavaScript?",
        choices: ["<!--This is a comment-->", "<This is a comment>", "|This is a comment|", "//This is a comment"],
        correct: 3
    },
    
    {
        question: "How do you round the number 7.25, to the nearest integer?",
        choices: ["rnd(7.25)", "Math.round(7.25)", "round(7.25)", "Math.rnd(7.25)"],
        correct: 1
    },
    
    {
        question: "How do you find the number with the highest value of x and y?",
        choices: ["Math.max(x, y)", "Math.ceil(x, y)", "ceil(x, y)", "top(x, y)"],
        correct: 0
    },
    
    {
        question: "Which operator is used to assign a value to a variable?",
        choices: ["  *  ", "  X  ", "  =  ", "  -  "],
        correct: 2
    },
    
    {
        question: 'What is the output of 10+20+"30" in JavaScript?',
        choices: ["3030", "60", "30", "10+20"],
        correct: 0
    },
    
    {
        question: "What is the use of Map object in JavaScript?",
        choices: ["map true or false", "map the DOM", "map functions to var", "map keys to values"],
        correct: 3
    },
    
    {
        question: "Which operator checks equality, and data type i.e. a value must be of the same type?",
        choices: [" --- ", " == ", " = ", " === "],
        correct: 3
    },

    {
        question: "Which of the following is not a pop-up box availale in JavaScript?",
        choices: ["alert()", "confirm()", "function()", "prompt()"],
        correct: 2
    },

];


