<template>
  <v-col  sm="6" md="3" lg="2">
    <v-hover>
      <template v-slot="{ hover }">

        <div :class="`elevation-${hover ? 24 : 6}`" class="transition-swing">
          <v-card flat class="text-center pa-3" router :to="`team/${team.id}`">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <img :src="team.crestUrl" :alt="team.shortName">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subtitle-1">{{ team.name | teamName }}</div>
            </v-card-text>
          </v-card>
        </div>

      </template>
    </v-hover>
  </v-col>
</template>

<script>
  export default {
    name: "TeamCard",
    props: {
      team:{
        type: Object,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>