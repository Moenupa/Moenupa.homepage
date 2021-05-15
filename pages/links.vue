<template>
  <v-container>
    <v-row justify="space-around">
      <v-col cols="6" sm="4" lg="3" v-for="(item, index) in links" :key="index">
        <v-card max-width="374" min-width="240">
          <v-img
            height="250"
            :src="item.img ? item.img : source + '?' + item.name"
          ></v-img>

          <v-card-title class="text-capitalize">{{ item.name }}</v-card-title>

          <v-card-text>
            <div>{{ item.description }}</div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-actions>
            <NuxtLink :to="item.link" class="text-decoration-none">
              <v-btn
                text
                :color="`purple ${
                  $vuetify.theme.dark ? 'lighten-2' : 'darken-2'
                }`"
                >visit</v-btn
              >
            </NuxtLink>
            <v-btn
              text
              :color="`blue ${$vuetify.theme.dark ? 'darken-3' : 'lighten-1'}`"
              v-for="extra in item.extras"
              :key="extra.id"
              :href="extra.link"
              ><v-icon left v-if="extra.icon">{{ extra.icon }}</v-icon
              >{{ extra.name }}</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
</style>

<script>
export default {
  head: {
    title: "Navigation Page",
    meta: [
      { hid: "keywords", name: "keywords", content: "Moenupa" },
      { hid: "keywords", name: "keywords", content: "Link Navigation Roadmap" },
      {
        hid: "description",
        name: "description",
        content: "Roadmap of Moenupa's Website",
      },
    ],
  },
  data() {
    return {
      source: "https://source.unsplash.com/random/",
      links: [
        {
          name: "homepage",
          description:
            "My personal homepage. Contains nearly everything you'll need to know about me.",
          link: "/",
          extras: [
            {
              icon: "mdi-github",
              name: "github",
              link: "https://github.com/Moenupa/Moenupa.homepage/tree/app/",
            },
          ],
        },
        {
          name: "about",
          description: "The page for information and acknowledgement.",
          link: "/about",
          extras: [
            {
              icon: "mdi-github",
              name: "github",
              link:
                "https://github.com/Moenupa/Moenupa.homepage/blob/app/pages/about.vue",
            },
          ],
        },
        {
          name: "blog",
          disabled: true,
          description: "A blog of my own study record.",
          link: "https://Moenupa.github.io/Moenupa.blog/",
          extras: [
            {
              icon: "mdi-github",
              name: "github",
              link: "https://github.com/Moenupa/Moenupa.blog/",
            },
          ],
        },
      ],
    };
  },
  layout: "simple",
};
</script>
