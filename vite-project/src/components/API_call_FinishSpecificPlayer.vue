<template>
    <div>
      <h2>Finished Games</h2>
      <form @submit.prevent="getFinishedGames">
        <label for="playerId">Player ID:</label>
        <input v-model="playerId" type="text" required />
  
        <button type="submit" class="btn btn-primary">Get Finished Games</button>
      </form>
      <div v-if="finishedGames" class="auto_overflow_scroll">
        <ul>
          <li v-for="game in finishedGames" :key="game.game_ID">
            <p>=== Game ID: {{ game.game_ID }} ===</p>
            <p>Size: {{ game.size }}</p>
            <p>Creation Date: {{ game.creation_date }}</p>
            <p>Max HP: {{ game.HP_max }}</p>
            <ul>
              <li v-for="playerGame in game.players_games" :key="playerGame.game_ID">
                <p>Player ID: {{ playerGame.player_ID }}</p>
                <p>Winner: {{ playerGame.winner }}</p>
                <p>XP Won: {{ playerGame.xp_win }}</p>
                <p>Coins Won: {{ playerGame.coins_win }}</p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div v-if="error" class="error-message">{{ error }}</div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        playerId: '',
        finishedGames: null,
        error: null,
      };
    },
    methods: {
      async getFinishedGames() {
        try {
          const token = JSON.parse(localStorage.getItem('playerData')).token;
  
          const response = await this.$axios.get(`https://balandrau.salle.url.edu/i3/players/${this.playerId}/games/finished`, {
            headers: {
              Bearer: `${token}`,
            },
          });
  
          if (response.status === 200) {
            this.finishedGames = response.data;
          } else {
            this.error = 'Error fetching finished games: Invalid response from the server';
          }
        } catch (error) {
          const errorMessage = error.response.data.error.message;
          this.error = `Error fetching finished games: ${errorMessage}`;
        }
      },
    },
  };
  </script>