import Api from '../../lib/Api';


export default {
   state:{
      matches: [],
   },
   mutations:{
      SET_MATCHES(state, matches){
         state.matches = matches;
      },
   },
   actions:{
      fetchAllMatches({commit}){
         return Api.getAllMatches()
               .then(res => commit('SET_MATCHES', res.matches))
               .catch(err => { throw err })
         
      },
   },
   getters:{
      matches(state){
         return state.matches
      },
      matchesByMatchday: (state) => (matchday) => {
         return state.matches.filter(match => match.matchday === matchday)
      },
      matchesByTeamId:(state) => (id, status = 'SCHEDULED') => {
         return state.matches
            .filter(match => match.status === status)
            .filter(match => match.awayTeam.id === id || match.homeTeam.id === id)
      }
   }
}