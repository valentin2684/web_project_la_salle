<template>
  <div>
    <h2>Get Our Attacks</h2>
    <div v-if="playerAttacks">
      <div v-for="attack in playerAttacks" :key="attack.attack_ID">
        <p>=== Attack ID: {{ attack.attack_ID }} ===</p>
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
      playerAttacks: null,
      error: null,
    };
  },
  methods: {
    async getPlayerAttacks() {
      try {
        const token = JSON.parse(localStorage.getItem('playerData')).token;

        const response = await this.$axios.get('https://balandrau.salle.url.edu/i3/players/attacks', {
          headers: {
            Bearer: `${token}`,
          },
        });

        if (response.status === 200) {
          this.playerAttacks = response.data;
        } else {
          this.error = 'Error fetching player attacks: Invalid response from the server';
        }
      } catch (error) {
        const errorMessage = error.response.data.error.message;
        this.error = `Error fetching player attacks: ${errorMessage}`;
      }
    },
  },
  mounted() {
    this.getPlayerAttacks();
  },
};
</script>