<template>
    <div>
      <h1 class="d-flex justify-content-center h1">API Status Page</h1>
  
      <div v-if="pingResponse">
        <p>Greeting: {{ pingResponse.greeting }}</p>
        <p>Date: {{ pingResponse.date }}</p>
        <p>URL: {{ pingResponse.url }}</p>
        <p>Headers:</p>
        <ul>
          <li v-for="(value, key) in pingResponse.headers" :key="key">{{ key }}: {{ value }}</li>
        </ul>
      </div>
  
      <div v-else>
        <p class="error-message">Error: Unable to retrieve API ping information.</p>
      </div>
    </div>
  </template>

<script>
export default {
  data() {
    return {
      pingResponse: null,
    };
  },
  async mounted() {
    try {
      const response = await this.$axios.get('https://balandrau.salle.url.edu/i3/ping');

      if (response.status === 200) {
        this.pingResponse = response.data;
      } else {
        this.pingResponse = null;
      }
    } catch (error) {
      this.pingResponse = null;
    }
  },
};
</script>