import Vue from 'vue';
import {
  KinesisAudio, KinesisContainer, KinesisDistance, KinesisElement, KinesisScroll,
} from 'vue-kinesis';
import SequentialEntrance from 'vue-sequential-entrance';
import 'vue-sequential-entrance/vue-sequential-entrance.css';
import 'bootstrap/dist/css/bootstrap.css';
import VueBootsrap from 'bootstrap-vue';
import Notification from 'vue-notification';
import velocity from 'velocity-animate';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(Notification, { velocity });
Vue.use(KinesisAudio, KinesisContainer, KinesisDistance, KinesisElement, KinesisScroll);
Vue.use(SequentialEntrance);

Vue.use(VueBootsrap);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
