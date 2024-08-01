import { createRouter, createWebHistory } from 'vue-router';
import PageForm from './pages/PageForm.vue';
import PageAbout from './pages/PageAbout.vue';
import PageHome from './pages/PageHome.vue';

import NotFound from './pages/NotFound.vue';

const routes = [
  {
    component: PageHome,
        name: 'Home',
        path: '/'
  },
  {
    component: PageAbout,
    name: 'About',
    path: '/about'
  },
  {
    component: PageForm,
    name: 'Form',
    path: '/form'
  },
  {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
  },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // always scroll to top
        return { top: 0 }
    },
});

export { router }