import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import './assets/scss/main.scss';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import VueScrollTo from 'vue-scrollto';
import VueI18n from 'vue-i18n';
import router from "./router";
import content from './content';

Vue.use(VueScrollTo)
Vue.use(VueRouter);

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