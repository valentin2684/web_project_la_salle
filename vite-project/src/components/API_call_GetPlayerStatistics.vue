<template>
  <div>
    <h2>Games statistics</h2>
    <div v-if="statistics">
      <ul>
        <li>Games Played: {{ statistics.games_played }}</li>
        <li>Games Won: {{ statistics.games_won }}</li>
        <li>Winning Percentage: {{ winningPercentage }}%</li>
      </ul>
    </div>
    <div v-else-if="error" class="error-message">{{ error }}</div>
    <div v-else>
      <p>No statistics available.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      statistics: null,
      error: null,
    };
  },
  created() {
    this.getPlayerStatistics();
  },
  methods: {
    async getPlayerStatistics() {
      try {
        const token = JSON.parse(localStorage.getItem('playerData')).token;

        const response = await this.$axios.get('https://balandrau.salle.url.edu/i3/players/statistics', {
          headers: {
            Bearer: `${token}`,
          },
        });

        if (response.status === 200) {
          this.statistics = response.data;
        } else {
          this.error = 'Error fetching player statistics: Invalid response from the server';
        }
      } catch (error) {
        const errorMessage = error.response?.data?.error?.message || 'Unknown error';
        this.error = `Error fetching player statistics: ${errorMessage}`;
      }
    },
  },
  computed: {
    winningPercentage() {
      if (this.statistics && this.statistics.games_played > 0) {
        return ((this.statistics.games_won / this.statistics.games_played) * 100).toFixed(2);
      }
      return 0;
    },
  },
};
</script>
