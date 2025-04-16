import { createRouter, createWebHistory } from 'vue-router'

import Banner from '../components/Banner.vue';
import SolarDeckView from '../views/SolarDeckView.vue';
import InlandView from '../views/InlandView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Banner,
    },
    {
      path: '/en/solardeck',
      name: 'solardeck',
      component: SolarDeckView,
    },
    {
      path: '/en/inland',
      name: 'inland',
      component: InlandView,
    }
  ]
  
})


export default router
