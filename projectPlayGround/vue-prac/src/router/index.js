import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Reactive from '../views/Reactive.vue';
import TestAsync from '../views/TestAsync';

Vue.use(VueRouter);

const routes = [

  {
    path: '/TestVuex',
    name: 'TestVuex',
    component: () => import('@/views/TestVuex')
  },
  {
    path: '/TestAsync',

    name: 'TestAsync',
    component: TestAsync
  },
  {
    path: '/reactive',
    name: 'reactive',
    component: Reactive
  },
  {
    path: '/Home',
    alias: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
