<template>

      <MenuComponent />

      <h1 class="d-flex justify-content-center h1">we are at "the store" page</h1>

  <div class="row">
    <h2 class="d-flex justify-content-center h2">Weapon information</h2>

    <section class="col-12 col-md-6 inside_grid_medium auto_overflow_scroll">
      <API_call_GetOurAttacks />
    </section>
    
    <section class="col-12 col-md-6 overflow-scroll">
      <API_call_GetBuyableAttacks />
    </section>

  </div>

  <div class="row">

    <section class="col-12 col-md-4">
      <API_call_EquipAttack />
    </section>

    <section class="col-12 col-md-4">
      <API_call_UnequipAttack />
    </section>

    <section class="col-12 col-md-4">
      <API_call_SubstituteEquip />
    </section>

  </div>

  <div class="row">
    <h2 class="d-flex justify-content-center h2">Others</h2>

    <section class="col-12 col-md-3">
      <API_call_SellAttack />
    </section>

    <section class="col-12 col-md-3">
      <API_call_BuyAttack />
    </section>

    <section class="col-12 col-md-3">
      <API_call_CreateAttackWeapon />
    </section>

    <section class="col-12 col-md-3">
      <API_call_GetPlayerAttack />
    </section>

  </div>

  </template>
  
  <script>
  import MenuComponent from '../components/menu.vue';
  import playerData from '../data/player.json';
  import API_call_GetBuyableAttacks from '../components/API_call_GetBuyableAttacks.vue';
  import API_call_GetOurAttacks from '../components/API_call_GetOurAttacks.vue';
  import API_call_CreateAttackWeapon from '../components/API_call_CreateAttackWeapon.vue';
  import API_call_SellAttack from '../components/API_call_SellAttack.vue';
  import API_call_BuyAttack from '../components/API_call_BuyAttack.vue';
  import API_call_GetPlayerAttack from '../components/API_call_GetPlayerAttack.vue';
  import API_call_EquipAttack from '../components/API_call_EquipAttack.vue';
  import API_call_UnequipAttack from '../components/API_call_UnequipAttack.vue';
  import API_call_SubstituteEquip from '../components/API_call_SubstituteEquip.vue';
  
  export default {
    components: {
      MenuComponent,
      API_call_GetBuyableAttacks,
      API_call_GetOurAttacks,
      API_call_CreateAttackWeapon,
      API_call_SellAttack,
      API_call_BuyAttack,
      API_call_GetPlayerAttack,
      API_call_EquipAttack,
      API_call_UnequipAttack,
      API_call_SubstituteEquip,
    },
    data() {
    return {
      playerData: playerData
    };
  }
  };
  </script>
