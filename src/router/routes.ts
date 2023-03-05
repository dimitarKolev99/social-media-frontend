import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('pages/login/LoginPage.vue'),
    meta: { disallowAuthed: true },
    // children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/app',
    component: () => import('pages/IndexPage.vue'),
    children: [
      { path: '', component: () => import('components/Feed.vue') },
      { path: '/profile', component: () => import('components/Profile.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
