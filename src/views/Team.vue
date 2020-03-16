<template>
  <v-container fluid>
    <app-loader v-if="!team" />
    <v-row  v-else justify-sm="center">
      <v-col xs="12" sm="10"  md="5">
        <team-info-card :team="team" />
        <v-card class="mt-5">
          <v-card-text>
            <div>
              <v-subheader>Next match Matchday - {{ currentMatchday }}</v-subheader>
            <match-card v-if="nextMatch" :match="nextMatch" :icon="getIcon(nextMatch)"/>
            </div>
          </v-card-text>
          
        </v-card>
        <v-card class="mt-5">
          <v-card-text>
            <div>
              <v-subheader>Last match Matchday - {{ currentMatchday - 1 }}</v-subheader>
              <match-card v-if="lastMatch" :match="lastMatch" :icon="getIcon(lastMatch)"/>
            </div>
          </v-card-text>
          
        </v-card>
        
      </v-col>
      <v-col xs="12" sm="10" md="7">
        <team-squad-card :squad="team.squad" />
        <v-card v-if="finishedMatches.length">
          <v-sparkline
            v-if="goals"
            :value="goals"
            color="primary"
            height="100"
            padding="24"
            stroke-linecap="round"
            smooth
            auto-draw
          >
            <template v-slot:label="item">
            {{ item.index + 1 }}
          </template>
          </v-sparkline>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
  import Api from '../lib/Api'
  import TeamInfoCard from "../components/Cards/TeamInfoCard";
  import TeamSquadCard from "../components/Cards/TeamSquadCard";
  import MatchCardMixin from '../mixins/MatchCardMixin'
  import { mapGetters } from 'vuex'

  export default {
    components:{ TeamInfoCard, TeamSquadCard},
    metaInfo(){
      return{
        title: this.$title('Team Info'),
      }
    },
    mixins: [MatchCardMixin],
    data(){
      return{
        team: null,
        nextMatch: null,
        lastMatch: null,
        finishedMatches: [],
        currentMatch: null,
      }
    },

    computed:{
      ...mapGetters(['icons', 'currentMatchday']),
      goals(){
        return this.PLmatches.length && this.team.name 
          ? this.PLmatches.map(item => {
            return item.score.homeTeam === this.team.name 
              ? item.score.fullTime.homeTeam
              : item.score.fullTime.awayTeam
          }) 
          : []
      },
      point(){
        return this.PLmatches.length && this.team.id 
          ? this.PLmatches.map(match => {
            return match.score.winner === 'AWAY_TEAM' 
              ? match.score.awayTeam.id === this.team.id ? 3 : 0
              : match.score.homeTeam.id === this.team.id ? 3 : 0
          })
          : []
      },
      PLmatches(){
        return this.finishedMatches.length 
          ? this.finishedMatches.filter(item => item.competition.name === 'Premier League') 
          : []
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
      },

      fetchTeam(){
        return new Promise((resolve) => {
          Api.getTeam(+this.$route.params.id)
            .then(res => this.team = res)
              resolve()
        });
      },
      fetchNextMatch(){
        Api.getTeamMatches(+this.$route.params.id, 'SCHEDULED')
          .then(res=> this.nextMatch = res.matches[0])
      },
      fetchLastMatch(){
        Api.getTeamMatches(+this.$route.params.id, 'FINISHED')
          .then(res=> this.lastMatch = res.matches[0])
      },
      fetchData(){
        this.fetchTeam()
          .then(() => {
            this.fetchNextMatch()
          })
          .then(() => {
            this.fetchLastMatch()
          })
        }
    },

    mounted(){
      this.fetchData()
    },
    watch:{
      '$route'(to, from){
        if(to.params.id !== from.params.id){
          this.fetchData()
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