import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '@/routes'
import App from '@/components/app/App';

Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
    routes,
    mode: 'history'
});

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
}).$mount('#app');