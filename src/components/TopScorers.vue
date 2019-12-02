<template>
  <v-tab-item>
    <v-card flat>
      <v-card-text>
        <v-data-table
                      :loading="!scorers.length"
                      :headers="headers"
                      :items="scorers"
                      hide-default-footer
        >
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
    props: ['scorers'],
    data(){
      return{
        headers: [
          { text: 'Goals', align: 'left', value: 'numberOfGoals' },
          { text: 'Name', align: 'left', value: 'player.name' },
          { text: 'Team', value: 'team.name' }
        ],
      }
    }
  }
</script>

<style scoped>

</style>