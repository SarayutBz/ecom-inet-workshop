<template>
  <v-container class="fill-height d-flex justify-center align-center">
    <v-card width="500" class="pa-4">
      <v-card-title class="text-h5 text-center">ยืนยันการชำระเงิน</v-card-title>
      <v-card-text>
        <div class="text-body-1 mb-4">
          รายละเอียดสินค้าในตะกร้า
        </div>

        <v-list style="background-color: ghostwhite; border-radius: 5px;">
          <v-list-item v-for="Cart in Carts" :key="Cart.id">
            <v-list-item-content>
              <v-list-item-title>
                {{ Cart.title }}
              </v-list-item-title>
              <v-list-item-subtitle>
                จำนวน: {{ Cart.quantity }} | ราคาต่อชิ้น: {{ Cart.price }} บาท |
                ราคารวม: {{ Cart.price * Cart.quantity }} บาท
              </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-avatar>
              <v-img :src="Cart.image" max-width="100%" max-height="100" contain alt="product image" /> 
            </v-list-item-avatar>
          </v-list-item>

          <v-divider class="my-2"></v-divider>

          <v-list-item>
            <v-list-item-title class="font-weight-bold">
              รายการทั้งหมด: {{ Carts.length }} รายการ
            </v-list-item-title>
            <v-list-item-subtitle class="font-weight-bold">
              ราคารวมทั้งหมด: {{ totalPrice }} บาท
            </v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </v-card-text>

      <v-card-actions class="d-flex justify-end">
          <v-btn class="btn-payment" variant="elevated" @click="checkout">ยืนยันการชำระเงิน</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { computed } from 'vue'
import { useCartStore } from '@/plugins/stores/cart'

const router = useRouter()
const CartStore = useCartStore()
const Carts = CartStore.$state.carts
const totalPrice = computed(() => CartStore.getSumPrice());



function checkout() {
  alert('ชำระเงินเรียบร้อยแล้ว!')
  CartStore.clearCart()
  router.push('/app/home')
}
</script>

<style lang="scss" scoped>
.btn-payment {
  background-color: $success;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 5px;
}
</style>