<template>
  <v-container fluid>
    <app-spinner v-if="!team"></app-spinner>
    <v-row  v-if="team" justify-sm="center">
      <v-col xs="12" sm="10"  md="5">
        <TeamInfo :team="team"></TeamInfo>
        <!--MATCH DAY-->
        <Match :match="currentMatch" :title="'Matchday'"></Match>
        <!--NEXT MATCH DAY-->
        <Match :match="nextMatch" :title="'Next Matchday'"></Match>
        <!--LAST MATCH DAY-->
        <Match :match="lastMatch" :title="'Last Matchday'"></Match>
      </v-col>
      <v-col xs="12" sm="10" md="7">
        <SquadTable :squad="team.squad"></SquadTable>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
  import Api from '../lib/Api'
  import TeamInfo from "../components/TeamInfo";
  import Match from "../components/Match";
  import SquadTable from "../components/SquadTable";
  export default {
    components:{ TeamInfo, Match, SquadTable},
    data(){
      return{
        currentMatchDay: 0,
        team: null,
        nextMatch: null,
        currentMatch: null,
        lastMatch: null,
      }
    },

    methods:{
      formattedDate(date){
        return new Date(date).toLocaleTimeString()
      },
      loadCurrentMatchday(){
        return Api.getCurrentMatchday().then(res => this.currentMatchDay = res.currentSeason.currentMatchday)
      },
      loadCurrentMatches(val){
        return Api.getMatches(val).then(res => {
          return res.matches.find(match => {
            if(match.homeTeam.id == this.$route.params.id || match.awayTeam.id == this.$route.params.id){
               return this.currentMatch = match
            }
          })
        })
      },
      loadTeam(){
        return Api.getTeam(this.$route.params.id)
          .then(res => this.team = res)
      },
      loadMatch(status){

        if(status === 'SCHEDULED') {
          return Api.getTeamMatches(this.$route.params.id, status, 1)
            .then(res => this.nextMatch = res.matches[0])
        }else {
          return Api.getTeamMatches(this.$route.params.id, status, 1)
            .then(res => this.lastMatch = res.matches[0])
        }

      },

    },
    mounted(){
      this.loadCurrentMatchday()
      this.loadTeam()
      this.loadMatch('SCHEDULED')
      this.loadMatch('FINISHED')
    },
    watch:{
      currentMatchDay(val){
        if(val){
          this.loadCurrentMatches(val)
        }
      }
    }
  }
</script>

<style>
  .matchday{
    background-color: green;
  }
  .next-matchday{
    background-color: yellow;
  }
  .last-matchday{
    background-color: indianred;
  }
</style>