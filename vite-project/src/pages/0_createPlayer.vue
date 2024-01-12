<!-- The creation/login page. 
  if no data in localstorage -> see create an account page
  if data in localstorage -> see login information (and auto login)
-->

<template>
  <div>
    <h1 class="d-flex justify-content-center h1">Create Player Page</h1>

    <section v-if="localStoragePlayerData">
      <API_call_LoginPlayer
        :playerId="localStoragePlayerData.player_ID"
        :password="localStoragePlayerData.password"
        @playerLoggedIn="handlePlayerLoggedIn"
      />
    </section>

    <section v-else>
      <form @submit.prevent="createPlayer">
        <label for="playerId">Player ID:</label>
        <input v-model="playerId" type="text" required />

        <label for="password">Password:</label>
        <input v-model="password" type="password" required />

        <label for="img">Image URL:</label>
        <input v-model="img" type="text" required />

        <button type="submit" class="btn btn-primary">Create Player</button>

        <div v-if="createPlayerError" class="error-message">{{ createPlayerError }}</div>
      </form>
    </section>
  </div>

  <footer>
    <p id="important_text">In case you can't login, please contact us at realEmail@mail.com</p>
  </footer>
</template>

<script>
import API_call_LoginPlayer from '../components/API_call_LoginPlayer.vue';
import API_call_CreatePlayer from '../components/API_call_CreatePlayer.vue';

export default {
  components: {
    API_call_LoginPlayer,
    API_call_CreatePlayer,
  },
  data() {
    return {
      localStoragePlayerData: JSON.parse(localStorage.getItem('playerData')),
      playerId: '',
      password: '',
      img: '',
      createPlayerError: null,
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
          localStorage.setItem('playerData', JSON.stringify({
            player_ID: this.playerId,
            password: this.password,
            img: this.img,
            ...response.data,
          }));
          console.log('Player information saved to localStorage:', response.data);

          window.location.reload();
        } else {
          this.createPlayerError = 'Error creating player: Invalid response from the server';
        }
      } catch (error) {
        const errorMessage = error.response.data.error.message;
        this.createPlayerError = `Error creating player: ${errorMessage}`;
      }
    },

    handlePlayerLoggedIn(playerData) {
      localStorage.setItem('playerData', JSON.stringify(playerData));
      console.log('Player information saved to localStorage:', playerData);

      this.$router.push('/page1');
    },
  },
};
</script>