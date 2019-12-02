<template>
  <v-container>
    <v-layout row wrap>
      <v-col sm="12" md="8" offset-md="2">
        <v-text-field v-model="search" label="Search team..">
          <v-icon slot="prepend">mdi-magnify</v-icon>
        </v-text-field>
      </v-col>
    </v-layout>
    <app-spinner v-if="!teams"></app-spinner>
    <v-layout row wrap v-if="teams">
      <TeamCard v-for="team in filteredTeams" :key="team.id" :team="team"></TeamCard>
    </v-layout>
  </v-container>
</template>
<script>
  import Api from '../lib/Api'
  import TeamCard from "../components/TeamCard";
  export default {
    name: 'Teams',
    components:{ TeamCard },
    data: ()=> ({
      teams: null,
      search: '',
    }),
    computed: {
      filteredTeams(){
        if(this.teams){
          return this.teams.filter(team => {
            return team.shortName.toLowerCase().indexOf(this.search.toLowerCase()) > -1
          })
        }

      }
    },
    methods:{
      loadTeams(){
        return Api.getTeams().then(res => this.teams = res.teams)
      },
    },
    mounted(){
      this.loadTeams()
    },

  }
</script>

<style>
</style>