<template>
    <div>
        <!-- redirection to all the pages -->
      <MenuComponent />
      <h1 class="d-flex justify-content-center h1">we are at "looking for game" page</h1>

      <div class=""> <!-- game creation + finder -->
      <div class="grid-container">
        <div clas="grid-item"> <!-- game creation -->
          <h2 class="flex justify-center h2">Create a game</h2><br/><br/>

          <p>number of rows:</p>
          <input value="10" class="form-control"/><br/><br/>

          <p>number of columns:</p>
          <input value="10" class="form-control"/><br/><br/>

          <p>player HP:</p>
          <input value="5" class="form-control"/><br/><br/>

          <router-link class="navbar-brand btn btn-light" to="/page3_1">create new game</router-link>
        </div>

        <div class="grid-item bg-cyan-100"> <!-- game finder -->
          <h2 class="flex justify-center h2">Game finder</h2><br/><br/>

          <div>
            <p>Lobby 1, waiting for player</p>
            <button class="btn btn-primary">Join</button>
          </div><br/>

          <div>
            <p>Lobby 2, waiting for player</p>
            <button class="btn btn-primary">Join</button>
          </div><br/>

          <div>
            <p>Lobby 3, finish</p>
            <button class="btn btn-primary">View stat</button>
          </div><br/>
      </div>
    </div>
    </div>

    </div>
  </template>
  
  <script>
  import MenuComponent from '../components/menu.vue';
  
  export default {
    components: {
      MenuComponent
    }
  };
  </script>
