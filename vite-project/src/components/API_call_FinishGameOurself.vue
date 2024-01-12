<template>
  <div>
    <h2>Finished Games</h2>
    <div v-if="finishedGames && finishedGames.length > 0" >
      <div v-for="game in finishedGames" :key="game.game_ID" class="auto_overflow_scroll">
        <p>Game ID: {{ game.game_ID }}</p>
        <p>Size: {{ game.size }}</p>
        <p>Creation Date: {{ game.creation_date }}</p>
        <p>Max HP: {{ game.HP_max }}</p>
        <div v-for="playerGame in game.players_games" :key="playerGame.player_ID">
          <p>Player ID: {{ playerGame.player_ID }}</p>
          <p>Winner: {{ playerGame.winner }}</p>
          <p>XP Won: {{ playerGame.xp_win }}</p>
          <p>Coins Won: {{ playerGame.coins_win }}</p>
        </div>
      </div>
    </div>
    <div v-else>
      <p>No game finished.</p>
    </div>
    <div v-if="error" class="error-message">{{ error }}</div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const finishedGames = ref([]);
    const error = ref(null);

    const getFinishedGames = async () => {
      try {
        const playerData = JSON.parse(localStorage.getItem('playerData'));
        if (!playerData || !playerData.token) {
          error.value = 'Token not found in local storage.';
          return;
        }

        const token = playerData.token;
        const response = await axios.get('https://balandrau.salle.url.edu/i3/players/games/finished', {
          headers: {
            Bearer: `${token}`,
          },
        });

        if (response.status === 200) {
          finishedGames.value = response.data;
        } else {
          error.value = 'Error fetching finished games: Invalid response from the server';
        }
      } catch (error) {
        const errorMessage = error.response ? error.response.data.error.message : 'Unknown error';
        error.value = `Error fetching finished games: ${errorMessage}`;
      }
    };

    onMounted(() => {
      console.log('Component mounted');
      getFinishedGames();
    });

    return {
      finishedGames,
      error,
    };
  },
};
</script>
