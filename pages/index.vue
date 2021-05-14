<template>
  <v-container class="main-wrapper">
    <v-row>
      <v-col cols="12">
        <v-card class="pa-4 mt-4" id="profile" justify="center" align="center">
          <Profile />
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-spacer></v-spacer>
      <v-col cols="12" sm="10" md="6" xl="5">
        <v-card class="pa-4 mb-4" id="introduction">
          <h2 class="text-center">Introduction</h2>
          <p>👋 Hello, there!</p>
          <p>
            I am WANG Meng, a year-2 Computing student from Hong Kong PolyU. I
            started the minor in mathematics in Oct, 2020. I am taking COMP3421
            (Web Application Design and Development) this semester.
          </p>
        </v-card>
        <v-card
          class="pa-4 mb-4"
          id="interests"
          justify="center"
          align="center"
        >
          <h2>Interests</h2>
          <v-simple-table class="table text-left m-0">
            <tbody>
              <IconRow
                v-for="(item, index) in interestlist"
                :info="item"
                :key="index"
                :len="interestlist.length"
              />
            </tbody>
          </v-simple-table>
        </v-card>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="12" sm="12" md="6" xl="4">
        <v-expansion-panels v-model="panel">
          <v-expansion-panel v-for="(gist, index) in gistcontent" :key="index">
            <v-expansion-panel-header v-if="gist.files">{{
              gist.files[Object.keys(gist.files)[0]].filename
            }}</v-expansion-panel-header>
            <v-expansion-panel-content v-if="gist.files">
              <pre
                v-html="gist.files[Object.keys(gist.files)[0]].content"
              ></pre>
              <v-divider class="mt-2"></v-divider>
              <v-btn
                text
                x-small
                plain
                :href="gist.html_url"
                :color="'purple' + ($vuetify.theme.dark ? ' lighten-2' : '')"
                ><v-icon left>mdi-github</v-icon>github</v-btn
              >
              <v-btn
                text
                x-small
                plain
                @click="
                  snackbar_text = 'git clone ' + gist.git_pull_url;
                  copy(snackbar_text);
                  snackbar = true;
                "
                color="green"
              >
                <v-icon left>mdi-git</v-icon>git
              </v-btn>
              <v-btn text disabled x-small class="float-right"
                ><v-icon left>mdi-update</v-icon>updated:
                {{ new Date(gist.updated_at).toString().slice(4, 21) }}</v-btn
              >
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="12" sm="6" md="6" xl="3">
        <v-card class="pa-4" id="courses" justify="center" align="center">
          <h2>Courses</h2>
          <v-simple-table class="m-0">
            <tbody>
              <IconRow
                v-for="item in courselist.comp"
                :info="item"
                :key="item.id"
              />
            </tbody>
          </v-simple-table>
        </v-card>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="12" sm="6" md="6" xl="3">
        <v-card class="pa-4" id="courses" justify="center" align="center">
          <h2>Courses</h2>
          <v-simple-table class="m-0">
            <tbody>
              <IconRow
                v-for="item in courselist.other"
                :info="item"
                :key="item.id"
              />
            </tbody>
          </v-simple-table>
        </v-card>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    <v-snackbar v-model="snackbar" timeout="2000" :vertical="true">
      Copied to Clipboard:
      <pre class="d-inline-block text-truncate">{{ snackbar_text }}</pre>
      <template v-slot:action="{ attrs }">
        <v-btn
          color="red lighten-2"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          <v-icon left>mdi-close</v-icon>
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<style>
p:last-child {
  margin-bottom: 0;
}
pre {
  white-space: pre-wrap;
  overflow: auto !important;
}
</style>

<script>
export default {
  head: {
    title: "Moenupa's Homepage",
    meta: [
      { hid: "keywords", name: "keywords", content: "Moenupa" },
      { hid: "keywords", name: "keywords", content: "Homepage" },
      {
        hid: "description",
        name: "description",
        content: "Moenupa's Personal Homepage",
      },
    ],
  },
  data() {
    return {
      panel: [1],
      snackbar: false,
      snackbar_text: "snackbar_init",
      interestlist: [
        { icon: "mdi-music-box", name: "Music", tags: ["Pure", "Piano"] },
        { icon: "mdi-chart-box", name: "Machine Learning", tags: [] },
        { icon: "mdi-gamepad-circle", name: "Gaming", tags: ["WOT", "Steam"] },
        { icon: "mdi-web-box", name: "Front-End", tags: ["Vue.js", "Nuxt.js"] },
      ],
      courselist: {
        comp: [
          {
            icon: "mdi-code-greater-than",
            name: "Computational Thinking",
            tags: ["COMP1002"],
          },
          {
            icon: "mdi-account-group",
            name: "Freshmen Seminar",
            tags: ["COMP1901"],
          },
          {
            icon: "mdi-currency-sign",
            name: "Programming Fundamentals",
            tags: ["COMP1011"],
          },
          {
            icon: "mdi-laptop",
            name: "Introduction to Computer Systems",
            tags: ["COMP1411"],
          },
          {
            icon: "mdi-chart-scatter-plot",
            name: "Introduction to Data Analysis",
            tags: ["COMP1433"],
          },
          {
            icon: "mdi-iframe-array",
            name: "Data Structures",
            tags: ["COMP2011"],
          },
          {
            icon: "mdi-code-braces-box",
            name: "Object-Oriented Programming",
            tags: ["COMP2021"],
          },
          {
            icon: "mdi-database",
            name: "Database Systems",
            tags: ["COMP2411"],
          },
          {
            icon: "mdi-network",
            name: "Computer Networking",
            tags: ["COMP2322"],
          },
          {
            icon: "mdi-cpu-64-bit",
            name: "Computer Organization",
            tags: ["COMP2421"],
          },
          { icon: "mdi-linux", name: "Operating Systems", tags: ["COMP2432"] },
          {
            icon: "mdi-code-not-equal-variant",
            name: "Web Application",
            tags: ["COMP3421"],
          },
        ],
        other: [
          {
            icon: "mdi-book",
            name: "Splendours of Imperial China",
            tags: ["CC1C15P"],
          },
          {
            icon: "mdi-tools",
            name: "Engineering and Environmental Management",
            tags: ["ME1D01"],
          },
          {
            icon: "mdi-account-group",
            name: "Tomorrow's Leaders",
            tags: ["APSS1L01"],
          },
          {
            icon: "mdi-format-letter-case",
            name: "English for University Studies",
            tags: ["ELC1013"],
          },
          {
            icon: "mdi-format-annotation-plus",
            name: "Advanced English Reading and Writing Skills",
            tags: ["ELC2011"],
          },
          {
            icon: "mdi-progress-question",
            name: "Introductory Probability",
            tags: ["AMA1104"],
          },
          {
            icon: "mdi-chart-bell-curve",
            name: "Calculus for Engineers",
            tags: ["AMA1130"],
          },
          {
            icon: "mdi-vector-curve",
            name: "Mathematics Ⅰ",
            tags: ["AMA2111"],
          },
        ],
      },
      gistlist: [
        "58f69668a4db5aa5da0b74b901230ffc",
        "5848c95b83cb449f79e14b16615039fc",
        "30493d0c7ead93d676b4d6c8a29dbb8a",
        "dd5e2c295036bcfa7251a8dfe5facabc",
        "aab911df7d12ffabb0ff9e8cb5545597",
      ],
      gistcontent: [],
    };
  },
  async fetch() {
    for (var i = 0; i < this.gistlist.length; i++) {
      this.gistcontent[i] = await fetch(
        "https://api.github.com/gists/" + this.gistlist[i]
      ).then((res) => res.json());
    }
  },
  methods: {
    async copy(text) {
      try {
        await this.$copyText(text);
      } catch (e) {
        console.error(e);
      }
    },
  },
  mounted() {},
};
</script>