/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file.
 */
import Bootstrap from '../views/Boostrap/Index.vue';
import Form from '../views/Form/Index.vue';
import NotFound from '../views/404/Index.vue';

import PublicLayout from '../layouts/Public.vue';
import DashboardLayout from '../layouts/Dashboard.vue';


export default [
    // Home
    // {
    //   path: '/home',
    //   name: 'home.index',
    //   component: () => import('@/views/Home/Index.vue'),
  
    //   // If the user needs to be authenticated to view this page
    //   meta: {
    //     auth: true,
    //   },
    // },
  
    // // Account
    // {
    //   path: '/account',
    //   name: 'account.index',
    //   component: () => import('@/views/Account/Index.vue'),
  
    //   // If the user needs to be authenticated to view this page.
    //   meta: {
    //     auth: true,
    //   },
    // },
  
    // // Login
    // {
    //   path: '/login',
    //   name: 'login.index',
    //   component: () => import('@/views/Login/Index.vue'),
  
    //   // If the user needs to be a guest to view this page.
    //   meta: {
    //     guest: true,
    //   },
    // },
  
    // // Register
    // {
    //   path: '/register',
    //   name: 'register.index',
    //   component: () => import('@/views/Register/Index.vue'),
  
    //   // If the user needs to be a guest to view this page.
    //   meta: {
    //     guest: true,
    //   },
    // },

    {
        path : '/bootstrap',
        component: Bootstrap
    },
    {
        path : '/form',
        component: Form
    },
    {
        path: '/layout-1',
        component: PublicLayout,
        children: [
          {
            path: '',
            component: Bootstrap,
          },
        ],
    },
    {
        path: '/layout-2',
        component: DashboardLayout,
        children: [
          {
            path: '',
            component: Form,
          },
        ],
    },
    {
        path : '/404',
        component: NotFound
    },
    {
      path: '/',
      redirect: '/public',
    },
  
    {
      path: '/*',
      redirect: '/404',
    },
  ];