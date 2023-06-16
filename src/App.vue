<template>
  <div class="board-container">
    <div class="game ticTacToe">
      <div
        v-for="(cell, index) in cells"
        :key="index"
        :class="'cell'"
        :data-player="cell"
        @click="placeMark(index)"
      >
        {{ cell }}
      </div>
    </div>
  </div>
  <div class="result-container">
    <div v-if="result" class="result-message">{{ result }}</div>
    <button class="start-again" @click="restartGame">Start Again</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPlayer: "X",
      cells: Array(9).fill(""),
      result: "",
    };
  },
  methods: {
    placeMark(index) {
      if (this.cells[index] === "" && !this.result) {
        this.cells.splice(index, 1, this.currentPlayer);
        this.checkForWinner();
        this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
      }
    },
    checkForWinner() {
      const winningPositions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];

      for (let i = 0; i < winningPositions.length; i++) {
        const [a, b, c] = winningPositions[i];
        if (
          this.cells[a] &&
          this.cells[a] === this.cells[b] &&
          this.cells[a] === this.cells[c]
        ) {
          this.result = `${this.currentPlayer} Wins!`;
          return;
        }
      }

      if (!this.cells.includes("")) {
        this.result = "It's a Draw!";
      }
    },
    restartGame() {
      this.currentPlayer = "X";
      this.cells = Array(9).fill("");
      this.result = "";
    },
  },
};
</script>

<style>
/* Tic Tac Toe game styles */
.board-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.ticTacToe {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  gap: 5px;
  background-color: #000000;
  padding: 5px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}

.cell {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333;
  color: #ffffff;
  font-size: 2rem;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  user-select: none;
}

.cell:hover {
  background-color: dimgray;
}

.result-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.result-message {
  display: flex;
  margin: auto;
  font-size: 24px;
  font-weight: bold;
  color: rgb(0, 0, 0);
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
}
.start-again {
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  background-color: #12ad19;
  color: #020202;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.start-again:hover {
  background-color: #00ff15;
}

.vue-title {
  text-align: center;
}
</style>
