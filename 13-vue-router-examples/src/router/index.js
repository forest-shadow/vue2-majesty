import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'

import StoriesPage from '@/components/StoriesPage.vue'
import StoriesAll from '@/components/StoriesAll.vue'
import StoriesFamous from '@/components/StoriesFamous.vue'
import StoriesEdit from '@/components/StoriesEdit.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/stories',
      component: StoriesPage,
      children: [
        {
          path: '',
          name: 'stories.all',
          component: StoriesAll
        },
        {
          path: ':id/edit',
          props: (route) => ({id: Number(route.params.id)}),
          name: 'stories.edit',
          component: StoriesEdit
        },
        {
          path: 'famous',
          name: 'stories.famous',
          component: StoriesFamous
        }
      ]
    }
  ]
})
