<template>
    <div>
      <h2>Attack in Game</h2>
  
      <button @click="attackInGame" class="btn btn-primary">Attack</button>
      
      <div v-if="successMessage">{{ successMessage }}</div>
      <div v-if="error" class="error-message">{{ error }}</div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        successMessage: null,
        error: null,
      };
    },
    methods: {
      async attackInGame() {
        try {
          const token = JSON.parse(localStorage.getItem('playerData')).token;
  
          const attacksResponse = await this.$axios.get('https://balandrau.salle.url.edu/i3/players/attacks', {
            headers: {
              Bearer: `${token}`,
            },
          });
  
          if (attacksResponse.status === 200) {
            const equippedAttack = attacksResponse.data.find(attack => attack.equipped === true);
  
            if (equippedAttack) {
              const targetId = equippedAttack.attack_ID;
  
              const attackResponse = await this.$axios.post(`https://balandrau.salle.url.edu/i3/arenas/attack/${targetId}`, {
              }, {
                headers: {
                  Bearer: `${token}`,
                },
              });
  
              if (attackResponse.status === 204) {
                this.successMessage = 'Attack made successfully';
              } else {
                this.error = 'Error making attack in the game: Invalid response from the server';
              }
            } else {
              this.error = 'No equipped attack found';
            }
          } else {
            this.error = 'Error fetching attacks data: Invalid response from the server';
          }
        } catch (error) {
          const errorMessage = error.response.data.error.message;
          this.error = `Error making attack in the game: ${errorMessage}`;
        }
      },
    },
  };
  </script>