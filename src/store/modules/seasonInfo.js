import Api from '../../lib/Api';

export default {
   state:{
      name: '',
      currentSeason: null,
   },
   mutations:{
      
   },
   actions:{
      
   },
   getters:{
      currentMatchday(state){
         return state.currentSeason.currentMatchday
      }
   }
}