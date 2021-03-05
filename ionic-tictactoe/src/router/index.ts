import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Game from '../views/Game.vue'
import Board from '../views/Board.vue'
import Square from '../views/Square.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/game'
  },
  {
    path: '/game',
    name: 'Game',
    component: Game
  },
  {
    path: '/board',
    name: 'Board',
    component: Board
  },
  {
    path: '/square',
    name: 'Square',
    component: Square
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
