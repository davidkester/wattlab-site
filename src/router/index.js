import { createRouter, createWebHistory } from 'vue-router'

import Banner from '../components/Banner.vue';
import SolarDeckView from '../views/SolarDeckView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Banner,
    },
    {
      path: '/solardeck',
      name: 'solardeck',
      component: SolarDeckView,
    }
  ]
  
})


export default router
