export default{
  computed:{
    matchday(){
      return this.$store.getters.currentMatchday
    },
  },
  methods:{
    getIcon(match){
      if(match && this.icons.length){
        return {
          homeTeamIcon: this.icons.filter(i => i.id === match.homeTeam.id)[0] || '',
          awayTeamIcon: this.icons.filter(i => i.id === match.awayTeam.id)[0] || '',
        }
      }
    }
  }
}