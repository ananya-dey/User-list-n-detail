import Vue from 'vue';
import Router from 'vue-router';
import Detail from '@/components/Detail';
import List from '@/components/List';
import Home from '@/components/Home';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: List
    },/*
    {
      path: '/users',
      name: 'List',
      component: List
    },*/
    {
      path: '/user/:id',
      name: 'Detail',
      component: Detail
    }
  ]

})
