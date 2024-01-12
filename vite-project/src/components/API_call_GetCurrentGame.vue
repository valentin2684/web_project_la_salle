<template>
    <div>
      <h2>Current Game</h2>
      <button @click="getCurrentGame" class="btn btn-primary">Get Current Game</button>
      <div v-if="currentGame">
        <div v-for="game in currentGame" :key="game.game_ID">
          <p>Game ID: {{ game.game_ID }}</p>
          <p>Size: {{ game.size }}</p>
          <p>Creation Date: {{ game.creation_date }}</p>
          <p>Finished: {{ game.finished ? 'Yes' : 'No' }}</p>
          <p>Max HP: {{ game.HP_max }}</p>
          <p>Start: {{ game.start ? 'Yes' : 'No' }}</p>
          <div v-for="playerGame in game.players_games" :key="playerGame.game_ID">
            <p>Player ID: {{ playerGame.player_ID }}</p>
            <p>X Game: {{ playerGame.x_game }}</p>
            <p>Y Game: {{ playerGame.y_game }}</p>
            <p>Direction: {{ playerGame.direction }}</p>
            <p>HP: {{ playerGame.hp }}</p>
            <p>XP Win: {{ playerGame.xp_win }}</p>
            <p>Coins Win: {{ playerGame.coins_win }}</p>
          </div>
        </div>
      </div>
      <div v-if="error" class="error-message">{{ error }}</div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentGame: null,
        error: null,
      };
    },
    methods: {
      async getCurrentGame() {
        try {
          const token = JSON.parse(localStorage.getItem('playerData')).token;
  
          const response = await this.$axios.get('https://balandrau.salle.url.edu/i3/players/arenas/current', {
            headers: {
              Bearer: `${token}`,
            },
          });
  
          if (response.status === 200) {
            this.currentGame = response.data;
          } else {
            this.error = 'Error fetching current game: Invalid response from the server';
          }
        } catch (error) {
          const errorMessage = error.response.data.error.message;
          this.error = `Error fetching current game: ${errorMessage}`;
        }
      },
    },
  };
  </script>