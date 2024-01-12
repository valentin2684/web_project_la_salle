<template>
    <section>
      <h2>Delete User</h2>
      <button @click="deleteUser" class="btn btn-primary">Delete User</button>
      <div v-if="successMessage">{{ successMessage }}</div>
      <div v-if="error" class="error-message">{{ error }}</div>
    </section>
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
      async deleteUser() {
        try {
          const token = JSON.parse(localStorage.getItem('playerData')).token;
  
          const response = await this.$axios.delete('https://balandrau.salle.url.edu/i3/players', {
            headers: {
              Bearer: `${token}`,
            },
          });
  
          if (response.status === 204) {
            this.successMessage = 'User deleted successfully';
            localStorage.removeItem('playerData');
            this.$router.push('/');
          } else {
            this.error = 'Error deleting user: Invalid response from the server';
          }
        } catch (error) {
          const errorMessage = error.response.data.error.message;
          this.error = `Error deleting user: ${errorMessage}`;
        }
      },
    },
  };
  </script>