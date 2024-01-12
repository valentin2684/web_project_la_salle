<template>
    <div>
      <h2>Game Logs</h2>
      <label for="gameId">Game ID:</label>
      <input v-model="gameId" type="text" required />
  
      <button @click="getGameLogs" class="btn btn-primary">Get Game Logs</button>
  
      <div v-if="logs.length > 0" class="auto_overflow_scroll">
        <h3>Logs:</h3>
        <ul>
          <li v-for="log in logs" :key="log.date_time">
            <strong>{{ log.description }}</strong> - {{ log.date_time }} (Player: {{ log.playerID }})
          </li>
        </ul>
      </div>
  
      <div v-if="error" class="error-message">{{ error }}</div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        gameId: '',
        logs: [],
        error: null,
      };
    },
    methods: {
      async getGameLogs() {
        try {
          const token = JSON.parse(localStorage.getItem('playerData')).token;
  
          const response = await this.$axios.get(`https://balandrau.salle.url.edu/i3/arenas/${this.gameId}/logs`, {
            headers: {
              Bearer: `${token}`,
            },
          });
  
          if (response.status === 200) {
            this.logs = response.data;
          } else {
            this.error = 'Error getting game logs: Invalid response from the server';
          }
        } catch (error) {
          const errorMessage = error.response.data.error.message;
          this.error = `Error getting game logs: ${errorMessage}`;
        }
      },
    },
  };
  </script>