<template>
  <div>

    <CarouselBar/>
    <v-main class="ma-3">
      <!-- {{ product?.image }} -->
      <v-card color="#ffff" v-if="product">
        <div class="d-flex flex-no-wrap justify-space-between w-50 ga-15">
          <v-avatar class="ma-3" rounded="0" size="300">
            <v-img :src="product.image"></v-img>
          </v-avatar>
          <div>
            <v-card-title class="text-h5">
              <p>{{ product?.title }}</p>
            </v-card-title>

            <v-card-subtitle class="text-wrap">
              <p>{{ product.description }}</p>
            </v-card-subtitle>
            <v-card-subtitle>
              <p><b>{{ product.category }} </b></p>
            </v-card-subtitle>
            <v-card-subtitle>
              <p><b>rating : {{ product.rating.rate }}</b></p>
            </v-card-subtitle>
            <v-card-subtitle>
              <p><b>stock : {{ product.rating.count }}</b></p>
            </v-card-subtitle>

            <v-card-actions>
              <v-btn class="ms-2" size="small" text="Add Cart" variant="outlined"></v-btn>
            </v-card-actions>
          </div>


        </div>
      </v-card>

    </v-main>


  </div>
</template>

<script setup lang="ts">

import CarouselBar from '@/components/CarouselBar.vue';
import productApi from "@/services/api/features/product.ts";
import { type Product } from "@/models/product";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";


const route = useRoute()
const product = ref<Product | null>(null);
async function getById() {
  try {
    const response = await productApi.getById<Product>(route.params.id as string);
    product.value = response;

    console.log(product.value);
  } catch (error) {
    console.error("Failed to fetch product by ID:", error);
  }
}

onMounted(() => {
  // ยิง API Get Product by ID
  getById();
});
</script>

<style scoped></style>
