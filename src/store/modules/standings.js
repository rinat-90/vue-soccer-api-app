import Api from '../../lib/Api';

export default {
   state:{
      table: [],
   },
   mutations:{
      SET_TABLE(state, table){
         state.table = table;
      },
   },
   actions:{
      fetchStandings({ commit }) {
         return Api.getTable()
            .then(res => {
               commit('SET_TABLE', res.standings[0].table)
            })
            .catch(err => { throw err })
      },
   },
   getters:{
      table(state){
         return state.table
      }
   }
}