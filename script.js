let btn = document.getElementById("btn");
let output = document.getElementById("output");

let number = 8;

btn.addEventListener("click", function guess(num) {
    let input = document.getElementById("userInput").value;
    if (isNaN(input)){
        alert("Please give me a whole number!");
    } if (input > number) {
        output.innerHTML = "You guessed too high!";
    } else if (input < number) {
        output.innerHTML = "You guessed too low!";
    } else {
        output.innerHTML = "Congrats! You guessed the correct number!"}
    });
