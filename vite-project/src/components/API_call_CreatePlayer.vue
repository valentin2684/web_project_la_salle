<template>
  <div>
    <form @submit.prevent="createPlayer">
      <label for="playerId">Player ID:</label>
      <input v-model="playerId" type="text" required />

      <label for="password">Password:</label>
      <input v-model="password" type="password" required />

      <label for="img">Image URL:</label>
      <input v-model="img" type="text" required />

      <button type="submit" class="btn btn-primary">Create Player</button>
      
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
      img: '',
      error: null,
    };
  },
  methods: {
    async createPlayer() {
      try {
        const response = await this.$axios.post(
          'https://balandrau.salle.url.edu/i3/players',
          {
            player_ID: this.playerId,
            password: this.password,
            img: this.img,
          }
        );

        if (response.status === 201) {
          this.savePlayerInfo(response.data);
        } else {
          this.error = 'Error creating player: Invalid response from the server';
        }

      } catch (error) {
        const errorMessage = error.response.data.error.message;
        this.error = `Error creating player: ${errorMessage}`;
      }
    },
    savePlayerInfo(playerData) {
      localStorage.setItem('playerData', JSON.stringify({
        player_ID: this.playerId,
        password: this.password,
        img: this.img,
        ...playerData,
      }));
      console.log('Player information saved to localStorage:', playerData);

      this.$emit('playerCreated', playerData);
    },
  },
};
</script>