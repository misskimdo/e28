document.getElementById('rock').onclick = play;
document.getElementById('paper').onclick = play;
document.getElementById('scissors').onclick = play;

function play() {
    const userPlay = this.id;
    you.innerHTML = userPlay;

    const matrixOptions = [
        "rock",
        "paper",
        "scissors"
    ];

    const matrixPlay = matrixOptions[Math.floor(Math.random() * matrixOptions.length)];

    const matrix = document.getElementById('matrix');
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