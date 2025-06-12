import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProductPage from '@/views/ProductPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      alias:['/','/home']
    },
    {
      path: '/product/:id',
      name: 'productPage',
      component: ProductPage,

    },

  ],
})

export default router
