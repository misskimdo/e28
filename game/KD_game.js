document.getElementById('rock').onclick = play;
document.getElementById('paper').onclick = play;
document.getElementById('scissors').onclick = play;

function play() {
    var userPlay = this.id;
    you.innerHTML = userPlay;

    var matrixOptions = [
        "rock",
        "paper",
        "scissors"
    ];

    var matrixPlay = matrixOptions[Math.floor(Math.random() * matrixOptions.length)];

    var matrix = document.getElementById('matrix');
    matrix.innerHTML = matrixPlay;

    if (userPlay === matrixPlay) {
        results.innerHTML = "It's a tie! 👔";
    } else if (userPlay === "rock" && matrixPlay === "scissors") {
        results.innerHTML = "You win! 😄";
    } else if (userPlay === "paper" && matrixPlay === "rock") {
        results.innerHTML = "You win! 😄";
    } else if (userPlay === "scissors" && matrixPlay === "paper") {
        results.innerHTML = "You win! 😄";
    } else {
        results.innerHTML = "The Matrix wins. 😔";
    }
}