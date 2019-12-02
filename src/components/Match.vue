<template>
  <v-card class="mt-3 pa-3">

    <div class="title">{{ title }}</div>
    <app-spinner v-if="!match"></app-spinner>
    <v-simple-table v-if="match">
      <tbody>
      <tr>
        <td class="text-left pr-0">{{ match.homeTeam.name }}</td>
        <td class="text-center pr-0 pl-0">{{ getScore(match) }}</td>
        <td class="text-right pl-0">{{ match.awayTeam.name }}</td>
      </tr>
      </tbody>
    </v-simple-table>
  </v-card>
</template>

<script>
  export default {
    name: "Match",
    props:['title', 'match'],
    methods :{
      getScore(match){
        if(this.match){
          if(match.score.fullTime.homeTeam !== null && match.score.fullTime.awayTeam !== null){
            return `${match.score.fullTime.homeTeam} - ${match.score.fullTime.awayTeam}`
          }else {
            return '-'
          }
        }

      }
    }
  }
</script>

<style scoped>

</style>