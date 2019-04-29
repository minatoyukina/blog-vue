import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Widget from '@/components/Widget'
import Timeline from '@/components/Timeline'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Header',
      component: Header
    },
    {
      path: '/footer',
      name: 'Footer',
      component: Footer
    },
    {
      path: '/widget',
      name: 'Widget',
      component: Widget
    },
    {
      path: '/timeline',
      name: 'Timeline',
      component: Timeline
    },
  ]
})
