<template>
  <v-tab-item>
    <v-card flat>
      <v-card-title>
        <v-col xs="12" md="10" offset-md="1">
          <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="Search"
                  single-line
                  hide-details
          ></v-text-field>
        </v-col>
      </v-card-title>
      <v-card-text>
        <v-data-table
                      :loading="!table.length"
                      loading-text="Loading... Please wait"
                      :search="search"
                      :headers="headers"
                      :items="table">
          <template v-slot:header.name="{ header }">
            {{ header.text.toUpperCase() }}
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
  </v-tab-item>
</template>

<script>
  export default {
    name: "Table",
    props: ['table'],
    data(){
      return{
        search: '',
        headers: [
          { text: '#', align: 'left', value: 'position' },
          { text: 'Club', align: 'left', value: 'team.name' },
          { text: 'G', value: 'playedGames' },
          { text: 'W', value: 'won' },
          { text: 'L', value: 'lost' },
          { text: 'D', value: 'draw' },
          { text: 'GF', value: 'goalsFor' },
          { text: 'GA', value: 'goalsAgainst' },
          { text: 'GD', value: 'goalDifference' },
          { text: 'Points', value: 'points' },
        ],
      }
    }
  }
</script>

<style scoped>

</style>