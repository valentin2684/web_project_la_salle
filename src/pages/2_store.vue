<template>
    <div>
        <!-- redirection to all the pages -->
      <MenuComponent />
      <h1 class="d-flex justify-content-center h1">we are at "the store" page</h1>


      <div>
      <br/><h2 class="flex justify-center h2">sellable items:</h2><br/>
      <div v-for="(price, weaponName) in playerData.weapon" :key="weaponName">
        <p>{{ weaponName }}: {{ price }}€</p>
      </div>
      </div>

      <div>
        <br/><br/><h2 class="flex justify-center h2">buyable items:</h2><br/>
        <p>weapon4: 50€</p>
        <p>weapon5: 60€</p>
      </div>

    </div>

    <footer>

      <p>order list</p>
      <ol>
        <li>a</li>
        <li>b</li>
        <li>c</li>
      </ol>

      <p>unorder list</p>
      <ul>
        <li>a</li>
        <li>b</li>
        <li>c</li>
      </ul>

    </footer>
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
  }
  };
  </script>
