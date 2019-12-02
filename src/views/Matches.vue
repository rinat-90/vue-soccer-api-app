<template>
  <v-container>
    <v-layout row wrap>
      <v-col cols="10" offset="1">
        <v-layout row wrap>
          <v-col cols="12">
            <v-card class="pa-3">
              <v-layout row wrap>
                <v-col cols="3">
                  <v-col cols="12">
                    <v-btn text class="mb-10" @click="">Current Matchday</v-btn>
                    <v-slider
                            v-model="slider"
                            thumb-label="always"
                            min="1"
                            max="38"
                    ></v-slider>
                  </v-col>
                </v-col>
                <v-col cols="9">
                  <div class="title">Matchday - {{ slider }}</div>
                  <div class="text-center" v-if="!matches">
                    <v-progress-circular
                            indeterminate
                            color="primary"
                    ></v-progress-circular>
                  </div>
                  <v-simple-table v-if="matches">
                    <thead>
                    <tr>
                      <th>#</th>
                      <th colspan="3" class="text-center">Match</th>
                      <th>Date</th>
                      <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(match, index) in matches" :key="match.id">
                      <td>{{ index + 1 }}</td>
                      <td class="text-right pr-0">{{ match.homeTeam.name }}</td>
                      <td class="text-center" v-if="match.score">{{ matchScore(match.score) }}</td>
                      <td class="text-left pl-0">{{ match.awayTeam.name }}</td>
                      <td class="">{{ formattedDate(match.utcDate) }}</td>
                      <td class="">{{ match.status }}</td>

                    </tr>
                    </tbody>
                  </v-simple-table>
                </v-col>
              </v-layout>
            </v-card>
          </v-col>
        </v-layout>
      </v-col>
    </v-layout>
  </v-container>
</template>
<script>
  import Api from '../lib/Api'
  export default {
    data: () => ({
      slider: 3,
      matches: null,
    }),
    methods:{
      loadMatches(num){
        return Api.getCurrentMatches(num).then(res => this.matches = res.matches)
      },
      formattedDate(date){
        return `${new Date(date).toLocaleDateString()},  ${new Date(date).toLocaleTimeString()}`
      },
      matchScore(matchScore){
        return matchScore.winner !== null ? `${ matchScore.fullTime.homeTeam } - ${ matchScore.fullTime.awayTeam }` : `-`
      }

    },
    mounted(){
      this.loadMatches(this.slider)
    },

    watch:{
      slider(val){
        this.loadMatches(val)
      }
    }
  }
</script>