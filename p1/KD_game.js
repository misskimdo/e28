const Game = {
    data() {
        return {
            options: ['rock', 'paper', 'scissors'],
            matrixOption: '',
            playerOption: '',
            youWon: null,
            youLost: null,
            tie: null,
            userScore: 0,
            matrixScore: 0,
            feedback: '',
            winners: [],
        }
    },
    methods: {

        play(option) {
            this.playerOption = option;

            const matrixPlay = Math.floor(Math.random() * this.options.length);
            this.matrixOption = this.options[matrixPlay];

            this.score();

        },

        score() {
            let playerOption = this.playerOption;
            let matrixOption = this.matrixOption;
            let winners = this.winners;

            if (playerOption == matrixOption) {
                this.feedback = "It's a tie! 👔";
                this.youWon = false;
                this.youLost = false;
                this.tie = true;
                this.winners.push('It was a tie.');
            } else if (playerOption == "rock" && matrixOption == "scissors") {
                this.feedback = "You win! 😄";
                this.userScore++;
                this.youWon = true;
                this.winners.push('You won.');
            } else if (playerOption === "paper" && matrixOption === "rock") {
                this.feedback = "You win! 😄";
                this.userScore++;
                this.youWon = true;
                this.winners.push('You won.');
            } else if (playerOption === "scissors" && matrixOption === "paper") {
                this.feedback = "You win! 😄";
                this.userScore++;
                this.youWon = true;
                this.winners.push('You won.');
            } else {
                this.feedback = "The Matrix wins. 😔";
                this.matrixScore++;
                this.youLost = true;
                this.youWon = false;
                this.winners.push('The Matrix won.');
            }
        },

        resetGame() {
            this.feedback = '';
            this.userScore = 0;
            this.matrixScore = 0;
            this.matrixOption = '';
            this.playerOption = '';
            this.winners = [];
        }
    }
}

const GameHistory = {
    name: 'GameHistory',
    props: ['winner', 'index'],
    data() {
        return {}
    },
    template: '#game-history'
}

const app = Vue.createApp(Game)
app.component('game-history', GameHistory);
app.mount('#app');