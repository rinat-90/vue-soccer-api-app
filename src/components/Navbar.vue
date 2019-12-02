<template>
  <v-app-bar app>
    <v-toolbar-title class="headline text-uppercase" color="deep-purple">
      <span>BRITISH</span>
      <span class="font-weight-light">PREMIER LEAGUE</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn v-for="link in links" :key="link.title" router :to="link.url" text>
      <span class="mr-2">{{ link.title }}</span>
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
