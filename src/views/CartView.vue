<template>
  <div>

    <v-main class="ma-3" v-if="Carts.length != 0">
      <v-card color="#ffff" class="pa-4" v-for="Cart in Carts" :key="Cart.id" border="opacity-50 sm">
        <v-container>
          <v-row class="d-flex align-center" dense>
            <v-col cols="1" sm="5" md="4" class="d-flex justify-center">
              <v-img :src="Cart.image" max-width="100%" max-height="200" contain alt="product image" />
            </v-col>

            <v-col cols="12" sm="7" md="8">
              <v-card-title class="text-h5">
                {{ Cart?.title }}
              </v-card-title>

              <v-card-subtitle class="text-wrap mb-3">
                {{ Cart.description }}
              </v-card-subtitle>

              <v-card-subtitle>
                <b>Category: </b> {{ Cart.category }}
              </v-card-subtitle>

              <v-card-subtitle>
                <b>Rating: </b> {{ Cart.rating.rate }}
              </v-card-subtitle>

              <v-card-subtitle>
                <b>Stock: </b> {{ Cart.rating.count }}
              </v-card-subtitle>

              <div class="d-flex align-center ga-4 mt-4" style="flex-wrap: wrap; " col="6">

                <v-text-field class="px-5 mt-4 mb-2 w-15" v-model="Cart.quantity" type="number" readonly>
                  <template v-slot:append>
                    <v-icon class="btn-click" @click="addNumber(Cart)" color="black">mdi-plus</v-icon>
                  </template>
                  <template v-slot:prepend>
                    <v-icon class="btn-click" @click="removeNumber(Cart)" color="black">mdi-minus</v-icon>
                  </template>
                </v-text-field>

                <v-btn prepend-icon="mdi-trash-can" color="error" @click="removeCart(Cart.id)" variant="outlined">
                  ลบสินค้า
                </v-btn>

              </div>



              <!-- <div class="px-5 mt-4 mb-2 w-25">
                <v-select label="จำนวนสินค้า" :items="Array.from({ length: Cart.rating.count }, (_, i) => i + 1)"
                  v-model="Cart.quantity" />

              </div> -->

            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-main>

    <v-main v-else class="text-center">
      <p>ไม่มีสินค้าอยู่ในตระกล้า กรุณาเลือกสินค้า</p>
    </v-main>
    <!-- <button @click="clickTest">click</button> -->
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '@/plugins/stores/cart';

const CartStore = useCartStore()
const Carts = CartStore.$state.carts

// let counter = ref(Number(Carts.quantity))
// const test = CartStore.$state.carts
const addNumber = (product) => {
  CartStore.increaseQuantity(product.id)
}
const removeNumber = (product) => {
  CartStore.decreaseQuantity(product.id)
}
const removeCart = (CartId) => {
  CartStore.removeCart(CartId)
}



</script>

<style scoped>
.btn-click {
  cursor: pointer;
}
</style>
