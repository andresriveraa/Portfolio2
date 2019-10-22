import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import menuMain from './components/menu.vue';

Vue.component('Menu', menuMain);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
