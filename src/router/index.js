import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '@/components/Login_display.vue';
import MainDisplay from '@/components/MainDisplay/MainDisplay.vue';
import PlayDisplay from '@/components/PlayDisplay/PlayDisplay.vue';
import GameSection from '@/components/GameSection/GameSection.vue';
import GameTutorial from '@/components/GameTutorial/GameTutorial.vue';

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
    path: '/play',
    name: 'PlayDisplay',
    component: PlayDisplay,
  },
  {
    path: '/game',
    name: 'GameSection',
    component: GameSection,
  },
  {
    path: '/tutorial',
    name: 'GameTutorial',
    component: GameTutorial,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
