import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./vuex/store";
import loader from "vue-ui-preloader";
import SkeletonCards from 'vue-ultimate-skeleton-cards';
import VueLazyload from 'vue-lazyload';

import './filters'

const loadimage = require('@/assets/img/no_image.jpg');
const errorimage = require('@/assets/img/no_image.jpg');

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: errorimage,
  loading: loadimage,
  attempt: 1
})

Vue.use(loader);
Vue.use(VueLazyload);
Vue.use(SkeletonCards);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
