import { createRouter, createWebHistory } from 'vue-router'
import HomeVue from '../pages/HomeVue.vue'
import Coctail from '../pages/CoctailPage.vue'
import CoctailRandom from '../pages/CoctailRandom.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeVue
    },
    {
      path: '/coctail/123:rid',
      name: 'Coctail',
      component: Coctail
    },
    {
      path: '/coctailRandom/123:rid',
      name: 'CoctailRandom',
      component: CoctailRandom
    }
  ]
})

export default router
