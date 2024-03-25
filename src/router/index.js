import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login',
      component: () => import('@/views/LoginPage.vue'),
    },
    {
      path: '/login',
      redirect: '/login/doctor',
      component: () => import('@/views/LoginPage.vue'),
      children: [
        {
          path: 'doctor',
          component: () => import('@/views/login/DoctorLogin.vue')
        }
      ]
    },
    {
      path: '/work',
      redirect: '/work/home',
      component: () => import('@/views/WorkSpace.vue'),
      children: [
        {
          path: 'home',
          component: () => import('@/views/work/HomePage.vue')
        },
        {
          path: 'message',
          component: () => import('@/views/work/MessagePage.vue')
        },
        {
          path: 'log',
          component: () => import('@/views/work/SystemLog.vue')
        },
        {
          path: 'user',
          component: () => import('@/views/work/UserManagement.vue')
        }

      ]
    }
  ]
})

export default router
