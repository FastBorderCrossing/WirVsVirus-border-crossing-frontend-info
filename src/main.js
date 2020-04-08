import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
// import Home from "./components/Home";
// import NotFound from "./components/NotFound";
// import AboutUs from "./components/AboutUs";
// import Solution from "./components/Solution";
// import Architecture from "./components/Architecture";
// import Team from "./components/Team";
// import Contact from "./components/Contact";
import VueScrollTo from 'vue-scrollto';
import VueI18n from 'vue-i18n';
import router from "./router";
import content from './content';
Vue.use(VueScrollTo)

Vue.use(VueRouter);

// const router = new VueRouter({
//     routes: [{
//             path: '/',
//             name: 'home',
//             component: Home
//         },
//         {
//             path: '/about',
//             name: 'about',
//             component: AboutUs
//         },
//         {
//             path: '/solution',
//             name: 'solution',
//             component: Solution
//         },
//         {
//             path: '/architecture',
//             name: 'architecture',
//             component: Architecture
//         },
//         {
//             path: '/team',
//             name: 'team',
//             component: Team
//         },
//         {
//             path: '/contact',
//             name: 'contact',
//             component: Contact
//         },
//         {
//             path: '*',
//             name: 'notFound',
//             component: NotFound,
//         }
//     ],
//     mode: 'history',
// });

Vue.use(VueI18n);
export const i18n = new VueI18n({
    locale: 'de',
    fallbackLocale: 'de',
    messages: content
});


Vue.config.productionTip = false;

new Vue({
    router,
    i18n,
    render: h => h(App),
}).$mount('#app');