import Api from '../../lib/Api';


export default {
   state:{
      teams: [],
   },
   mutations:{
      SET_TEAMS(state, teams){
         state.teams = teams;
      },
   },
   actions:{
      fetchTeams({ commit }) {
         return Api.getTeams()
            .then(res => {
               const icons = res.teams.map(team => {
                  return{
                     id: team.id,
                     url: team.crestUrl
                  }
               })
               commit('SET_ICONS', icons)
               commit('SET_TEAMS', res.teams)
            })
            .catch(err => { throw err })
      },
   },
   getters:{
      teams(state){
         return state.teams
      },
      teamById:(state) => (id) => {
         return state.teams.filter(team => team.id === id)
      }
   }
}