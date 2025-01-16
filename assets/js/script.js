document.addEventListener("DOMContentLoaded", function(){ //wait for DOM content to load before starign the js
    let buttons = document.getElementsByTagName("button"); // 5 buttons (4 game btns and 1 sumbit)

    for (let button of buttons){ //returns and stores each element in the array to the variable "button" on each iteration.
        button.addEventListener("click", function(){ //event listeer waits for the singular button to be clicked.
            if (this.getAttribute("data-type ") === "submit") { // checks the contents of the attribute
                alert("You clicked sumbit");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        })
    }
}) 

function runGame() {

}

function checkAnswer () {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

// QUESTIONS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {
    
}

function displayMultiplyQuestion() {
    
}