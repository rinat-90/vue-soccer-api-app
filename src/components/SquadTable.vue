<template>
  <v-card class="pa-4">
    <v-card-title>
      <div class="title">Squad</div>
      <v-spacer></v-spacer>
      <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
                  :loading="!squad.length"
                  :search="search"
                  :headers="headers"
                  :items="squad"
    >
      <template v-slot:header.name="{ header }">
        {{ header.text.toUpperCase() }}
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
  export default {
    name: "SquadTable",
    props:['squad'],
    data(){
      return{
        search: '',
        headers: [
          { text: '#', align: 'left', value: 'shirtNumber' },
          { text: 'Name', align: 'left', value: 'name' },
          { text: 'Country', value: 'countryOfBirth' },
          { text: 'Position', value: 'position' }
        ],
      }
    }
  }
</script>

<style scoped>

</style>