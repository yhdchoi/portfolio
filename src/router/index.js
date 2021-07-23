import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Projects from '../views/Projects.vue'
import Activities from '../views/Activities.vue'
import Contact from '../views/Contact.vue'
import Decrypt from '../views/Decrypt.vue'
import Jblog from '../views/JBlog.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/activities',
    name: 'Activities',
    component: Activities
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/decrypt',
    name: 'Decrypt',
    component: Decrypt
  },
  {
    path: '/jblog',
    name: 'Jblog',
    component: Jblog
  }



  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
