const quizBox = document.getElementById("quizContainer");
const resultBox = document.getElementById("result");
const submitBtn = document.getElementById("btn-1");
const mainBox = document.getElementById("mainContainer");
console.log("Testing");
console.log("quizBox", quizBox);
console.log("resultBox", resultBox);
console.log("submitBtn", submitBtn);


// var openStatement = document.createElement("h2");
quizBox.append("Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your remaining time by ten seconds!");

 // create getting started elements
 function quizEnter () {
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

function runGame () {
    console.log("At least some things are coming together.")
};



