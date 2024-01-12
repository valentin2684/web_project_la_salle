<template>
    <div>
      <h2>Create Attack Weapon</h2>
      <form @submit.prevent="createAttackWeapon" class="d-flex flex-column">

        <div>
          <label for="attackId">Attack ID:</label>
        <input v-model="attackId" type="text" required />
        </div>

  <div>
    <label for="positions">Positions:</label>
        <input v-model="positions" type="text" required />
  </div>

  <div>
    <label for="img">Image URL:</label>
        <input v-model="img" type="text" required />
  </div>

  
        <button type="submit" class="btn btn-primary">Create Attack Weapon</button>
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
        positions: '',
        img: '',
        successMessage: null,
        error: null,
      };
    },
    methods: {
      async createAttackWeapon() {
        try {
          const token = JSON.parse(localStorage.getItem('playerData')).token;
  
          const response = await this.$axios.post('https://balandrau.salle.url.edu/i3/shop/attacks', {
            attack_ID: this.attackId,
            positions: this.positions,
            img: this.img,
          }, {
            headers: {
              Bearer: `${token}`,
            },
          });
  
          if (response.status === 201) {
            this.successMessage = 'Attack weapon created successfully';
          } else {
            this.error = 'Error creating attack weapon: Invalid response from the server';
          }
        } catch (error) {
          const errorMessage = error.response.data.error.message;
          this.error = `Error creating attack weapon: ${errorMessage}`;
        }
      },
    },
  };
  </script>