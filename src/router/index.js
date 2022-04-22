import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '@/components/Login_display.vue';
import MainDisplay from '@/components/MainDisplay/MainDisplay.vue';
import GameSection from '@/components/GameSection/GameSection.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
  },
  {
    path: '/main',
    name: 'MainDisplay',
    component: MainDisplay,
  },
  {
    path: '/game',
    name: 'GameSection',
    component: GameSection,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
