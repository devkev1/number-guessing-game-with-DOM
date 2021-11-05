let btn = document.getElementById("btn");
let output = document.getElementById("output"); 
let input = document.getElementById("userInput");

let number = 8;

function guess() {
    let guess = input.value;
    if (guess.length == 0 || isNaN(guess)){
        alert("Please give me a whole number!");
        output.innerHTML = "Enter a number below:";
    } else if (guess > number) {
        output.innerHTML = "You guessed too high!";
    } else if (guess < number) {
        output.innerHTML = "You guessed too low!";
    } else {
        output.innerHTML = "Congrats! You guessed the correct number!"}
    }

btn.addEventListener("click", guess);

input.addEventListener("keyup", function enter(e) {
    if (e.keyCode == 13) {
        guess();
    }
})