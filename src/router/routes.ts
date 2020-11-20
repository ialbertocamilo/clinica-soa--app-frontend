import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      {
        path:'/login',
        component: () => import( 'pages/user/Login.vue')
      },
      {
        path:'/patient/list/',
        name:'patient-list',
        component: () => import( 'pages/patient/List.vue')
      },
      {
        path:'/patient/view/:id',
        name:'view-patient',
        component: () => import( 'pages/patient/View.vue')
      },
      {
        path:'/patient/new',
        name:'add-patient',
        component: () => import( 'pages/patient/Create.vue')
      },
    ]
  },
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  },
];

export default routes;
