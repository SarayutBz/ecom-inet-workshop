<template>
  <div class="card-box ma-3">
    <v-row>
      <v-col v-for="item in product" :key="item.id" cols="12" sm="3">
        <router-link class="link-to" :to="{ name: 'ProductPage', params: { id: item.id } }">
          <v-card class="mx-auto" max-width="344">
            <v-img height="200px" :src="item.image" cover></v-img>

            <v-card-title>
              {{ item.title }}
            </v-card-title>

            <v-card-subtitle>
              {{ item.price }} $
            </v-card-subtitle>
          </v-card>
        </router-link>
      </v-col>
    </v-row>

  </div>

</template>



<script setup lang="ts">
import productApi from '@/services/api/features/product.ts'
import { type Product } from '@/models/product'
import { onMounted, ref } from 'vue'

const product = ref<Product[] | null>(null)
async function getProduct() {
  const response = await productApi.getAll<Product[]>()
  product.value = response
  console.log(product.value)
}

onMounted(() => {
  // ยิง API Get Product by ID
  getProduct()
})

</script>

<style scoped>
.card-box {
  cursor: pointer;
}
.link-to{
  list-style: none;
  text-decoration:none;
}
</style>
