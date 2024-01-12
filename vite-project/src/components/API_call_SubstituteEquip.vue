<template>
    <div>
      <h2>Substitute Attacks</h2>
      <form @submit.prevent="substituteAttacks" class="d-flex flex-column">
        <div>
          <label for="equipId">Attack ID to Equip:</label>
          <input v-model="equipId" type="text" required />
        </div>

        <div>
          <label for="unequipId">Attack ID to Unequip:</label>
          <input v-model="unequipId" type="text" required />
        </div>

          <button type="submit" class="btn btn-primary">Substitute Attacks</button>
      </form>
      <div v-if="successMessage">{{ successMessage }}</div>
      <div v-if="error" class="error-message">{{ error }}</div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        equipId: '',
        unequipId: '',
        successMessage: null,
        error: null,
      };
    },
    methods: {
      async substituteAttacks() {
        try {
          const token = JSON.parse(localStorage.getItem('playerData')).token;
  
          const response = await this.$axios.patch(
            `https://balandrau.salle.url.edu/i3/players/attacks/${this.equipId}/${this.unequipId}`,
            {},
            {
              headers: {
                Bearer: `${token}`,
              },
            }
          );
  
          if (response.status === 200) {
            this.successMessage = 'Attack substitution succeeded';
          } else {
          }
        } catch (error) {
          const errorMessage = error.response.data.error.message;
          this.error = `Error substituting attacks: ${errorMessage}`;
        }
      },
    },
  };
  </script>
