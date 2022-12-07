import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('../views/DetailView.vue'),
    },
    {
      path: '/edit',
      name: 'edit',
      meta: {
        hiddenFooter: true
      },
      component: () => import('../views/EditView.vue'),
    },
  ],
})

export default router
