import { createRouter, createWebHistory } from 'vue-router'
import EventListView from "../views/EventListView.vue"
import AboutView from "../views/AboutView.vue"
import CatOrgView from "../views/CatOrgView.vue"
import StudentView from "../views/StudentView.vue"
import EventDetailView from "../views/event/EventDetailView.vue"
import EventEditView from '@/views/event/EventEditView.vue'
import EventRegisterView from '@/views/event/EventRegisterView.vue'
import EventLayoutView from '@/views/event/EventLayoutView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventListView,
      props: (route) =>({page: parseInt(route.query?.page as string || '1')})
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
    },
    {
      path: '/student',
      name: 'StudentList',
      component: StudentView
    },
    {
      path: '/event/:id',
      name: 'event-layout',
      component: EventLayoutView,
      props: true,
      children: [
        {
          path: '',
          name: 'event-detail',
          component: EventDetailView,
          props: true
        },
        {
          path: 'edit',
          name: 'event-edit',
          component: EventEditView,
          props: true
        },
        {
          path: 'register',
          name: 'event-register',
          component: EventRegisterView,
          props: true
        }
      ]
    },
    {
      path: '/:cathAll(.*)',
      name: 'not-found',
      component: NotFoundView
    }

  ]
})

export default router
