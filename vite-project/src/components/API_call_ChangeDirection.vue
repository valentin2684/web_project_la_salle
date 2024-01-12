<template>
    <div>
      <h2>Change Player Direction</h2>
      
      <button @click="changeDirection('up')" class="btn btn-primary">Up</button>
      <button @click="changeDirection('down')" class="btn btn-primary">Down</button>
      <button @click="changeDirection('left')" class="btn btn-primary">Left</button>
      <button @click="changeDirection('right')" class="btn btn-primary">Right</button>
  
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
      async changeDirection(selectedDirection) {
        try {
          const token = JSON.parse(localStorage.getItem('playerData')).token;
  
          const response = await this.$axios.post('https://balandrau.salle.url.edu/i3/arenas/direction', {
            direction: selectedDirection,
          }, {
            headers: {
              Bearer: `${token}`,
            },
          });
  
          if (response.status === 200) {
            this.successMessage = 'Direction changed successfully';
          } else {
            this.error = 'Error changing player direction: Invalid response from the server';
          }
        } catch (error) {
          const errorMessage = error.response.data.error.message;
          this.error = `Error changing player direction: ${errorMessage}`;
        }
      },
    },
  };
  </script>