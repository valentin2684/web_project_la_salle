<!-- secret admin page to see API status -->

<template>
    <PingComponent />
</template>
  
  <script>
  import PingComponent from '../components/API_call_Ping.vue';
  
  export default {
    components: {
      PingComponent
    }
  };
  </script>
