import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Archive from './views/Archive.vue';
import Post from './views/Post.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import( './views/About.vue'),
    },
    {
      path: '/archive',
      name: 'archive',
      component: { render: (h) => h('router-view') },
      children: [
        {
          path: '',
          component: Archive,
        },
        {
          path: ':id',
          component: Post,
        },
      ],
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./views/Contact.vue'),
    },
  ],
});
