<template>
  <v-tab-item>
    <v-card flat>
      <app-loader v-if="!scorers.length" />  
      <v-card-text v-else>
        <v-data-table
          :loading="!scorers.length"
          :headers="headers"
          :items="scorers"
          hide-default-footer>
          
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
    name: "TopScorers",
    props: {
      scorers:{
        type: Array,
        required: true
      }
    },
    data(){
      return{
        headers: [
          { text: 'Goals', align: 'left', value: 'numberOfGoals' },
          { text: 'Name', align: 'left', value: 'player.name' },
          { text: 'Team', value: 'team.name' }
        ],
      }
    },
    computed:{
      getScorers(){
        return this.scorers.map(scorer => {
          return scorer.team.name.indexOf('FC') !== -1 ? scorer.team.name.slice(0, name.indexOf('FC')) : scorer.team.name
        })
      }
    },
    methods:{
      formattedName(name){
        return name.indexOf('FC') !== -1 ? name.slice(0, name.indexOf('FC')) : name
      }
    }
  }
</script>

<style scoped>

</style>