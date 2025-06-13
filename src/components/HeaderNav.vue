<template>
  <v-app-bar app :elevation="2">
    <v-app-bar-nav-icon />
    <router-link class="link-to" to="/app/home">

      <v-app-bar-title> Home</v-app-bar-title>
    </router-link>
    <v-spacer />
    <router-link class="link-to" to="/app/cart">

      <v-btn icon="mdi-cart" />
    </router-link>
    <v-btn icon="mdi-magnify" />
    <router-link class="link-to" to="/app/profile">
      <v-btn icon="mdi-account" />
    </router-link>
    <v-btn icon="mdi-dots-vertical" />
  </v-app-bar>
</template>



<script setup lang="ts">

</script>

<style scoped>
.link-to {
  list-style: none;
  text-decoration: none;
}
</style>
