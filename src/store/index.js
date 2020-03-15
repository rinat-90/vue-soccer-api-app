import Vue from 'vue';
import Vuex from 'vuex';
import Api from '../lib/Api'

Vue.use(Vuex);

export default new Vuex.Store({
   state:{
      name: '',
      currentSeason: null,
      icons: []
   },
   mutations:{
      SET_ICONS(state, icons){
         state.icons = icons
      },
      SET_CURRENT_SEASON(state, { name, currentSeason }){
         state.name = name;
         state.currentSeason = currentSeason
      },
   },
   actions:{
      fetchCurrentSeason({ commit }){
         return Api.getCurrentSeason()
            .then(res => {
               const { name, currentSeason } = res;
               commit('SET_CURRENT_SEASON', { name, currentSeason });
            }).catch(err => { throw err })
      },
   },
   getters:{
     icons(state){
        return state.icons
     },
     currentMatchday(state){
      return state.currentSeason.currentMatchday
   }
   }
})