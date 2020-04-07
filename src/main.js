import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import AboutUs from "./components/AboutUs";
import Solution from "./components/Solution";
import Architecture from "./components/Architecture";
import Team from "./components/Team";
import Contact from "./components/Contact";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: AboutUs
    },
    {
      path: '/solution',
      name: 'solution',
      component: Solution
    },
    {
      path: '/architecture',
      name: 'architecture',
      component: Architecture
    },
    {
      path: '/team',
      name: 'team',
      component: Team
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
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
