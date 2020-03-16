<template>
  <v-card outlined class="pa-2 ma-2">
    <v-layout wrap row>
      <v-flex xs8 style="border-right: 1px solid grey">
        <div class="d-flex px-2 mb-2" style="position:relative;">
          <div class="mr-2">
            <v-avatar size="25">
              <img v-if="icon"  :src="icon.homeTeamIcon.url" />
            </v-avatar>
          </div>
          <div>
            <router-link 
              exact
              :to="`/team/${match.homeTeam.id}`" 
              :style="teamOpacity('HOME_TEAM')"
              class="team-link">
              {{ match.homeTeam.name | teamName }}
            </router-link>
            
            </div>  
          <div 
            :style="teamOpacity('HOME_TEAM')"
            class="ml-auto">
            {{ getScore('home', match) }}
          </div>
          <span class="icon-wrap">
            <v-icon v-if="match.score.winner === 'HOME_TEAM'">mdi-menu-left</v-icon>
          </span>
        </div>
        <div class="d-flex px-2" style="position:relative;">
          <div class="mr-2">
            <v-avatar size="25">
              <img v-if="icon" :src="icon.awayTeamIcon.url" />
            </v-avatar>
          </div>
          <div>
            <router-link 
              exact
              :to="`/team/${match.awayTeam.id}`" 
              :style="teamOpacity('AWAY_TEAM')"
              class="team-link">
              {{ match.awayTeam.name | teamName }}
            </router-link>
          </div>
          <div 
            :style="teamOpacity('AWAY_TEAM')"
            class="ml-auto">
              {{ getScore('away', match) }}
          </div>
          <span  class="icon-wrap">
            <v-icon v-if="match.score.winner === 'AWAY_TEAM'">mdi-menu-left</v-icon>
          </span>
        </div>
      </v-flex>
      <v-flex xs4>
        <div class="d-flex justify-center" style="font-size: 13px;">
          <div class="align-center text-center">
            <div>{{ match.status }}</div>  
            <div>{{ match.utcDate | date('date')}}</div>
            <div>{{ match.utcDate | date('time')}}</div>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
  export default {
    name: "MatchCard",
    props: {
      match:{
        type: Object,
        required: true
      },
      icon:{
        type: Object,
        required: true
      }
    },
    computed:{
      isWinner(){
        return this.getWinner === null 
          || this.getWinner === 'DRAW' 
          ? true : false  
      },
      getWinner(){
        return this.match.score.winner
      }

    },
    methods:{
      teamOpacity(team){
        return this.isWinner 
          ? { 'opacity': 1 } 
          : team === this.getWinner 
            ? { 'opacity': '1' } 
            : { 'opacity': '0.6' }
      },
      getScore(team, match){
        return team && team === 'home'
          ? this.getWinner ? match.score.fullTime.homeTeam : ''
          : this.getWinner ? match.score.fullTime.awayTeam : ''
      },
    },

  }
</script>

<style scoped>
  .icon-wrap{
    position:absolute; 
    top:0; 
    right: -10px;
  }

  .team-link{
    text-decoration: none;
    color: #000;
  }
  .team-link:hover{
    text-decoration: underline;
  }
</style>