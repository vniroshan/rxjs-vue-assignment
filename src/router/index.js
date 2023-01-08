import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostReadView from '../views/PostReadView.vue'
import StopWatchView from '../views/StopWatchView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/:id',
    name: 'postRead',
    component: PostReadView
  },
  {
    path: '/stop-watch',
    name: 'stopWatch',
    component: StopWatchView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
