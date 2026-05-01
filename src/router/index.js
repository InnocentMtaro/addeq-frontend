import { createRouter, createWebHistory } from 'vue-router'
import ProjectDetail from '@/components/ProjectDetail.vue'

const routes = [
  { path: '/projects/:id', component: ProjectDetail, props: true }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return savedPosition || { top: 0 }
  }
})

export default router
