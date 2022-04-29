import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '@/components/Login_display.vue';
import MainDisplay from '@/components/MainDisplay/MainDisplay.vue';
import GameSection from '@/components/GameSection/GameSection.vue';
import EasyLevel from '@/components/GameLevels/EasyLevel.vue';
import NormalLevel from '@/components/GameLevels/NormalLevel.vue';
import HardLevel from '@/components/GameLevels/HardLevel.vue';

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
  {
    path: '/game/easy',
    name: 'EasyLevel',
    component: EasyLevel,
  },
  {
    path: '/game/normal',
    name: 'NormalLevel',
    component: NormalLevel,
  },
  {
    path: '/game/hard',
    name: 'HardLevel',
    component: HardLevel,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
