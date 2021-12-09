# Code-Quiz
Timed coding quiz with multiple-choice questions

When the page loads 

    there should be a button in the center of the page that says "Start Quiz"
        when the button is clicked the first question should load from an array of questions based on a randomized array number and the time should start counting down.

    On the upper left corner the previous high score should be listed

    on the upper right corner the total time should be listed

During the Quiz

    There should be a question with four selecters or buttons with answer choices to the right of the question. The value of each button should be false unless assigned true for the correct answer. The button should flash green when true or red when false is selected. If the false question is selected 10 seconds should be subtracted from the time.

After the Quiz

    The quiz ends when the time reaches 0. The questions should be removed an the amount of questions answered correctly should display in the center with a the words "Great practice! You answered + number of correct + questions correctly. The final score should be logged in local storage for replay next time. All scores from local storage should be pulled and checked to see which is the highest. That value should be displayed in high score. There should also be a button below the text that says "Try Again". If you click on the button the time resets, a question loads again. 




Graded requirements 
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
