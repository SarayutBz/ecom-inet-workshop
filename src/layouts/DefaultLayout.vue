<template>
<HeaderNav/>
  <v-main>
    <router-view />
  </v-main>

 <FooterBar/>
</template>

<script setup lang="ts">

import HeaderNav from '@/components/HeaderNav.vue';
import FooterBar from '@/components/FooterBar.vue';


</script>

<style lang="scss" scoped></style>
