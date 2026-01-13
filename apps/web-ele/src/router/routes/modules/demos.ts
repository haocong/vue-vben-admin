import type { RouteRecordRaw } from 'vue-router';

import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'ic:baseline-view-in-ar',
      keepAlive: true,
      order: 1000,
      title: $t('demos.title'),
    },
    name: 'Demos',
    path: '/demos',
    children: [
      {
        meta: {
          title: $t('demos.elementPlus'),
        },
        name: 'NaiveDemos',
        path: '/demos/element',
        component: () => import('#/views/demos/element/index.vue'),
      },
      {
        meta: {
          title: $t('demos.form'),
        },
        name: 'BasicForm',
        path: '/demos/form',
        component: () => import('#/views/demos/form/basic.vue'),
      },
      {
        meta: {
          icon: () => null,
          title: '子应用',
        },
        name: 'MicroAppRoot',
        path: '/demos/microapp',
        children: [
          {
            meta: {
              title: 'vue3',
              link: '/demos/microapp/vue3', // 指定菜单链接
              activePath: '/demos/microapp/vue3', // 添加激活路径，解决菜单高亮问题
            },
            name: 'MicroAppVue3',
            path: '/demos/microapp/vue3/:pathMatch(.*)*',
            component: () =>
              import('#/micro-app/components/SubAppContainer.vue'),
          },
        ],
      },
    ],
  },
];

export default routes;
