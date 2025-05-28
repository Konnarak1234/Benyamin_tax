import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ServiceView from '../views/service/ServiceView.vue'
import Service1 from '../views/service/service-list/service1'
import Service2 from '../views/service/service-list/service2'
import Service3 from '../views/service/service-list/service3'
import Service4 from '../views/service/service-list/service4'
import Blog from '../views/blog/BlogView'
import BlogDetail from '../views/blog/BlogDetail'
import Contact from '../views/ContactView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/service',
    name: 'service',
    component: ServiceView
  },
  {
    path: '/service/business-registration',
    name: 'service1',
    component: Service1,
  },
  {
    path: '/service/trademark-registration',
    name: 'service2',
    component: Service2,
  },
  {
    path: '/service/tax-registration',
    name: 'service3',
    component: Service3,
  },
  {
    path: '/service/bookkeeping-service',
    name: 'service4',
    component: Service4,
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog,
  },
  {
    path: '/blog/:id',
    name: 'blogDetail',
    component: BlogDetail,
    props: true
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
