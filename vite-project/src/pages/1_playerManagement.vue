<template>
  <div>
    <!-- redirection to all the pages -->
    <MenuComponent />

    <h1 class="d-flex justify-content-center h1">we are at "account" page</h1>


    <div class="md:grid grid-cols-2 bg-sky-100"> <!-- 1. player management + backpacked -->
      <div>

        <div class="row"> <!-- 1.1 account management -->
          <h2 class="flex justify-center h2">Account management</h2>
          <div class="col-md-auto">
            <button class="btn btn-primary">join</button>
          </div>
          <div class="col-md-auto">
            <button class="btn btn-primary">delection</button>
          </div>


        </div>

        <div> <!-- 1.2 player info -->
          <h2 class="flex justify-center h2">Player info</h2>
          <p>name: {{ playerData.playerName }}</p>
          <p>photo: </p>
          <img src="../data/picture_user.png" class="rounded" alt="picture of the user profile" width="100" height="100">
          <p>experience: {{ playerData.experience }}xp</p>
          <p>level: {{playerData.level}}</p>
          <p>coins: {{playerData.coin}}€</p>
        </div>

        <div> <!-- 1.3 backpacked management-->
          <h2 class="flex justify-center h2">Backpacked info</h2>
          <p>list of all available equipment:</p>
          <div v-for="(price, weaponName) in playerData.weapon" :key="weaponName">
            <p>{{ weaponName }}: {{ price }}€</p>
          </div>
          <p>equipped attacks for the following games:</p>
          <p>{{playerData.actualWeapon}}</p>
        </div>
      </div>

      <div class="bg-orange-200"> <!-- 2. management of attack -->
        <h2 class="flex justify-center h2">Backpacked management</h2>
        <p>ability to change equipped attacks for subsequent games:</p>
        <div v-for="(price, weaponName) in playerData.weapon" :key="weaponName">
          <button class="btn btn-primary" @click="test1(weaponName)">{{weaponName}}</button>
        </div>
      </div>
    </div>

    <div class="bg-cyan-100"> <!-- game history -->
      <h2 class="flex justify-center h2">Player game history</h2>
      <p>number of game won: 50%</p>
      <p>old finished game + information about them</p>
      <br/><br/>
      <div>
        <p>game -1:</p>
        <p>game won</p>
        <p>number of move, 7</p>
        <p>money earn, 3€</p>
      </div>
      <br/><br/>
      <div>
      <p>game -2:</p>
      <p>game lost</p>
      <p>number of move, 4</p>
      <p>money earn, 0€</p>
      </div>
    </div>

  </div>
</template>

<script>
import MenuComponent from '../components/menu.vue';
import playerData from '../data/player.json';

export default {
  components: {
    MenuComponent
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
