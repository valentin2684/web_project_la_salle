<template>
    <div>
      <h2>Manage Player Movement</h2>
      
      <button @click="movePlayer('up')" class="btn btn-primary">Move Up</button>
      <button @click="movePlayer('down')" class="btn btn-primary">Move Down</button>
      <button @click="movePlayer('left')" class="btn btn-primary">Move Left</button>
      <button @click="movePlayer('right')" class="btn btn-primary">Move Right</button>
  
      <div v-if="successMessage">{{ successMessage }}</div>
      <div v-if="error" class="error-message">{{ error }}</div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        successMessage: null,
        error: null,
      };
    },
    methods: {
      async movePlayer(movement) {
        try {
          const token = JSON.parse(localStorage.getItem('playerData')).token;
  
          const response = await this.$axios.post('https://balandrau.salle.url.edu/i3/arenas/move', {
            movement: movement,
          }, {
            headers: {
              Bearer: `${token}`,
            },
          });
  
          if (response.status === 200) {
            this.successMessage = 'Movement successful';
          } else {
            this.error = 'Error managing player movement: Invalid response from the server';
          }
        } catch (error) {
          const errorMessage = error.response.data.error.message;
          this.error = `Error managing player movement: ${errorMessage}`;
        }
      },
    },
  };
  </script>