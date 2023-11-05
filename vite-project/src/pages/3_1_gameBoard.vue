<template>
  <div>
    <MenuComponent />
    <h1 class="d-flex justify-content-center h1">we are at "game" page</h1>
  </div>

  <div class="row">
    <div v-for="(row, rowIndex) in grid" :key="rowIndex" class="grid-row justify-content-md-center">
      <div v-for="(cell, colIndex) in row" :key="colIndex" class="grid-cell">
        <div v-if="player1.position[0] === rowIndex && player1.position[1] === colIndex"
          class="player1"></div>
        <div v-else-if="player2.position[0] === rowIndex && player2.position[1] === colIndex"
          class="player2"></div>
      </div>
    </div>

    <h2 class="d-flex justify-content-center h3"> the current player is {{ currentPlayer }}</h2>
  </div>

  <div class="row">
    <div class="col d-flex flex-column justify-content-center align-items-center">
      <button class="btn-danger btn btn-primary btn-lg" @click="movePlayer(player1, 'UP')" :disabled="currentPlayer !== 'player1'">Joueur 1 UP</button>
      <div>
        <button class="btn-danger btn btn-primary btn-lg" @click="movePlayer(player1, 'LEFT')" :disabled="currentPlayer !== 'player1'">Joueur 1 LEFT</button>
        <button class="btn-danger btn btn-primary btn-lg" @click="movePlayer(player1, 'DOWN')" :disabled="currentPlayer !== 'player1'">Joueur 1 DOWN</button>
        <button class="btn-danger btn btn-primary btn-lg" @click="movePlayer(player1, 'RIGHT')" :disabled="currentPlayer !== 'player1'">Joueur 1 RIGHT</button>
      </div>
    </div>
    <div class="col d-flex flex-column justify-content-center align-items-center">
      <button class="btn-success btn btn-primary btn-lg" @click="movePlayer(player2, 'UP')" :disabled="currentPlayer !== 'player2'">Joueur 2 UP</button>
      <div>
        <button class="btn-success btn btn-primary btn-lg" @click="movePlayer(player2, 'LEFT')" :disabled="currentPlayer !== 'player2'">Joueur 2 LEFT</button>
        <button class="btn-success btn btn-primary btn-lg" @click="movePlayer(player2, 'DOWN')" :disabled="currentPlayer !== 'player2'">Joueur 2 DOWN</button>
        <button class="btn-success btn btn-primary btn-lg" @click="movePlayer(player2, 'RIGHT')" :disabled="currentPlayer !== 'player2'">Joueur 2 RIGHT</button>
      </div>
    </div>
  </div>
</template>

<script>
import MenuComponent from '../components/menu.vue';

export default {
    components: {
      MenuComponent
    },
  data() {
  return {
    grid: Array.from({ length: 10 }, () => Array(10).fill(null)),
    player1: { position: [0, 0], lastPosition: [0, 0] },
    player2: { position: [9, 9], lastPosition: [9, 9] },
    currentPlayer: "player1"
  };
},
  methods: {
    resetGame() {
      this.player1.position = [0, 0];
      this.player2.position = [9, 9];
      this.currentPlayer = "player1";
    },
    movePlayer(player, direction) {
      const [row, col] = player.position;
      switch (direction) {
        case "UP":
          if (row > 0) player.position[0]--;
          break;
        case "DOWN":
          if (row < 9) player.position[0]++;
          break;
        case "LEFT":
          if (col > 0) player.position[1]--;
          break;
        case "RIGHT":
          if (col < 9) player.position[1]++;
          break;
      }
      this.checkWinner();
      this.switchPlayer();
    },
    checkWinner() {
  const currentPlayer = this.currentPlayer === "player1" ? this.player1 : this.player2;
  const opponentPlayer = this.currentPlayer === "player1" ? this.player2 : this.player1;


  const [currentRow, currentCol] = currentPlayer.position;
  const [opponentRow, opponentCol] = opponentPlayer.position;
  const [lastRow, lastCol] = currentPlayer.lastPosition;

  if (currentRow === opponentRow) {
    if ((lastCol < currentCol && currentCol < opponentCol) ||
        (lastCol > currentCol && currentCol > opponentCol)) {
      alert(`The ${this.currentPlayer} win!`);
      this.resetGame();
    }
    currentPlayer.lastPosition = [currentRow, currentCol];
  } else if (currentCol === opponentCol) {

    if ((lastRow < currentRow && currentRow < opponentRow) ||
        (lastRow > currentRow && currentRow > opponentRow)) {
      alert(`The ${this.currentPlayer} win!`);
      this.resetGame();
    }
    currentPlayer.lastPosition = [currentRow, currentCol];
  }
  currentPlayer.lastPosition = [currentRow, currentCol];
  return false;
},
    switchPlayer() {
      this.currentPlayer = this.currentPlayer === "player1" ? "player2" : "player1";
    }
  }
};
</script>