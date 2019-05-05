import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List'
import Timeline from '@/components/Timeline'
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
      path: '/article/:id',
      name: 'Article',
      component: Article
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
