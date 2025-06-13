<template>
  <div>
    <v-container v-if="Carts.length !== 0">
      <v-row>

        <!--? ก้อนสินค้า -->
        <v-col cols="12" md="8">
          <v-card v-for="Cart in Carts" :key="Cart.id" class="mb-4 pa-4" color="#fff" border="opacity-50 sm">
            <v-container>
              <v-row class="d-flex align-center" dense>
                <v-col cols="12" sm="5" md="4" class="d-flex justify-center">
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
                    <b>Category:</b> {{ Cart.category }}
                  </v-card-subtitle>

                  <v-card-subtitle>
                    <b>Rating:</b> {{ Cart.rating.rate }}
                  </v-card-subtitle>

                  <v-card-subtitle>
                    <b>Stock:</b> {{ Cart.rating.count }}
                  </v-card-subtitle>

                  <v-card-subtitle>
                    <b>Price:</b> {{ Cart.price }}
                  </v-card-subtitle>

                  <div class="d-flex align-center ga-4 mt-4 flex-wrap">
                    <v-text-field class="w-15" v-model="Cart.quantity" type="number" readonly>
                      <template v-slot:prepend>
                        <v-icon class="btn-click" @click="removeNumber(Cart)" color="black">
                          mdi-minus
                        </v-icon>
                      </template>
                      <template v-slot:append>
                        <v-icon class="btn-click" @click="addNumber(Cart)" color="black">
                          mdi-plus
                        </v-icon>
                      </template>
                    </v-text-field>

                    <v-btn prepend-icon="mdi-trash-can" color="error" @click="removeCart(Cart.id)" variant="outlined">
                      ลบสินค้า
                    </v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>

        <!-- ? ก้อน ราคารวมสินค้า -->
        <v-col cols="12" md="4" class="">
          <v-card class="pa-4">
            <v-card-title>ราคาสินค้าทั้งหมด</v-card-title>
            <v-card-subtitle>
              คุณมีสินค้าในตะกร้า {{ Carts.length }} ชิ้น
            </v-card-subtitle>
            <v-card-text>
              ราคารวมทั้งหมด <b>{{ totalPrice }}</b> บาท
            </v-card-text>
            <v-btn color="success" variant="outlined">
              ชำระเงิน
            </v-btn>
          </v-card>
        </v-col>

      </v-row>
    </v-container>

    <v-main v-else class="text-center">
      <p>ไม่มีสินค้าอยู่ในตระกล้า กรุณาเลือกสินค้า</p>
    </v-main>
  </div>
</template>


<script setup lang="ts">
import { useCartStore } from '@/plugins/stores/cart';
const CartStore = useCartStore()
const Carts = CartStore.$state.carts
const totalPrice = computed(() => CartStore.getSumPrice());

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
