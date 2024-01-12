<template>
  <div>
    <h2>All Games</h2>
    
    <div>
      <button @click="filterGames('finished')" class="btn btn-primary">Finished Games</button>
      <button @click="filterGames('available')" class="btn btn-primary">Available Games</button>
      <button @click="filterGames('all')" class="btn btn-primary">All Games</button>
    </div>

    <div v-if="filteredGames" class="auto_overflow_scroll">
      <div v-for="game in filteredGames" :key="game.game_ID">
        <p>=== Game ID: {{ game.game_ID }} ===</p>
        <p>Size: {{ game.size }}</p>
        <p>Creation Date: {{ game.creation_date }}</p>
        <p>Finished: {{ game.finished ? 'Yes' : 'No' }}</p>
        <p>Max HP: {{ game.HP_max }}</p>
        <p>Start: {{ game.start ? 'Yes' : 'No' }}</p>
        <div v-for="playerGame in game.players_games" :key="playerGame.game_ID">
          <p>Player ID: {{ playerGame.player_ID }}</p>
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
      games: null,
      filteredGames: null,
      error: null,
    };
  },
  methods: {
    async getAllGames() {
      try {
        const token = JSON.parse(localStorage.getItem('playerData')).token;

        const response = await this.$axios.get('https://balandrau.salle.url.edu/i3/arenas', {
          headers: {
            Bearer: `${token}`,
          },
        });

        if (response.status === 200) {
          this.games = response.data;
        } else {
          this.error = 'Error fetching all games: Invalid response from the server';
        }
      } catch (error) {
        const errorMessage = error.response.data.error.message;
        this.error = `Error fetching all games: ${errorMessage}`;
      }
    },
    filterGames(type) {
      switch (type) {
        case 'finished':
          this.filteredGames = this.games.filter(game => game.finished);
          break;
        case 'available':
          this.filteredGames = this.games.filter(game => !game.finished);
          break;
        case 'all':
          this.filteredGames = this.games;
          break;
        default:
          break;
      }
    },
  },
  mounted() {
    this.getAllGames();
  },
};
</script>
