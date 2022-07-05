import { DEFAULT_LAYOUT } from '@/router/constans';

export default {
  path: '/demandControl',
  name: 'demandControl',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.demandControl',
    requiresAuth: true,
    order: 0,
  },
  children: [
    {
      path: 'demand',
      name: 'demand',
      component: () => import('@/views/demands/demand-list/index.vue'),
      meta: {
        locale: 'menu.demand',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'baseline',
      name: 'baseline',
      component: () => import('@/views/demands/baseline-list/index.vue'),
      meta: {
        locale: 'menu.baseline',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};
