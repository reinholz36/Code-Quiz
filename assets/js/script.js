//pulls id and sets a variable 
var topHeader = document.getElementById("top");
var countDown = document.getElementById("countdown");
var quizBox = document.getElementById("quizContainer");
var resultBox = document.getElementById("result");
var buttonStart = document.getElementById("btn-start");
var buttonOne = document.getElementById("btn-1");
var buttonTwo = document.getElementById("btn-2");
var buttonThree = document.getElementById("btn-3");
var buttonFour = document.getElementById("btn-4");
var mainBox = document.getElementById("mainContainer");
let timeLeft = 75;
var questionIndex = 0;
var trueCount = 0;
var cycleQuestions = false;
var totalPoints = 0

//questions array start
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
//questions array end

//set variables for array, question cycling, and total points (Note: this section needs to be after array!)
var totalArray = questionArray.length

// creates getting started elements
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
    var buttonStart = document.createElement("button");
    buttonStart.textContent = "Start Quiz";
    buttonStart.className = "btn";
    buttonStart.addEventListener('click', runGame)
    mainBox.appendChild(buttonStart);

    //Answer Result display
    var resultBox = document.createElement("h2");
    // resultBox.textContent = "Wrong Answer!";
    resultBox.className = "result";
    mainBox.appendChild(resultBox);
};
// Invokes getting started elements
quizEnter();

//clears getting started elements along with after each question is answered
function clearElement () {
    mainBox.innerHTML = '';
}

//populates quiz questions and elements
function displayQuestion () {
    clearElement()
    console.log("we here!", questionIndex);
    
    if (cycleQuestions === true) {
        questionIndex++;
    }

    if (questionIndex === totalArray) {
        clearInterval(timeLess);
        countDown.textContent = ''; 
        //add quiz stop function invokation 
    }
    
    else {
    var quizBox = document.createElement("h2")
    quizBox.textContent = questionArray[questionIndex].question;
    quizBox.className = "h2";
    mainBox.appendChild(quizBox); 

    var buttonOne = document.createElement("button");
    buttonOne.textContent = "1. " + questionArray[questionIndex].choices[0];
    buttonOne.className = "btn small";
    buttonOne.setAttribute("id", "btn-1")
    buttonOne.addEventListener('click', answerClick)
    mainBox.appendChild(buttonOne);

    var buttonTwo = document.createElement("button");
    buttonTwo.textContent = "2. " + questionArray[questionIndex].choices[1];
    buttonTwo.className = "btn small";
    buttonTwo.setAttribute("id", "btn-2")
    buttonTwo.addEventListener('click', answerClick)
    mainBox.appendChild(buttonTwo);

    var buttonThree = document.createElement("button");
    buttonThree.textContent = "3. " + questionArray[questionIndex].choices[2];
    buttonThree.className = "btn small";
    buttonThree.setAttribute("id", "btn-3")
    buttonThree.addEventListener('click', answerClick)
    mainBox.appendChild(buttonThree);
    console.log("buttonThree", buttonThree);

    var buttonFour = document.createElement("button");
    buttonFour.textContent = "4. " + questionArray[questionIndex].choices[3];
    buttonFour.className = "btn small";
    buttonFour.setAttribute("id", "btn-4")
    buttonFour.addEventListener('click', answerClick)
    mainBox.appendChild(buttonFour);
}
}

//Determines if answer selection matches correct answer from array
var answerValidate = function (number, questionIndex) {
    if (number === questionArray[questionIndex].correct) {
        console.log("correct answer", number, questionIndex);
        var resultContent = document.createElement("h2");
        resultContent.textContent = "Correct Answer!";
        resultContent.className = "result";
        mainBox.appendChild(resultContent);
        totalPoints = parseInt(totalPoints) + 1; 
        console.log("point", totalPoints)
        //run a point add function 
    }
    else {
        var resultBox = document.createElement("h2");
        resultBox.textContent = "Wrong Answer!";
        resultBox.className = "result";
        mainBox.appendChild(resultBox);
        timeLeft = timeLeft - 10
    }
    cycleQuestions = true
    var delay = setTimeout(displayQuestion, 1000)
}

var answerClick = function(event) {
    var answerSelection = event.target;
    if (event.target.id === "btn-1") {
        answerValidate(0, questionIndex)
    }
    if (event.target.id === "btn-2") {
        answerValidate(1, questionIndex)
    }
    if (event.target.id === "btn-3") {
        answerValidate(2, questionIndex)
    }
    if (event.target.id === "btn-4") {
        answerValidate(3, questionIndex)
    }
    console.log("answerClick", event.target.id);
}

//ends the code quiz
    // clears questions
    // clears time
    //presents "You've finished the quiz and answered " + total score "correctly! Enter your initials below to save your score"
    //presents total score 
    //(optional) present timestamp to save with score and initial
    //form for entering initials
    //form stops user from entering blank
    //submit form button
    //when form button clicked save score and initials to local storage
    //restart code quiz button

//high-score function
    //pulls scores and initals from local storage 
    //sorts scores and intials by high score
    //displays sorted to table on high-score.html
    //(optional) maybe include clear high score button


//Main countdown function for code quiz
function runGame () {
    
    displayQuestion ()

    timeLess = setInterval(() => {
        if (timeLeft <= 0) {
            console.log("timeLeft", timeLeft);
            countDown.textContent = ''; 
            countDown.className = "timer colorchange";
            clearInterval(timeLess);
        }
        else {
            countDown.textContent = timeLeft
            timeLeft--
            changeColor()
        }
        function changeColor() {
            if (timeLeft <=19) {
                countDown.className = "timer colorchange";
            }
        }
    }, 1000);

//revel some other elements
};

