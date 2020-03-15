<template>
  <v-tab-item>
    <v-card flat>
      <v-card-title>
        <v-col xs="12" md="10" offset-md="1">
          <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="Search..."
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
                      :items="table"
                      class="elevation-1">

          <template v-slot:item.team.name="{ item }">
            <v-list flat style="background: transparent">
              <v-list-item link :to="`/team/${item.team.id}`">
                <v-list-item-avatar size="18">
                  <v-img :src="item.team.crestUrl" />
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>{{ item.team.name | teamName }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </template>
          
        </v-data-table>
      </v-card-text>
    </v-card>
  </v-tab-item>
</template>

<script>
  export default {
    name: "Table",
    props: {
      table:{
        type: Array,
        required: true
      }
    },
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