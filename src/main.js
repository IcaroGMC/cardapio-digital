import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import loader from "vue-ui-preloader";
import SkeletonCards from 'vue-ultimate-skeleton-cards';

import './filters'

Vue.use(loader);
Vue.use(SkeletonCards);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
