<template>
  <div>
    <h2>Get Buyable Attacks</h2>
    <div v-if="attacks" class="auto_overflow_scroll">
      <div v-for="attack in attacks" :key="attack.attack_ID">
        <p>=== Attack ID: {{ attack.attack_ID }} ===</p>
        <p>Positions: {{ attack.positions }}</p>
        <p>Power: {{ attack.power }}</p>
        <p>Price: {{ attack.price }}</p>
        <p>Level Needed: {{ attack.level_needed }}</p>
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
      attacks: null,
      error: null,
    };
  },
  methods: {
    async getBuyableAttacks() {
      try {
        const token = JSON.parse(localStorage.getItem('playerData')).token;

        const response = await this.$axios.get('https://balandrau.salle.url.edu/i3/shop/attacks', {
          headers: {
            Bearer: `${token}`,
          },
        });

        if (response.status === 200) {
          this.attacks = response.data;
        } else {
          this.error = 'Error fetching buyable attacks: Invalid response from the server';
        }
      } catch (error) {
        const errorMessage = error.response.data.error.message;
        this.error = `Error fetching buyable attacks: ${errorMessage}`;
      }
    },
  },
  mounted() {
    this.getBuyableAttacks();
  },
};
</script>