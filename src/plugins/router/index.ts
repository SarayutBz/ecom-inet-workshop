import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "@/plugins/stores/auth";
// import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView,
    // },

    {
      path: "",
      component: () => import("@/layouts/BlankLayout.vue"),
      meta: { requireAuth: false },
      children: [
        {
          path: "/login",
          name: "Login",
          component: () => import("@/views/LoginView.vue"),
        },
      ],
    },

    {
      path: "/",
      component: () => import("@/layouts/DefaultLayout.vue"),
      meta: { requireAuth: true },
      children: [
        {
          path: "home",
          name: "home",
          component: () => import("@/views/HomeView.vue"),
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  const auth = useAuthStore()

  if (to.meta.requireAuth && !auth.isLoggedIn) {
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router;
