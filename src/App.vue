<template>
  <div id="app">
    <!-- Company Logo -->
    <img src="@/assets/images/logo_TC.svg" alt="True Capture Logo" class="logo">

    <!-- Navigation Bar -->
    <NavBar />

    <!-- Page Content -->
    <router-view />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}

.logo {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 100px;
}

/* Placeholder colors, to be updated with the company color palette */
:root {
  --primary-color: $primary-color;; /* Placeholder */
  --hover-color: $hover-color;   /* Placeholder */
}
</style>
