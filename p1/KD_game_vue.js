  const Game = {
      data() {
          return {
              options: ['rock', 'paper', 'scissors'],
              matrixOption: ''
          }
      },
      methods: {
          play: function () {
              var matrixPlay = Math.floor(Math.random() * this.options.length);
              this.matrixOption = this.options[matrixPlay];
          }
      }
  }

  const app = Vue.createApp(Game).mount('#app');