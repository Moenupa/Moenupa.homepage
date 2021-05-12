<template>
  <v-container class="d-flex flex-column justify-center align-center ma-auto">
    <v-row>
      <NuxtLogo />
    </v-row>
    <v-row>
      <v-col class="text-center">
        <h1 class="nuxt-title font-weight-light" :style="`color:${$vuetify.theme.dark ? '#00C58E' : '#2F495E'}`">Moenupa.homepage</h1>
        <h3 class="nuxt-subtitle font-weight-light">Powered by Nuxt.js</h3>
      </v-col>
    </v-row>
    <v-row>
      <v-col>  
        <v-btn
          href="https://nuxtjs.org/"
          target="_blank"
          outlined
          :color="`success ${$vuetify.theme.dark ? 'lighten-1' : 'darken-1'}`"
        >
          Documentation
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          outlined
          :color="`grey ${$vuetify.theme.dark ? 'lighten-1' : 'darken-2'}`"
        >
          GitHub
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.nuxt-title {
  font-size: 6rem;
}

.nuxt-subtitle {
  font-size: 2rem;
  color: #108775;
}

</style>

<script>
export default {
  layout: 'simple'
}
</script>
