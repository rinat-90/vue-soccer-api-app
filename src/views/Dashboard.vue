<template>
  <v-container>
    <v-row>
      <v-col  xs="12" sm="12" md="10" offset-md="1" lg="10" offset-lg="1">
        <v-card class="">
          <v-tabs v-model="tab" show-arrows centered>
            <v-tabs-slider></v-tabs-slider>

            <v-tab>Table</v-tab>
            <v-tab>Matchday</v-tab>
            <v-tab>last results</v-tab>
            <v-tab>top scorers</v-tab>

            <v-tabs-items v-model="tab">
              <!--table-->
              <Table :table="table"></Table>
              <!--match day-->
              <MatchDay :matches="currentMatches"></MatchDay>
              <!--last results-->
              <LastResults :matches="lastMatches"></LastResults>
              <!--top scorers-->
              <TopScorers :scorers="scorers"></TopScorers>
            </v-tabs-items>
          </v-tabs>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
  import Table from "../components/Table";
  import MatchDay from "../components/MatchDay";
  import LastResults from "../components/LastResults";
  import TopScorers from "../components/TopScorers";
  import Api from '../lib/Api'
  export default {
    components:{ Table, MatchDay, LastResults, TopScorers},
    data: () => ({
      tab: null,
      currentMatchday: 0,
      table: [],
      scorers: [],
      currentMatches: [],
      lastMatches: [],
    }),
    methods:{
      loadTable(){
        return Api.getTable().then(res => this.table = res.standings[0].table)
      },
      loadCurrentMatchday(){
        return Api.getCurrentMatchday().then(res => this.currentMatchday = res.currentSeason.currentMatchday)
      },
      loadCurrentMatches(val){
        return Api.getMatches(val).then(res => this.currentMatches = res.matches)
      },
      loadLastResults(val){
        return Api.getMatches(val-1).then(res => this.lastMatches = res.matches)
      },
      loadScorers(){
        return Api.getScorers(5).then(res => this.scorers = res.scorers)
      },
    },
    mounted(){
      this.loadTable();
      this.loadScorers();
      this.loadCurrentMatchday();
    },
    watch:{
      currentMatchday(val){
        if(val){
          this.loadCurrentMatches(val);
          this.loadLastResults(val);
        }
      }
    }
  }
</script>

<style>

</style>