const Game = {
    data() {
        return {
            guess: null,
            guesses: [],
            correct: false,
            seen: false;
        }
    },
    methods: {
        addGuess() {
            this.guesses.push(this.guess);
        },
    }
}

const app = Vue.createApp(Game).mount('#app');