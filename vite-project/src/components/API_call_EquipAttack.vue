<template>
    <div>
      <h2>Equip Attack</h2>
      <form @submit.prevent="equipAttack">
        <label for="equipId">Attack ID to Equip:</label>
        <input v-model="equipId" type="text" required />
  
        <button type="submit" class="btn btn-primary">Equip Attack</button>
      </form>
      <div v-if="successMessage">{{ successMessage }}</div>
      <div v-if="error" class="error-message">{{ error }}</div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        equipId: '',
        successMessage: null,
        error: null,
      };
    },
    methods: {
      async equipAttack() {
        try {
          const token = JSON.parse(localStorage.getItem('playerData')).token;
  
          const response = await this.$axios.post(`https://balandrau.salle.url.edu/i3/players/attacks/${this.equipId}`, null, {
            headers: {
              Bearer: `${token}`,
            },
          });
  
          if (response.status === 204) {
            this.successMessage = 'Attack equipped successfully';
          } else {
            this.error = 'Error equipping attack: Invalid response from the server';
          }
        } catch (error) {
          const errorMessage = error.response.data.error.message;
          this.error = `Error equipping attack: ${errorMessage}`;
        }
      },
    },
  };
  </script>