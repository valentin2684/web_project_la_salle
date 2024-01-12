<template>
    <div>
      <h2>Leave Game</h2>
      <label for="gameId">Game ID:</label>
      <input v-model="gameId" type="text" required />
  
      <button @click="leaveGame" class="btn btn-primary">Leave Game</button>
  
      <div v-if="successMessage">{{ successMessage }}</div>
      <div v-if="error" class="error-message">{{ error }}</div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        gameId: '',
        successMessage: null,
        error: null,
      };
    },
    methods: {
      async leaveGame() {
        try {
          const token = JSON.parse(localStorage.getItem('playerData')).token;
  
          const response = await this.$axios.delete(`https://balandrau.salle.url.edu/i3/arenas/${this.gameId}/play`, {
            headers: {
              Bearer: `${token}`,
            },
          });
  
          if (response.status === 204) {
            this.successMessage = 'Left game successfully';
          } else {
            this.error = 'Error leaving game: Invalid response from the server';
          }
        } catch (error) {
          const errorMessage = error.response.data.error.message;
          this.error = `Error leaving game: ${errorMessage}`;
        }
      },
    },
  };
  </script>