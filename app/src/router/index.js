import Vue from 'vue'
import Router from 'vue-router'
import Home from '../page/Home.vue'
import Login from '../page/login.vue'
import Register from '../page/register.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      redirect: '/Homepage',
      children: [
        {
          path: '/Homepage',
          name: 'Homepage',
          component: resolve => require(['../page/Homepage.vue'], resolve)
        },
        {
          path: '/essential_i/staff',
          name: 'staff',
          component: resolve => require(['../page/essential_i/staff'], resolve)
        },
        {
          path: '/essential_i/company_i',
          name: 'companyI',
          component: resolve => require(['../page/essential_i/company_i.vue'], resolve)
        },
        {
          path: '/essential_i/staff_i/:id',
          name: 'staffI',
          component: resolve => require(['../page/essential_i/staff_i.vue'], resolve)
        },
        {
          path: '/assess/staff_a',
          name: 'staffA',
          component: resolve => require(['../page/assess/staff_assess.vue'], resolve)
        },
        {
          path: '/assess/staff_s',
          name: 'staffS',
          component: resolve => require(['../page/assess/staff_show.vue'], resolve)
        },
        {
          path: '/recruit/job_m',
          name: 'jobM',
          component: resolve => require(['../page/recruit/job_market.vue'], resolve)
        },
        {
          path: '/recruit/resume',
          name: 'resume',
          component: resolve => require(['../page/recruit/resume.vue'], resolve)
        },
        {
          path: '/news/broad',
          name: 'broad',
          component: resolve => require(['../page/news/broad.vue'], resolve)
        }
      ]
    }
  ]
})
