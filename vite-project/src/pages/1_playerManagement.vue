<!-- the user management page. -->

<template>
  <div>
    <MenuComponent />

    <h1 class="d-flex justify-content-center h1">we are at "account" page</h1>

    <div class="row inside_grid_">
      <h2 class="d-flex justify-content-center h2">Your Account</h2>

      <section class="col-12 col-md-6">
        <API_call_GetOnePlayer />
      </section>

      <section class="col-12 col-md-6">
        <API_call_GetPlayerStatistics />
        <API_call_FinishGameOurself />
      </section>

    </div>

    <h2 class="d-flex justify-content-center h2">Account search</h2>

    <div class="row">

      <section class="col-12 col-md-6 overflow-scroll">
        <API_call_GetAllPlayers />
      </section>

      <section class="col-12 col-md-6">
        <API_call_StatisticOnePlayer />
      </section>

      <section class="col-12 col-md-6 overflow-scroll">
        <API_call_FinishSpecificPlayer />
      </section>
        
    </div>

    <h2 class="d-flex justify-content-center h2">Dangerous settings</h2>
    
    

    <API_call_DeleteUser />
    

  </div>
</template>

<script>
import MenuComponent from '../components/menu.vue';
import playerData from '../data/player.json';
import API_call_GetAllPlayers from '../components/API_call_GetAllPlayers.vue';
import API_call_GetOnePlayer from '../components/API_call_GetOnePlayer.vue';
import API_call_GetPlayerStatistics from '../components/API_call_GetPlayerStatistics.vue';
import API_call_DeleteUser from '../components/API_call_DeleteUser.vue';
import API_call_StatisticOnePlayer from '../components/API_call_StatisticOnePlayer.vue';
import API_call_FinishSpecificPlayer from '../components/API_call_FinishSpecificPlayer.vue';
import API_call_FinishGameOurself from '../components/API_call_FinishGameOurself.vue';

export default {
  components: {
    MenuComponent,
    API_call_GetAllPlayers,
    API_call_GetOnePlayer,
    API_call_GetPlayerStatistics,
    API_call_DeleteUser,
    API_call_StatisticOnePlayer,
    API_call_FinishSpecificPlayer,
    API_call_FinishGameOurself,
  },
  data() {
    return {
      playerData: playerData
    };
  },
  methods: {
    test1(newWeaponToSet){
      playerData.playerName = newWeaponToSet;
      alert("New main weapon: " + playerData.playerName)
    }
  }
};
</script>
