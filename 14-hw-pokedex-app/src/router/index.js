import Vue from 'vue'
import Router from 'vue-router'
import Categories from '@/components/Categories'
import Category from '@/components/Category'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'categories.all',
      component: Categories
    },
    {
      path: '/category/:name',
      props: (route) => ({name: route.params.name}),
      name: 'category',
      component: Category,
      children: [
        // {
        //   path: 'test',
        //   name: 'test',
        //   component: Test
        // }
      ]
    }
  ]
})
