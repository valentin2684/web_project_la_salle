<!--
  We only create the navigation for the actual needed page.
  We user will login on "/" and doesn't need to go back to this page.
  When we delete a user account, it should redirect to the account creation "/" automaticly.
-->

<template>
  <header>
    <nav class="navbar bg-body-tertiary d-flex justify-content-evenly">
      <router-link class="navbar-brand" to="/page1">1. account</router-link>
      <router-link class="navbar-brand" to="/page2">2. shop</router-link>
      <router-link class="navbar-brand" to="/page3">3. game</router-link>
    </nav>
  </header>
</template>