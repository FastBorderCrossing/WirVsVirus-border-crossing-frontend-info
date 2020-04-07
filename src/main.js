import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import NotFound from "./components/NotFound";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '*',
      name: 'notFound',
      component: NotFound,
    }
  ],
  mode: 'history',
});


Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
