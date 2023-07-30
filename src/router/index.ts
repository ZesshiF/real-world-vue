import { createRouter, createWebHistory } from 'vue-router'
import EventListView from "../views/EventListView.vue"
import AboutView from "../views/AboutView.vue"
import CatOrgView from "../views/CatOrgView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'EventList',
      component: EventListView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/CategoryOrganizer',
      name: 'CategoryOrganizer',
      component: CatOrgView
    }
  ]
})

export default router
