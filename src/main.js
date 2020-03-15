import Vue from 'vue'
import VueMeta from 'vue-meta';
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import store from './store'
import dateFilter from './filters/date.filter'
import teamNameFilter from './filters/teamName.filter'
import TitlePlugin from './plugins/title.plugin'
import Spinner from "./components/Partials/Spinner";
import MatchCard from './components/Cards/MatchCard.vue'

Vue.use(TitlePlugin);
Vue.use(VueMeta )
Vue.component('app-loader', Spinner);
Vue.component('match-card', MatchCard);
Vue.filter('date', dateFilter);
Vue.filter('teamName', teamNameFilter);

Vue.config.productionTip = false

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
