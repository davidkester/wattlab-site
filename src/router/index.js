import { createRouter, createWebHistory } from 'vue-router'

import Banner from '../components/Banner.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Banner,
    }
  ]
  
})


export default router
