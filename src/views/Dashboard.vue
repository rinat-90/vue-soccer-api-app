<template>
  <v-container>
    <v-row>
      <v-col  xs="12" sm="12" md="10" offset-md="1" lg="10" offset-lg="1">
        <v-card class="">
          <v-tabs v-model="tab" show-arrows centered>
            <v-tabs-slider />

            <v-tab @change="fetchTable">Table</v-tab>
            <v-tab @change="fetchCurrentMatches">Matchday</v-tab>
            <v-tab @change="fetchLastMatches">last results</v-tab>
            <v-tab @change="fetchTopScorers">top scorers</v-tab>

            <v-tabs-items v-model="tab">
              <table-tab :table="table" />
              <match-day-tab :matches="currentMatches" :icons="icons" />
              <last-results-tab :matches="lastMatches" :icons="icons" />
              <top-scorers-tab :scorers="scorers" />
            </v-tabs-items>
          </v-tabs>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
  import Api from '../lib/Api'
  import TableTab from "../components/Tabs/TableTab";
  import MatchDayTab from "../components/Tabs/MatchDayTab";
  import LastResultsTab from "../components/Tabs/LastResultsTab";
  import TopScorersTab from "../components/Tabs/TopScorersTab";
  import { mapGetters } from 'vuex';
  export default {
    components:{ TableTab, MatchDayTab, LastResultsTab, TopScorersTab },
    metaInfo(){
      return{
        title: this.$title('Dashboard'),
      }
    },
    data: () => ({
      tab: null,
      table: [],
      currentMatches: [],
      lastMatches: [],
      scorers: [],
      
    }),
    computed:{
      ...mapGetters(['icons', 'currentMatchday']),
    },
    methods:{
      fetchTable(){
        if(!this.table.length){
          Api.getTable()
            .then(res => {
              const table = res.standings[0].table;
              if(!this.icons.length){
                const icons = table.map(item => {
                  return {
                    id: item.team.id,
                    url: item.team.crestUrl
                  }
                });
                this.$store.commit('SET_ICONS', icons)
              }
              this.table =  table
            })
        }
      },
      fetchCurrentMatches(){
        if(!this.currentMatches.length && this.currentMatchday){
          Api.getMatches(this.currentMatchday)
            .then(res => this.currentMatches = res.matches)
        }
      },
      fetchLastMatches(){
        if(!this.lastMatches.length && this.currentMatchday){
          Api.getMatches(this.currentMatchday -1)
            .then(res => this.lastMatches = res.matches)
        }
      },
      fetchTopScorers(){
        if(!this.scorers.length){
          Api.getScorers()
            .then(res => this.scorers = res.scorers)
        }  
      }
    },
    mounted(){
      this.fetchTable()
    },
  }
</script>