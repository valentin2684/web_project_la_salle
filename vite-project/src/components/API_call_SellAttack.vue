<template>
    <div>
      <h2>Sell Attack</h2>
      <form @submit.prevent="sellAttack" class="d-flex flex-column">

        <div>
          <label for="attackId">Attack ID:</label>
        <input v-model="attackId" type="text" required />
        </div>

  <div>
    <label for="price">Price:</label>
        <input v-model="price" type="number" required />
  </div>

        <button type="submit" class="btn btn-primary">Sell Attack</button>
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
        price: 0,
        successMessage: null,
        error: null,
      };
    },
    methods: {
      async sellAttack() {
        try {
          const token = JSON.parse(localStorage.getItem('playerData')).token;
  
          const response = await this.$axios.post(
            `https://balandrau.salle.url.edu/i3/shop/attacks/${this.attackId}/sell`,
            {
              price: this.price,
            },
            {
              headers: {
                Bearer: `${token}`,
              },
            }
          );
  
          if (response.status === 200) {
            this.successMessage = 'Attack sold successfully';
            this.attackId = '';
            this.price = 0;
          } else {
            this.error = 'Error selling attack: Invalid response from the server';
          }
        } catch (error) {
          const errorMessage = error.response.data.error.message;
          this.error = `Error selling attack: ${errorMessage}`;
        }
      },
    },
  };
  </script>
