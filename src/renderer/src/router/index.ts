import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Lists from '../views/Lists.vue';
import Clients from '../views/Clients.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/listas'
  },
  {
    path: '/listas',
    name: 'Lists',
    component: Lists,
  },
  {
    path: '/clientes',
    name: 'Clients',
    component: Clients
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;