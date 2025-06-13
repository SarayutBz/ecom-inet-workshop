
import { defineStore } from 'pinia'

export interface Product {
  id: number | string
  title: string
  description: string
  category: string
  image: string
  quantity:number
  rating: {
    rate: number
    count: number
  }
  price?: number
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    carts: [] as Product[],

  }),
  actions: {
    addProduct(newProduct: Product) {
      this.carts.push(newProduct)
      console.log(this.carts)
    }
  }
})
