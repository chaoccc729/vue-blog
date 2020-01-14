import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Mine from './views/Mine.vue'
import Community from './views/Community.vue'
import Video from './views/Video.vue'
import Message from './views/Message.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/community',
      name: 'community',
      component: Community
    },
    {
      path: '/video',
      name: 'video',
      component: Video
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
    {
      path: '/message',
      name: 'message',
      component: Message
    },
  ]
})
