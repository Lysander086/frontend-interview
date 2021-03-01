import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Reactive from '../views/Reactive.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/reactive',
    alias: '/',
    name: 'reactive',
    component: Reactive,
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((from, to, next) => {
  next();
});

export default router;
