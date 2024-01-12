<!-- "game" page with every interaction dedicated to the game itself -->

<template>
      <MenuComponent />

      <h1 class="d-flex justify-content-center h1">we are at "looking for game" page</h1>

      <div class="row">
        <h2 class="d-flex justify-content-center h2">Game browser</h2>
        <div class="col-12 col-md-6">
          <API_call_GetGameInfo />
        </div>

        <div class="col-12 col-md-6 inside_grid_medium">
          <API_call_GetAllGames />
        </div>
        
      </div>

      <div class="row">
        <div class="col-12 col-md-6">
          <div class="col-12 col-md-6">
            <API_call_EnterGame />
          </div>

          <div class="col-12 col-md-6">
            <API_call_LeaveGame />
          </div>
        </div>
        
        <div class="col-12 col-md-6">
          <div>
            <API_call_CreateGame />
          </div>

          <div>
            <API_call_GetGameLogs />
          </div>
        </div>

        
      </div>

      <div class="row">

        <h2 class="d-flex justify-content-center h2">The game</h2>

        <div class="inside_grid_medium col-12 col-md-6">
          <API_call_GetCurrentGame />
        </div>

        <div class="col-12 col-md-6">
          <div class="col">
          <API_call_ManagePlayerMovement />
          </div>

          <div class="col">
            <API_call_ChangeDirection />
          </div>

          <div class="col">
            <API_call_AttackInGame />
          </div>
        </div>
      </div>
    
  </template>
  
  <script>
  import MenuComponent from '../components/menu.vue';
  import API_call_GetAllGames from '../components/API_call_GetAllGames.vue';
  import API_call_CreateGame from '../components/API_call_CreateGame.vue';
  import API_call_GetGameInfo from '../components/API_call_GetGameInfo.vue';
  import API_call_GetCurrentGame from '../components/API_call_GetCurrentGame.vue';
  import API_call_LeaveGame from '../components/API_call_LeaveGame.vue';
  import API_call_EnterGame from '../components/API_call_EnterGame.vue';
  import API_call_GetGameLogs from '../components/API_call_GetGameLogs.vue';
  import API_call_ManagePlayerMovement from '../components/API_call_ManagePlayerMovement.vue';
  import API_call_ChangeDirection from '../components/API_call_ChangeDirection.vue';
  import API_call_AttackInGame from '../components/API_call_AttackInGame.vue';
  
  export default {
    components: {
      MenuComponent,
      API_call_GetAllGames,
      API_call_CreateGame,
      API_call_GetGameInfo,
      API_call_GetCurrentGame,
      API_call_LeaveGame,
      API_call_EnterGame,
      API_call_GetGameLogs,
      API_call_ManagePlayerMovement,
      API_call_ChangeDirection,
      API_call_AttackInGame,
    }
  };
  </script>
