<template>
  <v-main class="ma-3">
    <v-card color="#ffff" v-if="product" class="pa-4">
      <v-container>
        <v-row class="d-flex align-center" dense>
          <v-col cols="12" sm="5" md="4" class="d-flex justify-center">
            <v-img :src="product.image" max-width="100%" max-height="300" contain alt="product image" />
          </v-col>

          <v-col cols="12" sm="7" md="8">
            <v-card-title class="text-h5">
              {{ product?.title }}
            </v-card-title>

            <v-card-subtitle class="text-wrap mb-3">
              {{ product.description }}
            </v-card-subtitle>

            <v-card-subtitle>
              <b>Category: </b> {{ product.category }}
            </v-card-subtitle>

            <v-card-subtitle>
              <b>Rating: </b> {{ product.rating.rate }}
            </v-card-subtitle>

            <v-card-subtitle>
              <b>Stock: </b> {{ product.rating.count }}
            </v-card-subtitle>

            <v-card-actions class="mt-4" >
              <v-btn size="small" variant="outlined" @click="handleAddProduct(product)">Add Cart</v-btn>
            </v-card-actions>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-main>
</template>

<script setup lang="ts">
import productApi from "@/services/api/features/product.ts";
import { type Product } from "@/models/product";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useCartStore } from '@/plugins/stores/cart'

const CartStore = useCartStore()


function handleAddProduct(prodcut) {
   CartStore.addProduct({ ...prodcut })
}
const route = useRoute();
const product = ref<Product | null>(null);

async function getById() {
  try {
    const response = await productApi.getById<Product>(route.params.id as string);
    product.value = response;
  } catch (error) {
    console.error("Failed to fetch product by ID:", error);
  }
}


onMounted(() => {
  getById();
});
</script>
