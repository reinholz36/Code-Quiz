var mainHs = document.getElementById("mainScore");
var tableHs = document.getElementById("highscoreContainer");
var topHeader = document.getElementById("top");
var countDown = document.createElement("div");
countDown.textContent = "Timer";
countDown.className = "timer";
topHeader.appendChild(countDown); 
//this sets up a pull from local storage or loads a blank array if nothing is in storage
var savedScores = JSON.parse(localStorage.getItem("scoreArray")) ?? [];
    console.log("savedScores", savedScores);

window.onload = () => {
//sorts array based on score
    var sortedValues = savedScores.sort((a,b)=>{
        return b.score - a.score
        
    })

//populates the High-Score page
    for (var i = 0; i < sortedValues.length; i++) {
        var pulledScore = sortedValues[i].score 
        var pulledName = sortedValues[i].name 

        var tableRow = document.createElement("tr");
        tableRow.textContent = pulledName+"   "+pulledScore;
        tableHs.appendChild(tableRow);
        
    }
}

