<template>
    <div>
      <h2>Game Information</h2>
      <label for="gameId">Game ID:</label>
      <input v-model="gameId" type="text" required />
  
      <button @click="getGameInfo" class="btn btn-primary">Get Game Info</button>
  
      <div v-if="gameInfo" class="auto_overflow_scroll">
        <p>Game ID: {{ gameInfo.game_ID }}</p>
        <p>Size: {{ gameInfo.size }}</p>
        <p>Creation Date: {{ gameInfo.creation_date }}</p>
        <p>Finished: {{ gameInfo.finished ? 'Yes' : 'No' }}</p>
        <p>HP Max: {{ gameInfo.HP_max }}</p>
        <p>Start: {{ gameInfo.start ? 'Yes' : 'No' }}</p>
  
        <div v-if="gameInfo.players_games && gameInfo.players_games.length">
          <h3>Players in the Game:</h3>
          <ul>
            <li v-for="playerGame in gameInfo.players_games" :key="playerGame.player_ID">
              <p>Player ID: {{ playerGame.player_ID }}</p>
              <p>Winner: {{ playerGame.winner ? 'Yes' : 'No' }}</p>
              <p>XP Win: {{ playerGame.xp_win }}</p>
              <p>Coins Win: {{ playerGame.coins_win }}</p>
            </li>
          </ul>
        </div>
      </div>
  
      <div v-if="error" class="error-message">{{ error }}</div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        gameId: '',
        gameInfo: null,
        error: null,
      };
    },
    methods: {
      async getGameInfo() {
        try {
          const token = JSON.parse(localStorage.getItem('playerData')).token;
  
          const response = await this.$axios.get(`https://balandrau.salle.url.edu/i3/arenas/${this.gameId}`, {
            headers: {
              Bearer: `${token}`,
            },
          });
  
          if (response.status === 200) {
            this.gameInfo = response.data;
          } else {
            this.error = 'Error fetching game information: Invalid response from the server';
          }
        } catch (error) {
          const errorMessage = error.response.data.error.message;
          this.error = `Error fetching game information: ${errorMessage}`;
        }
      },
    },
  };
  </script>