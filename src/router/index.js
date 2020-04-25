import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'count',
    component: () => import('../views/Count.vue')
  },
  {
    path: '/Share',
    name: 'Share',
    component: () => import('../views/Share.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
