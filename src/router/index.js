import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
    { path: '/', name: 'dashboard', component: () => import('../views/Dashboard.vue') },
    { path: '/teams', name: 'teams', component: () => import('../views/Teams.vue') },
    { path: '/team/:id', name: 'team', component: () => import('../views/Team.vue') },
    { path: '/matches', name: 'matches', component: () => import('../views/Matches.vue') },

  ]
})