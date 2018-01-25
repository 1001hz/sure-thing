import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/pages/HomePage'
import AboutPage from '@/components/pages/AboutPage'
import ContactPage from '@/components/pages/ContactPage'
import ServicesPage from '@/components/pages/ServicesPage'
import MainTemplate from '@/components/templates/MainTemplate'
import SeoPage from '@/components/pages/services/SeoPage'
import ContentOpPage from '@/components/pages/services/ContentOpPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: MainTemplate,
      children: [    
        {
          path: '/',
          name: 'Home',
          component: HomePage
        },
        {
          path: '/about',
          name: 'About',
          component: AboutPage
        },
        {
          path: '/contact',
          name: 'Contact',
          component: ContactPage
        },
        {
          path: '/services',
          name: 'Services',
          component: ServicesPage
        },
        {
          path: '/seo',
          name: 'SeoPage',
          component: SeoPage
        },
        {
          path: '/contentoptimisation',
          name: 'ContentOpPage',
          component: ContentOpPage
        }
      ]
    }
  ]
})
