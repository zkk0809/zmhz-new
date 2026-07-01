import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', redirect: '/index' },
  { path: '/index', name: 'Index', component: () => import('@/views/IndexView.vue') },
  { path: '/culture', name: 'Culture', component: () => import('@/views/CultureView.vue') },
  { path: '/travel', name: 'Travel', component: () => import('@/views/TravelView.vue') },
  { path: '/login', name: 'Login', component: () => import('@/views/LoginView.vue') },
  { path: '/reg', name: 'Reg', component: () => import('@/views/RegView.vue') },
  { path: '/users', name: 'Users', component: () => import('@/views/UsersView.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
