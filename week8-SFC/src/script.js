import {
    createApp
} from 'vue'

import GameFeedback from './components/GameFeedback.vue'

const WordScramble = {
    data() {
        return {
            playerName: '',
            gameStarted: false,
            feedback: null,
            correct: null,
            words: [
                ['vaccine', 'Most sought after free thing.'],
                ['popcorn', 'Theater confetti.'],
                ['clementine', 'My citrus cat.'],
                ['bowtie', 'A pasta and an accoutrement.'],
            ],
            word: '',
            hint: '',
            guess: '',
            lastWord: ''
        }
    },
    computed: {
        scrambledWord() {
            let wordAsArray = this.word.split('');
            wordAsArray.sort(() => Math.random() - 0.5);
            return wordAsArray.join('');
        }
    },
    methods: {
        submitAnswer() {
            this.correct = this.guess.toLowerCase() == this.word;
            this.feedback = true;
        },
        startGame() {
            this.gameStarted = true;
            this.loadGame();
        },
        loadGame() {
            this.feedback = false;
            this.guess = '';

            while (this.word === this.lastWord) {
                this.choice = this.words[Math.floor(Math.random() * this.words.length)];
                this.word = this.choice[0];
                this.hint = this.choice[1];
            }

            this.lastWord = this.word;
        }
    }
};


// Create the root Vue instance
const app = createApp(WordScramble);

// Globally register the component with our root Vue instance
app.component('game-feedback', GameFeedback);

// Mount the root Vue instance
app.mount('#app');