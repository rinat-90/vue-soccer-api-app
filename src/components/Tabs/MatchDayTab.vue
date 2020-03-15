<template>
  <v-tab-item>
    <v-container class="pa-5">
      <app-loader v-if="!matches.length" />
      <v-layout v-else row wrap>
        <v-flex xs12 >
          <v-subheader>Matchday - {{ matchday }}</v-subheader>
        </v-flex>
        <v-flex v-for="match in matches" :key="match.id" sm12 md6 >
          <match-card :match="match" :icon="getIcon(match)" />
        </v-flex>
      </v-layout>
    </v-container>
  </v-tab-item>
</template>

<script>
  import MatchCardMixin from '../../mixins/MatchCardMixin'
  export default {
    name: "MatchDay",
    props:{
      matches:{
        type: Array,
        required: true
      },
      icons:{
        type: Array,
        required: true
      }
    },
    mixins:[MatchCardMixin]
  }
</script>