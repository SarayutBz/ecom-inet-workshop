<template>

    <HeaderNav />
    <CarouselBar />

    <v-main>
      <ProductCard  />
    </v-main>

    <FooterBar />


</template>

<script setup lang="ts">
import HeaderNav from '@/components/HeaderNav.vue'
import FooterBar from '@/components/FooterBar.vue'
import CarouselBar from '@/components/CarouselBar.vue';
import ProductCard from '@/components/ProductCard.vue'




</script>

<style scoped></style>
