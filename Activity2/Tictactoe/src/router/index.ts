import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tictactoe from '../views/Tictactoe.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tictactoe'
  },
  {
    path: '/tictactoe',
    name: 'Tictactoe',
    component: Tictactoe
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
