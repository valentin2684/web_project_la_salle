<template>
  <div>
    <form @submit.prevent="loginPlayer">
      <label for="playerId">Player ID:</label>
      <input v-model="playerId" type="text" required />

      <label for="password">Password:</label>
      <input v-model="password" type="password" required />

      <button type="submit" class="btn btn-primary">Login</button>
      
      <div v-if="error" class="error-message">{{ error }}</div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      playerId: '',
      password: '',
      error: null,
    };
  },
  mounted() {
    const storedPlayerData = localStorage.getItem('playerData');
    if (storedPlayerData) {
      const playerData = JSON.parse(storedPlayerData);
      
      this.playerId = playerData.player_ID;
      this.password = playerData.password;

      this.loginPlayer(this.playerId, this.password);
    }
  },
  methods: {
    async loginPlayer() {
      const username = this.playerId;
      const password = this.password;


      try {
        const response = await this.$axios.post(
          'https://balandrau.salle.url.edu/i3/players/join',
          {
            player_ID: username,
            password: password,
          }
        );

        if (response.status === 200) {
          this.$emit('playerLoggedIn', response.data);
        } else {
          this.error = 'Error logging in: Invalid response from the server';
        }

      } catch (error) {
        const errorMessage = error.response.data.error.message;
        this.error = `Error logging in: ${errorMessage}`;
      }
    },
  },
};
</script>