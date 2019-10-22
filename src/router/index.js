import Vue from 'vue';
import VueRouter from 'vue-router';

import whoAMi from '../views/aboutMe.vue';
import contact from '../views/contact.vue';
import moreAbout from '../views/moreAbout.vue';
import portfolio from '../views/portfolio.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  { path: '/', name: 'aboutMe', component: whoAMi },
  { path: '/moreAbout', name: 'moreAbout', component: moreAbout },
  { path: '/portfolio', name: 'Portfolio', component: portfolio },
  { path: '/contact', name: 'Contact', component: contact },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
