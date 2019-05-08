import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List'
import Timeline from '@/components/Timeline'
import Film from '@/components/Film'
import Board from '@/components/Board'
import Music from '@/components/Music'
import Article from '@/components/Article'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'List',
      component: List
    },
    {
      path: '/timeline',
      name: 'Timeline',
      component: Timeline
    },
    {
      path: '/film',
      name: 'Film',
      component: Film,
    },
    {
      path: '/board',
      name: 'Board',
      component: Board
    },
    {
      path: '/music',
      name: 'Music',
      component: Music
    },
    {
      path: '/article/:id',
      name: 'Article',
      component: Article
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  }
})
