<template>
  <v-container>
    <v-row row wrap>
      <v-col xs="12" sm="12" md="8" offset-md="2">
        <v-text-field v-model="search" label="Search team..">
          <v-icon slot="prepend">mdi-magnify</v-icon>
        </v-text-field>
      </v-col>
    </v-row>
    <app-loader v-if="!teams.length" />
    <v-layout v-else row wrap>
      <team-card v-for="team in filteredTeams" :key="team.id" :team="team" />
    </v-layout>
  </v-container>
</template>
<script>
  import Api from '../lib/Api'
  import TeamCard from "../components/Cards/TeamCard";
  export default {
    name: 'Teams',
    components:{ TeamCard },
    metaInfo(){
      return{
        title: this.$title('Teams'),
      }
    },
    data: ()=> ({
      teams: [],
      search: '',
    }),
    computed: {
      filteredTeams(){
        return this.teams.length ? this.teams.filter(team => {
            return team.shortName.toLowerCase().indexOf(this.search.toLowerCase()) > -1
          })
          : []
      },
    },
    mounted(){
      Api.getTeams().then(res => this.teams = res.teams)
    },

  }
</script>

<style>
</style>