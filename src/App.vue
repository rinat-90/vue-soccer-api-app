<template>
  <v-app>
    <navbar />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import Navbar from './components/Partials/Navbar';

export default {
  name: 'App',
  components: { Navbar },

  mounted(){
    this.$store.dispatch('fetchCurrentSeason')
  }
};
</script>
