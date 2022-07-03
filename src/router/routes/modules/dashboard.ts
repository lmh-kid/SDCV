import { DEFAULT_LAYOUT } from '@/router/constans';

export default {
  path: '/dashboard',
  name: 'dashboard',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.dashboard',
    requiresAuth: true,
    icon: 'icon-dashboard',
    order: 0,
  },
  children: [
    {
      path: 'demand',
      name: 'demand',
      component: () => import('@/views/demand/index.vue'),
      meta: {
        locale: 'menu.demand',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'workplace',
      name: 'Workplace',
      component: () => import('@/views/dashboard/workplace/index.vue'),
      meta: {
        locale: 'menu.dashboard.workplace',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};
