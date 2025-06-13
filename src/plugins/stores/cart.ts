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
  price: number;
  totalPrice: number;
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
        existing.totalPrice = existing.quantity * existing.price;
      } else {
        this.carts.push({
          ...newProduct,
          totalPrice: newProduct.quantity * newProduct.price,
        });
      }
    },

    increaseQuantity(productId: number | string) {
      const product = this.carts.find((item) => item.id === productId);
      if (product && product.quantity < product.rating.count) {
        product.quantity += 1;
        product.rating.count -= 1;
        product.totalPrice = product.quantity * product.price;
      }
    },
    decreaseQuantity(productId: number | string) {
      const product = this.carts.find((item) => item.id === productId);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
        product.rating.count += 1;
        product.totalPrice = product.quantity * product.price;
      }
    },
    removeCart(CartId: number | string) {
      // const product = this.carts.find(item => item.id === productId)
      const index = this.carts.findIndex((item) => item.id === CartId);
      console.log("index : ", index);
      if (index !== -1) {
        this.carts.splice(index, 1);
      }
    },
    getSumPrice(): number {
      return this.carts.reduce((sum, item) => sum + (item.totalPrice || 0), 0);
    },
  },
});
