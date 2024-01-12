<template>
    <div>
      <h2>Enter Game</h2>
      <label for="gameId">Game ID:</label>
      <input v-model="gameId" type="text" required />
  
      <button @click="enterGame" class="btn btn-primary">Enter Game</button>
  
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
      async enterGame() {
        try {
          const token = JSON.parse(localStorage.getItem('playerData')).token;
  
          const response = await this.$axios.post(`https://balandrau.salle.url.edu/i3/arenas/${this.gameId}/play`, null, {
            headers: {
              Bearer: `${token}`,
            },
          });
  
          if (response.status === 200) {
            this.successMessage = 'Entered game successfully';
          } else {
            this.error = 'Error entering game: Invalid response from the server';
          }
        } catch (error) {
          const errorMessage = error.response.data.error.message;
          this.error = `Error entering game: ${errorMessage}`;
        }
      },
    },
  };
  </script>