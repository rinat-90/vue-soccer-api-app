<template>
  <v-app-bar app color="primary" dark>
    <v-toolbar-title class="headline text-uppercase" color="deep-purple">
      <!-- <v-img class="d-inline-block" src="../assets/logo.png" style="height: 60px; width: 60px"></v-img> -->
      <span class="font-weight-light">BPL Soccer</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn 
      v-for="link in links" 
      :key="link.title"  
      :to="link.url" 
      router
      text>
      {{ link.title }}  
    </v-btn>
  </v-app-bar>

</template>

<script>
export default {
  data: ()=> ({
    links: [
      { title: 'dashboard', url: '/' },
      { title: 'teams', url: '/teams' },
      { title: 'matches', url: '/matches' }
    ]
  }),
}
</script>
