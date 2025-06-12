<template>
  <v-app>
    <HeaderNav />
    <CarouselBar />

    <v-main>
      <ProductCard :products="product" />
    </v-main>

    <FooterBar />

  </v-app>

</template>

<script setup lang="ts">
import HeaderNav from '@/components/HeaderNav.vue'
import FooterBar from '@/components/FooterBar.vue'
import CarouselBar from '@/components/CarouselBar.vue';
import ProductCard from '@/components/ProductCard.vue'
import productApi from '@/services/api/features/product.ts'
import { type Product } from '@/models/product'
import {onMounted, ref } from 'vue'



const product = ref<Product | null>(null)
async function getProduct() {
  const response = await productApi.getAll<Product>()
  product.value = response
  console.log(product.value)
}

onMounted(() => {
  // ยิง API Get Product by ID
  getProduct()
})
</script>

<style scoped></style>
