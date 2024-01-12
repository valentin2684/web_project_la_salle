<template>
    <div>
      <h2>Unequip Attack</h2>
      <form @submit.prevent="unequipAttack">
        <label for="unequipId">Attack ID to Unequip:</label>
        <input v-model="unequipId" type="text" required />
  
        <button type="submit" class="btn btn-primary">Unequip Attack</button>
      </form>
      <div v-if="successMessage">{{ successMessage }}</div>
      <div v-if="error" class="error-message">{{ error }}</div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        unequipId: '',
        successMessage: null,
        error: null,
      };
    },
    methods: {
      async unequipAttack() {
        try {
          const token = JSON.parse(localStorage.getItem('playerData')).token;
  
          const response = await this.$axios.delete(`https://balandrau.salle.url.edu/i3/players/attacks/${this.unequipId}`, {
            headers: {
              Bearer: `${token}`,
            },
          });
  
          if (response.status === 204) {
            this.successMessage = 'Attack unequipped successfully';
          } else {
            this.error = 'Error unequipping attack: Invalid response from the server';
          }
        } catch (error) {
          const errorMessage = error.response.data.error.message;
          this.error = `Error unequipping attack: ${errorMessage}`;
        }
      },
    },
  };
  </script>
  