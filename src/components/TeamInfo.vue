<template>
  <v-card  class="text-center pa-3">
    <v-responsive class="pt-4">
      <v-avatar size="100" class="grey lighten-2">
        <img :src="team.crestUrl">
      </v-avatar>
      <div class="subtitle-1 mt-3">{{ team.name }}</div>
    </v-responsive>
    <v-card-text>
      <v-list-item >
        <v-list-item-content>
          <v-list-item-subtitle>Founded: {{ team.founded }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item >
        <v-list-item-content>
          <v-list-item-subtitle>Club colors: {{ team.clubColors }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-subtitle>Stadium: {{ team.venue }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-subtitle>Active competitions: {{ team.activeCompetitions[0].name }}, {{ team.activeCompetitions[1].name }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    name: "TeamInfo",
    props: ['team']
  }
</script>

<style scoped>

</style>