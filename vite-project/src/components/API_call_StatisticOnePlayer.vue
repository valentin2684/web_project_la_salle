<template>
  <div>
    <h2>Player Statistics</h2>
    <form @submit.prevent="getPlayerStatistics">
      <label for="playerId">Player ID:</label>
      <input v-model="playerId" type="text" required />

      <button type="submit" class="btn btn-primary">Get Player Statistics</button>
    </form>
    <div v-if="statistics">
      <p>Games Played: {{ statistics.games_played }}</p>
      <p>Games Won: {{ statistics.games_won }}</p>
    </div>
    <div v-if="error" class="error-message">{{ error }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      playerId: '',
      statistics: null,
      error: null,
    };
  },
  methods: {
    async getPlayerStatistics() {
      try {
        const token = JSON.parse(localStorage.getItem('playerData')).token;

        const response = await this.$axios.get(
          `https://balandrau.salle.url.edu/i3/players/${this.playerId}/statistics`,
          {
            headers: {
              Bearer: `${token}`,
            },
          }
        );

        if (response.status === 200) {
          this.statistics = response.data;
        } else {
          this.error = 'Error fetching player statistics: Invalid response from the server';
        }
      } catch (error) {
        const errorMessage = error.response.data.error.message;
        this.error = `Error fetching player statistics: ${errorMessage}`;
      }
    },
  },
};
</script>