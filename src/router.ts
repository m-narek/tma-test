import { createRouter, createWebHistory } from 'vue-router';
import Layout from '@/components/Layout.vue';
import Home from '@/pages/index.vue';

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
