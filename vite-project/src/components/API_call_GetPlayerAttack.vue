<template>
    <div>
      <h2>Get Player Attacks</h2>
      <form @submit.prevent="getPlayerAttacks">
        <label for="playerId">Player ID:</label>
        <input v-model="playerId" type="text" required />
  
        <button type="submit" class="btn btn-primary">Get Player Attacks</button>
      </form>
      <div v-if="attacks" class="auto_overflow_scroll">
        <div v-for="(attack, index) in attacks" :key="index">
          <p>Attack ID: {{ attack.attack_ID }}</p>
          <p>Positions: {{ attack.positions }}</p>
          <p>Power: {{ attack.power }}</p>
          <p>Equipped: {{ attack.equipped }}</p>
          <p>On Sale: {{ attack.on_sale }}</p>
        </div>
      </div>
      <div v-if="error" class="error-message">{{ error }}</div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        playerId: '',
        attacks: null,
        error: null,
      };
    },
    methods: {
      async getPlayerAttacks() {
        try {
          const token = JSON.parse(localStorage.getItem('playerData')).token;
  
          const response = await this.$axios.get(`https://balandrau.salle.url.edu/i3/players/${this.playerId}/attacks`, {
            headers: {
              Bearer: `${token}`,
            },
          });
  
          if (response.status === 200) {
            this.attacks = response.data;
          } else {
            this.error = 'Error fetching player attacks: Invalid response from the server';
          }
        } catch (error) {
          const errorMessage = error.response.data.error.message;
          this.error = `Error fetching player attacks: ${errorMessage}`;
        }
      },
    },
  };
  </script>