<template>
    <div>
      <h2>Buy Attack</h2>
      <form @submit.prevent="buyAttack">
        <label for="attackId">Attack ID:</label>
        <input v-model="attackId" type="text" required />
  
        <button type="submit" class="btn btn-primary">Buy Attack</button>
      </form>
      <div v-if="successMessage">{{ successMessage }}</div>
      <div v-if="error" class="error-message">{{ error }}</div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        attackId: '',
        successMessage: null,
        error: null,
      };
    },
    methods: {
      async buyAttack() {
        try {
          const token = JSON.parse(localStorage.getItem('playerData')).token;
  
          const response = await this.$axios.post(
            `https://balandrau.salle.url.edu/i3/shop/attacks/${this.attackId}/buy`,
            {},
            {
              headers: {
                Bearer: `${token}`,
              },
            }
          );
  
          if (response.status === 200) {
            this.successMessage = 'Attack bought successfully';
            this.attackId = '';
          } else {
            this.error = 'Error buying attack: Invalid response from the server';
          }
        } catch (error) {
          const errorMessage = error.response.data.error.message;
          this.error = `Error buying attack: ${errorMessage}`;
        }
      },
    },
  };
  </script>