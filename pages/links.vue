<template>
  <v-container>
    <v-row>
      <v-spacer></v-spacer>
      <v-col
        cols="6"
        sm="4"
        md="3"
        v-for="(item, index) in links"
        :key="index"
      >
        <v-card
          max-width="374"
          min-width="200"
        >
          <v-img
            height="250"
            :src="item.img ? item.img: (source+'?'+item.name)"
          ></v-img>

          <v-card-title class="text-capitalize">{{ item.name }}</v-card-title>

          <v-card-text>
            <div>{{ item.description }}</div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-actions>
            <NuxtLink :to="item.link" class="text-decoration-none">
              <v-btn text color="deep-purple lighten-2">visit</v-btn>
            </NuxtLink>
            <v-btn text color="blue darken-1" v-for="extra in item.extras" :key="extra.id" :href="extra.link"><v-icon left v-if="extra.icon">{{ extra.icon }}</v-icon>{{extra.name}}</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </v-container>
</template>

<style scoped>
</style>

<script>
export default {
  data() {
    return {
      source: "https://source.unsplash.com/random/",
      links: [
        {
          name: "homepage",
          description: "My personal homepage. Contains nearly everything you'll need to know about me.",
          link: "/",
          extras: [
            {
              icon: "mdi-github",
              name: "Github",
              link: "https://github.com/Moenupa/Moenupa.homepage/"
            }
          ]
        },
        {
          name: "about",
          description: "The page for information and acknowledgement.",
          link: "/about",
          extras: []
        },
        {
          name: "blog",
          disabled: true,
          description: "A blog of my own study record.",
          link: "https://Moenupa.github.io/Moenupa.blog/",
          extras: [
            {
              icon: "mdi-github",
              name: "Github",
              link: "https://github.com/Moenupa/Moenupa.blog/"
            }
          ]
        },
      ]
    }
  },
  layout: 'simple'
}
</script>
