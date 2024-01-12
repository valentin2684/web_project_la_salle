<template>
    <div>
      <h2>Account information</h2>
      <div v-if="player">
        <ol type="1">
          <li>Player ID: {{ player.player_ID }}</li>
          <li><p>image: </p><img :src="player.img" alt="Player Image" class="w-75"></li>
          <li><p>player XP: {{ player.xp }}</p></li>
          <li>player Level: {{ player.level }}</li>
          <li>player Coins: {{ player.coins }}</li>
        </ol>
      </div>
      <div v-if="error" class="error-message">{{ error }}</div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        player: null,
        error: null,
      };
    },
    mounted() {
    this.getOnePlayer();
  },
    methods: {
      async getOnePlayer() {
        try {
          const { token, player_ID } = JSON.parse(localStorage.getItem('playerData'));
  
          const response = await this.$axios.get(`https://balandrau.salle.url.edu/i3/players/${player_ID}`, {
            headers: {
              Bearer: `${token}`,
            },
          });
  
          if (response.status === 200) {
            this.player = response.data;
          } else {
            this.error = 'Error fetching one player: Invalid response from the server';
          }
        } catch (error) {
          const errorMessage = error.response.data.error.message;
          this.error = `Error fetching one player: ${errorMessage}`;
        }
      },
    },
  };
  </script>