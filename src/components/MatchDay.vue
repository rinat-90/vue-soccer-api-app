<template>
  <v-tab-item>
    <v-card flat>
      <v-card-text v-if="matches.length">
        <div class="headline text-center">Matchday - {{ matches[0].matchday }}</div>

        <v-simple-table >
          <tbody>
          <tr v-for="match in matches" :key="match.id">
            <td class="text-right pr-0">{{ match.homeTeam.name }}</td>
            <td class="text-center pr-0 pl-0">{{ match.score.fullTime.homeTeam }} - {{ match.score.fullTime.awayTeam }}</td>
            <td class="text-left pl-0">{{ match.awayTeam.name }}</td>
          </tr>
          </tbody>
        </v-simple-table>

        <v-layout row wrap>
          <v-col cols="8" offset="2">
          </v-col>
        </v-layout>

      </v-card-text>
    </v-card>
  </v-tab-item>
</template>

<script>
  export default {
    name: "MatchDay",
    props: ['matches'],
  }
</script>

<style scoped>

</style>