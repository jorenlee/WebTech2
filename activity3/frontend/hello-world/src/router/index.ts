import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HelloWorld from '../views/HelloWorld.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home-world'
  },
  {
    path: '/hello-world',
    name: 'HelloWorld',
    component: HelloWorld
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
