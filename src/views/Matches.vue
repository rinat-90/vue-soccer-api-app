<template>
  <v-container>
    <v-layout row wrap>
      <v-col cols="10" offset="1">
        <v-layout row wrap v-if="matches.length">
          <v-flex v-for="match in matches" :key="match.id" sm12 md6 >
            <match-card :match="match" :icon="getIcon(match)" />
          </v-flex>
        </v-layout>
      </v-col>
    </v-layout>
  </v-container>
</template>
<script>
  import Api from '../lib/Api'
  import MatchCard from "../components/Cards/MatchCard";
  export default {
    components:{ MatchCard },
    metaInfo(){
      return{
        title: this.$title('Matches'),
      }
    },
    data: () => ({
      matches: [],
      currentMatchDay: 1
    }),
    computed:{
      icons(){
        return this.$store.getters.icons
      }
      // filteredMatches(){
      //   if(this.currentMatchDay){
      //     return this.matches.filter(match => {
      //       if(match.season.currentMatchday === 21){
      //         return match
      //       }
      //     })
      //   }
      // }
    },
    methods:{
      getIcon(match){
        if(match && this.icons.length){
          return {
            homeTeamIcon: this.icons.filter(i => i.id === match.homeTeam.id)[0] || '',
            awayTeamIcon: this.icons.filter(i => i.id === match.awayTeam.id)[0] || '',
          }
        }
      },
      loadMatches(matchday){
        return Api.getMatches(matchday).then(res => this.matches = res.matches)
      },
      loadCurrentSeason(){
        return Api.getCurrentSeason().then(res => this.currentMatchDay = res.currentSeason.currentMatchday)
      },
      test(){
        this.currentMatchDay++;
        this.matches = [];
        this.loadMatches(this.currentMatchDay)
      }
    },
    mounted(){
      this.loadCurrentSeason();
      this.loadMatches(this.currentMatchDay)
    },
    watch:{
      // currentMatchDay(val){
      //   if(val){
      //     this.loadMatches(this.currentMatchDay)
      //   }
      // }
    }

  }
</script>