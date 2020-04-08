import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue";
import RouterView from "./components/RouterView.vue";
import { i18n } from "./main.js";
Vue.use(Router);
export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [{
            path: "/:lang",
            component: RouterView,
            beforeEnter(to, from, next) {
                document.title = to.meta.title
                const lang = to.params.lang;
                if (!["en", "de", "fr", "es"].includes(lang)) return next("de");
                if (i18n.locale !== lang) {
                    i18n.locale = lang;
                }
                return next();
            },
            children: [{
                    path: "/",
                    name: "home",
                    component: Home,
                    meta: {
                        title: 'Fast Border Crossing',
                        // metaTags: [
                        //   {
                        //     name: 'description',
                        //     content: 'The home page of our example app.'
                        //   },
                        //   {
                        //     property: 'og:description',
                        //     content: 'The home page of our example app.'
                        //   }
                        // ]
                    }
                },
                // {
                //     path: "about",
                //     name: "about",
                //     // route level code-splitting
                //     // this generates a separate chunk (about.[hash].js) for this route
                //     // which is lazy-loaded when the route is visited.
                //     // component: () =>
                //     //     import ( /* webpackChunkName: "about" */ "./views/About.vue")
                // }
            ]
        },
        {
            path: "*",
            redirect: "/de"
        }
    ]
});