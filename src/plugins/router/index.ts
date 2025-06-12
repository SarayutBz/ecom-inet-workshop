import { createRouter, createWebHistory } from 'vue-router'

import ProductPage from '@/views/ProductPage.vue'
import CartView from '@/views/CartView.vue'
import { useAuthStore } from "@/plugins/stores/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/auth/login'
    },
    {
      path: '/auth',
      component: () => import('@/layouts/BlankLayout.vue'),
      meta: { requireAuth: false },
      children: [
        {
          path: 'login',
          name: 'Login',
          component: () => import('@/views/LoginView.vue'),
        },
        {
          path: 'notfound',
          name: 'NotFound',
          component: () => import('@/views/NotFoundView.vue'),
        },
      ],
    },
    {
      path: '/app',
      component: () => import('@/layouts/DefaultLayout.vue'),
      meta: { requireAuth: true },
      children: [
        {
          path: 'home',
          name: 'home-auth',
          component: () => import('@/views/HomeView.vue'),
        },
        {
          path: 'product/:id',
          name: 'ProductPage',
          component: ProductPage,
        },
        {
          path: 'cart',
          name: 'cart',
          component: CartView,
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/auth/notfound',
    },
  ],
})


// Auth Guard
router.beforeEach((to, from, next) => {
  const auth = useAuthStore()

  if (to.meta.requireAuth && !auth.isLoggedIn) {
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router
