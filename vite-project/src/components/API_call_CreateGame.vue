<template>
    <div>
      <h2>Create Game</h2>
      <form @submit.prevent="createGame">
        <label for="gameID">Game ID:</label>
        <input v-model="gameID" type="text" required />
  
        <label for="size">Size:</label>
        <input v-model="size" type="number" required />
  
        <label for="maxHP">Max HP:</label>
        <input v-model="maxHP" type="number" required />
  
        <button type="submit" class="btn btn-primary">Create Game</button>
      </form>
      <div v-if="successMessage">{{ successMessage }}</div>
      <div v-if="error" class="error-message">{{ error }}</div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        gameID: '',
        size: 0,
        maxHP: 0,
        successMessage: null,
        error: null,
      };
    },
    methods: {
      async createGame() {
        try {
          const token = JSON.parse(localStorage.getItem('playerData')).token;
  
          const response = await this.$axios.post('https://balandrau.salle.url.edu/i3/arenas', {
            game_ID: this.gameID,
            size: this.size,
            HP_max: this.maxHP,
          }, {
            headers: {
              Bearer: `${token}`,
            },
          });
  
          if (response.status === 201) {
            this.successMessage = 'Game created successfully';
          } else {
            this.error = 'Error creating game: Invalid response from the server';
          }
        } catch (error) {
          const errorMessage = error.response.data.error.message;
          this.error = `Error creating game: ${errorMessage}`;
        }
      },
    },
  };
  </script>