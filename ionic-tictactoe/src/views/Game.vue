<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="container">
  <div class="game">
    <div class="game-area">
      <div class="game-title">
        <h1>Activity 2</h1>
      </div>
        <Board :squares="squares" :winner="winner" @click="click" />
    <div class="game-info">
        <p v-if="stepNumber === 0">Let's Get start!&nbsp;<b :class="currentPlayer">{{ currentPlayer }}</b>!</p>
        <p v-else-if="!!winner">
            The winner is:&nbsp;
            <b :class="currentPlayer">{{ currentPlayer }}</b>!&nbsp;
            <button @click="restart">Try Again</button>
        </p>
        <p v-else-if="stepNumber > 8">
            Gave old!&nbsp;
            <button @click="restart">Try again</button>
        </p>
        <p v-else>
            Now it's your turn&nbsp;
            <b :class="currentPlayer">{{ currentPlayer }}</b>!&nbsp;Act.
        </p>
    </div>
    </div>
  </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonPage } from '@ionic/vue';
import { defineComponent } from 'vue';
import Board from './Board.vue';

export default defineComponent({
  name: 'Game',
  components: {
    IonContent,
    IonPage,
    Board
  },
  data() {
      return {
      squares: Array(9).fill(null),
      stepNumber: 0,
      currentPlayer: 'X',
      winner: null
      }
  },
  methods: {
      hasWinner() {
          if (this.winner) return true

          const squares = this.squares
          const matches = [
              [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7],
              [2,5,8], [0,4,8], [2,4,6]
          ]

          for(let i = 0; i < matches.length; i++){
              const [ a, b , c ] = matches[i]
              if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
                  this.winner = [ a , b , c ]
                  return true
              }
          }

          return false
      },

      restart() {
          this.squares = Array(9).fill(null)
          this.stepNumber = 0
          this.currentPlayer = 'X'
          this.winner = null
      },

      click(i) {
            if (this.squares[i] || this.winner) return
            this.squares[i] = this.currentPlayer;
            this.stepNumber++
        if (!this.hasWinner()) {
                this.currentPlayer = this.stepNumber%2 ?'X':'O'
      }
    }
  }
})
</script>

<style scoped>
.game {
  background-color: rgba(var(--gradient-color-base));
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.game-area {
  display: flex;
  flex-flow: column;
}

.game-title {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 3vmin;
}

.game-title img {
  margin: 0 12px 0 -20px;
  width: 40px;
  filter: drop-shadow(-1px 1px 0 #0007) drop-shadow(1px -1px 0 #0007) drop-shadow(1px 1px 0 #0007);
}

.game-title h1 {
  margin: 0;
  font-size: 2.25em;
  color: rgba(var(--theme-color));
  text-shadow: -1px -1px 1px #000b, -1px 1px 1px #000b, 1px -1px 1px #000b, 1px 1px 1px #000b;
}

.game-info {
  margin: 3vmin 0 0;
  padding: 1rem .5rem;
  font-size: 1.25em;
  text-align: center;
  box-shadow: 2.5px 5px 25px #0001, 0 1px 6px #0004;
  text-shadow: 0 0 1px #fff, 0 2px 5px #fff5;
  border-radius: .5rem;
  backdrop-filter: blur(10px);
  background: #fff6;
  background-blend-mode: exclusion;
  background-image: var(--noise-pattern);
  color: #111;
}

.game-info p {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.game-info .X,
.game-info .O {
  text-shadow: -1px -1px 0 #000b, -1px 1px 0 #000b, 1px -1px 0 #000b, 1px 1px 0 #000b;
}

.game-info .X {
  color: #ff5722;
}

.game-info .O {
  color: #ffeb3b;
}

.game-info button {
  text-transform: uppercase;
  font-weight: 600;
  font-size: .75em;
  padding: .5rem 1rem;
  margin: -.5rem 0 -.5rem 1rem;
  border: 2px solid #fff;
  background: #fff5;
  text-shadow: 0 0 1px #fff, 0 2px 5px #fff5;
  color: #111;
  cursor: pointer;
  outline: none;
  transition: all .25s ease;
}

.game-info button:focus,
.game-info button:hover {
  background: #1115;
  border-color: rgba(var(--theme-color));
  box-shadow: 0 0 10px rgba(var(--theme-color), .75);
  color: rgba(var(--theme-color));
  text-shadow: -1px -1px 0 #0007, -1px 1px 0 #0007, 1px -1px 0 #0007, 1px 1px 0 #0007;
}

.game-info button:active {
  background: #1119;
}
</style>