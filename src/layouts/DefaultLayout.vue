<template>
  <v-app-bar app :elevation="2">
    <v-app-bar-nav-icon />
    <v-app-bar-title>Application Bar</v-app-bar-title>
    <v-spacer />
    <v-btn icon="mdi-heart" />
    <v-btn icon="mdi-magnify" />
    <v-btn icon="mdi-dots-vertical" />
  </v-app-bar>
  <v-main>
    <router-view />
  </v-main>
  <v-footer class="d-flex flex-column" color="teal" rounded="lg">
    <div class="d-flex w-100 align-center px-4 py-2">
      <strong>Get connected with us on social networks!</strong>

      <div class="d-flex ga-2 ms-auto">
        <v-btn v-for="icon in icons" :key="icon" :icon="icon" size="small" variant="plain"></v-btn>
      </div>
    </div>

    <div class="px-4 py-2 bg-surface-variant text-center w-100 rounded-lg">
      {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
    </div>
  </v-footer>
</template>

<script setup lang="ts">

const icons = [
  'mdi-facebook',
  'mdi-twitter',
  'mdi-linkedin',
  'mdi-instagram',
]
</script>

<style lang="scss" scoped></style>