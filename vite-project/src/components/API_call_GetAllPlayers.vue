<template>
  <div>
    <h2>All Players</h2>
    <div v-if="players" class="auto_overflow_scroll">
      <ul>
        <li v-for="player in players" :key="player.player_ID">
          <p>=== Player ID: {{ player.player_ID }} ===</p>
          <p>player img: {{ player.img }}</p>
          <p>player XP: {{ player.xp }}</p>
          <p>player Level: {{ player.level }}</p>
          <p>player Coins: {{ player.coins }}</p>
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
      players: null,
      error: null,
    };
  },
  methods: {
    async getAllPlayers() {
      try {
        const token = JSON.parse(localStorage.getItem('playerData')).token;

        const response = await this.$axios.get('https://balandrau.salle.url.edu/i3/players', {
          headers: {
            Bearer: `${token}`,
          },
        });

        if (response.status === 200) {
          this.players = response.data;
        } else {
          this.error = 'Error fetching all players: Invalid response from the server';
        }
      } catch (error) {
        const errorMessage = error.response.data.error.message;
        this.error = `Error fetching all players: ${errorMessage}`;
      }
    },
  },
  mounted() {
    this.getAllPlayers();
  },
};
</script>