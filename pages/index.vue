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
      <v-col cols="12" sm="10" md="6" xl="4">
        <v-card class="pa-4 mb-4" id="introduction">
          <h2 class="text-center">Introduction</h2>
          <p>👋 Hello, there!</p>
          <p>I am WANG Meng, a year-2 Computing student from Hong Kong PolyU. I started the minor in mathematics in Oct, 2020. I am taking COMP3421 (Web Application Design and Development) this semester.</p>
        </v-card>
        <v-card class="pa-4 mb-4" id="interests" justify="center" align="center">
          <h2>Interests</h2>
          <v-simple-table class="table text-left m-0">
            <tbody>
              <IconRow v-for="(item, index) in interestlist" :info="item" :key="index" :len="interestlist.length"/>
            </tbody>
          </v-simple-table>
        </v-card>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="12" sm="12" md="6" xl="3">
        <v-expansion-panels v-model="panel" multiple>
          <v-expansion-panel v-for="(item, index) in gistlist" :key="index" :id="item.name">
            <v-expansion-panel-header>{{ item.name }}</v-expansion-panel-header>
            <v-expansion-panel-content class="gist-box">
              <script :src="item.gist"></script>
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
              <IconRow v-for="item in courselist.comp" :info="item" :key="item.id"/>
            </tbody>
          </v-simple-table>
        </v-card>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="12" sm="6" md="6" xl="2">
        <v-card class="pa-4" id="courses" justify="center" align="center">
          <h2>Courses</h2>
          <v-simple-table class="m-0">
            <tbody>
              <IconRow v-for="item in courselist.other" :info="item" :key="item.id"/>
            </tbody>
          </v-simple-table>
        </v-card>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </v-container>
</template>

<style>

.gist-box * {
  color: inherit !important;
  margin: 0 !important;
  border: none !important;
  background-color: transparent !important;
}
.gist-meta {
  color: var(--gray) !important;
}

p:last-child {
  margin-bottom: 0;
}

</style>

<script>
export default {
  data() {
    return {
      panel: [1],
      interestlist: [
        { icon:"mdi-music-box"      , name:"Music",             tags:["Pure", "Piano"] },
        { icon:"mdi-chart-box"      , name:"Machine Learning",  tags:[] },
        { icon:"mdi-gamepad-circle" , name:"Gaming",            tags:["WOT", "Steam"] },
        { icon:"mdi-web-box"        , name:"Front-End",         tags:["Vue.js", "Nuxt.js"] },   
      ],
      courselist: {
        comp: [
          { icon:"mdi-code-greater-than"      , name:"Computational Thinking",              tags:["COMP1002",], },
          { icon:"mdi-account-group"          , name:"Freshmen Seminar",                    tags:["COMP1901",], },
          { icon:"mdi-currency-sign"          , name:"Programming Fundamentals",            tags:["COMP1011",], },
          { icon:"mdi-laptop"                 , name:"Introduction to Computer Systems",    tags:["COMP1411",], },
          { icon:"mdi-chart-scatter-plot"            , name:"Introduction to Data Analysis",       tags:["COMP1433",], },
          { icon:"mdi-iframe-array"           , name:"Data Structures",                     tags:["COMP2011",], },
          { icon:"mdi-code-braces-box"        , name:"Object-Oriented Programming",         tags:["COMP2021",], },
          { icon:"mdi-database"               , name:"Database Systems",                    tags:["COMP2411",], },
          { icon:"mdi-network"                , name:"Computer Networking",                 tags:["COMP2322",], },
          { icon:"mdi-cpu-64-bit"             , name:"Computer Organization",               tags:["COMP2421",], },
          { icon:"mdi-linux"                  , name:"Operating Systems",                   tags:["COMP2432",], },
          { icon:"mdi-code-not-equal-variant" , name:"Web Application",                     tags:["COMP3421",], },
        ],
        other: [
          {
            icon:"mdi-book",
            name:"Splendours of Imperial China",
            tags:["CC1C15P",], 
          },
          {
            icon:"mdi-tools",
            name:"Engineering and Environmental Management",
            tags:["ME1D01",], 
          },
          {
            icon:"mdi-account-group",
            name:"Tomorrow's Leaders",
            tags:["APSS1L01",], 
          },
          {
            icon:"mdi-format-letter-case",
            name:"English for University Studies",
            tags:["ELC1013",], 
          },
          {
            icon:"mdi-format-annotation-plus",
            name:"Advanced English Reading and Writing Skills",
            tags:["ELC2011",], 
          },
          {
            icon:"mdi-progress-question",
            name:"Introductory Probability",
            tags:["AMA1104",], 
          },
          {
            icon:"mdi-chart-bell-curve",
            name:"Calculus for Engineers",
            tags:["AMA1130",], 
          },
          {
            icon:"mdi-vector-curve",
            name:"Mathematics I",
            tags:["AMA2111",], 
          },
        ]
      },
      gistlist: [
        { gist: "https://gist.github.com/Moenupa/58f69668a4db5aa5da0b74b901230ffc.js", name: "COVID-19 Statistics Box" },
        { gist: "https://gist.github.com/Moenupa/5848c95b83cb449f79e14b16615039fc.js", name: "Code::Stats Statistics" },
        { gist: "https://gist.github.com/Moenupa/30493d0c7ead93d676b4d6c8a29dbb8a.js", name: "Music Statistics" },
        { gist: "https://gist.github.com/Moenupa/dd5e2c295036bcfa7251a8dfe5facabc.js", name: "Steam Statistics" },
        { gist: "https://gist.github.com/Moenupa/aab911df7d12ffabb0ff9e8cb5545597.js", name: "Github Statistics" },
      ]
    }
  },
  mounted() {
  }
}
</script>