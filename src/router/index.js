import { createRouter, createWebHistory } from 'vue-router'

import Banner from '../components/Banner.vue';
import SolarDeckView from '../views/SolarDeckView.vue';
import InlandView from '../views/InlandView.vue';
import Newsroom from '../views/Newsroom.vue';
import NewsroomArticleView from '../views/NewsroomArticleView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Banner,
    },{
      path: '/en/solardeck',
      name: 'solardeck',
      component: SolarDeckView,
    },{
      path: '/en/inland',
      name: 'inland',
      component: InlandView,
    },{
      path: '/:lang?/newsroom',
      name: 'newsroom',
      component: Newsroom,
    },{
      path: '/:lang?/newsroom/:year?/:month?/:title',
      name: 'newsroom-article',
      component: NewsroomArticleView,
    }
  ]
  
})


export default router
