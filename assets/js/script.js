const topHeader = document.getElementById("top");
const countDown = document.getElementById("countdown");
const quizBox = document.getElementById("quizContainer");
const resultBox = document.getElementById("result");
const submitBtn = document.getElementById("btn-1");
const mainBox = document.getElementById("mainContainer");
// const trueCount = 

let timeLeft = 10; 






 // create getting started elements
 function quizEnter () {
//top timer display 
var countDown = document.createElement("div")
countDown.textContent = "Timer: " + timeLeft;
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
    let timeLeft = 10; 

   timeLess = setInterval(() => {
        if (timeLeft <= 0) {
            console.log("timeLeft", timeLeft);
            countDown.textContent = ''; 
            countDown.className = "timer";
            clearInterval(timeLess);
        }
        else {
            countDown.textContent = "Timer: " + timeLeft
            timeLeft--
        }
    }, 1000);

};



