var topHeader = document.getElementById("top");

var countDown = document.createElement("div")
countDown.textContent = "Timer";
countDown.className = "timer";
topHeader.appendChild(countDown); 

//high-score function
function showScore () {
    var savedScores = JSON.parse(localStorage.getItem("scoreArray"))
    console.log("savedScores", savedScores);
    }
        //pulls scores and initals from local storage 
        //sorts scores and intials by high score
        //displays sorted to table on high-score.html
        //(optional) maybe include clear high score button
