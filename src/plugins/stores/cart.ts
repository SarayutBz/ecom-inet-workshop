import { defineStore } from "pinia";

export interface Product {
  id: number | string;
  title: string;
  description: string;
  category: string;
  image: string;
  quantity: number;
  rating: {
    rate: number;
    count: number;
  };
  price?: number;
}

export const useCartStore = defineStore("cart", {
  state: () => ({
    carts: [] as Product[],
  }),
  actions: {
    addProduct(newProduct: Product) {
      const existing = this.carts.find((item) => item.id === newProduct.id);
      if (existing) {
        existing.quantity += newProduct.quantity;
      } else {
        this.carts.push({ ...newProduct });
      }
      console.log(this.carts);
    },
    increaseQuantity(productId: number | string) {
      const product = this.carts.find((item) => item.id === productId);
      if (product && product.quantity < product.rating.count) {
        product.quantity += 1;
        product.rating.count -= 1;
      }
    },
    decreaseQuantity(productId: number | string) {
      const product = this.carts.find((item) => item.id === productId);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
        product.rating.count += 1;
      }
    },
    removeCart(CartId: number | string) {
      // const product = this.carts.find(item => item.id === productId)
      const index = this.carts.findIndex((item) => item.id === CartId);
      if (index !== -1) {
        this.carts.splice(index, 1);
      }
    },
  },
});
