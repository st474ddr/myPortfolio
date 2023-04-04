import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import PortfolioView from '../views/PortfolioView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ top: 0 })
      }, 250)
    })
  },
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'view.home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'view.about',
      component: AboutView
    },
    {
      path: '/portfolio',
      name: 'view.portfolio',
      component: PortfolioView
    }
  ]
})

export default router
