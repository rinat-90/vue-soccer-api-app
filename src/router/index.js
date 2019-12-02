import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '../views/Dashboard'
import Teams from '../views/Teams'
import Team from '../views/Team'
import Matches from '../views/Matches'
Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
    { path: '/', name: 'dashboard', component: Dashboard },
    { path: '/teams', name: 'teams', component: Teams },
    { path: '/teams/:id', name: 'team', component: Team },
    { path: '/matches', name: 'matches', component: Matches },

  ]
})