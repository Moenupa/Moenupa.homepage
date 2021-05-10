<template>
  <div class="banner">
    <div class="container grid-container text-dark">
      <div class="bg-light text-center p-3" id="profile">
        <Profile />
      </div>
      <div class="bg-light text-center p-3" id="interests">
        <h2>Interests</h2>
        <table class="table text-left m-0">
          <tbody>
            <IconRow v-for="item in interestlist" :info="item" :key="item.id"/>
          </tbody>
        </table>
      </div>
      <div class="bg-light text-center p-3" id="introduction">
        <h2>Introduction</h2>
        <p>👋 Hello, there!</p>
        <p>I am WANG Meng, a year-2 Computing student from Hong Kong PolyU. I started the minor in mathematics in Oct, 2020. I am taking COMP3421 (Web Application Design and Development) this semester.</p>
      </div>
      <div class="bg-light text-center p-3" id="courses">
        <h2>Courses</h2>
        <table class="table text-left m-0">
          <tbody>
            <IconRow v-for="item in courselist" :info="item" :key="item.id"/>
          </tbody>
        </table>
      </div>
      <div class="bg-light text-center py-3" id="github">
        <GistBox gistscript="https://gist.github.com/Moenupa/aab911df7d12ffabb0ff9e8cb5545597.js" />
      </div>
      <div class="bg-light text-center py-3" id="steam">
        <GistBox gistscript="https://gist.github.com/Moenupa/dd5e2c295036bcfa7251a8dfe5facabc.js" />
      </div>
      <div class="bg-light text-center py-3" id="netease-music">
        <GistBox gistscript="https://gist.github.com/Moenupa/30493d0c7ead93d676b4d6c8a29dbb8a.js" />
      </div>
      <div class="bg-light text-center py-3" id="codestats">
        <GistBox gistscript="https://gist.github.com/Moenupa/5848c95b83cb449f79e14b16615039fc.js" />
      </div>
      <div class="bg-light text-center py-3" id="covid">
        <GistBox gistscript="https://gist.github.com/Moenupa/58f69668a4db5aa5da0b74b901230ffc.js" />
      </div>
    </div>
    <FunctionBar />
  </div>
</template>

<style>
.grid-container {
  display: grid !important;
  grid: auto-flow dense/ repeat(auto-fit, minmax(5rem, auto));
  grid-gap: 1rem;
}

@media (max-width: 576px) {
  .grid-container {
    grid-template-areas: 
      "profile"   
      "introduction"
      "courses"
      "interests"
      "github"
      "codestats"
      "covid"
      "steam"
      "music"; 
  }
}
@media (min-width: 576px) {
  .grid-container {
    grid-template-areas: 
      "profile profile"   
      "introduction interests"
      "introduction interests"
      "courses courses"
      "github github"
      "codestats codestats"
      "covid covid"
      "steam steam"
      "music music"; 
  }
}
@media (min-width: 768px) {
  .grid-container {
    grid-template-areas: 
      "profile profile"   
      "introduction introduction"
      "interests courses"
      "github courses"
      "covid courses"
      "codestats codestats"
      "steam steam"
      "music music"; 
  }
}
@media (min-width: 992px) {
  .grid-container {
    grid-template-areas: 
      "profile profile profile"   
      "introduction introduction courses"
      "interests interests courses"
      "codestats codestats courses"
      "github covid courses"
      "github steam steam"
      "music music ."; 
  }
}
@media (min-width: 1200px) {
  .grid-container {
    grid-template-areas: 
      "profile profile profile"   
      "introduction introduction courses"
      "interests interests courses"
      "codestats covid courses"
      "codestats . courses"
      "codestats steam steam"
      "github steam steam"
      "github music music"
      "github . ."; 
  }
}

.banner {
  width: inherit;
  padding-top: 5rem;
  background: linear-gradient(#00000000, var(--white) 80%),
    left top / cover url("/static/img/87535316_p0.png") no-repeat fixed;
}
.grid-container > * {
  display: block;
  justify-content: initial;
  align-items: initial;
  border-radius: .5rem;
  box-shadow: rgba(96,96,96,.5) 0 0 .5rem;
}
.table td {
  border-top: 1px solid rgba(var(--dark-rgb), .5) !important;
}
table tr:first-child, table tr:first-child > td {
  border-top: none !important;
}

table, table tr, table th, table td {
  color: inherit !important;
}
p {
  text-align: initial;
}
p:last-child {
  margin-bottom: 0;
}

#profile { grid-area: profile }
#interests { grid-area: interests }
#courses { grid-area: courses }
#introduction { grid-area: introduction }
#github { grid-area: github }
#steam { grid-area: steam }
#netease-music { grid-area: music }
#codestats { grid-area: codestats; }
#covid { grid-area: covid; }

</style>

<script>
export default {
  data() {
    return {
      interestlist: [
        { icon:"mdi-music-box"      , name:"Music",             tags:[] },
        { icon:"mdi-chart-box"      , name:"Machine Learning",  tags:[] },
        { icon:"mdi-gamepad-circle" , name:"Gaming",            tags:[] },
        { icon:"mdi-web-box"        , name:"Front-End",         tags:["Vue"] },   
      ],
      courselist: [
        { icon:"mdi-code-greater-than"      , name:"Computational Thinking",              tags:["COMP1002",], },
        { icon:"mdi-account-group"          , name:"Freshmen Seminar",                    tags:["COMP1901",], },
        { icon:"mdi-currency-sign"          , name:"Programming Fundamentals",            tags:["COMP1011",], },
        { icon:"mdi-laptop"                 , name:"Introduction to Computer Systems",    tags:["COMP1411",], },
        { icon:"mdi-data-matrix"            , name:"Introduction to Data Analysis",       tags:["COMP1433",], },
        { icon:"mdi-iframe-array"           , name:"Data Structures",                     tags:["COMP2011",], },
        { icon:"mdi-code-braces-box"        , name:"Object-Oriented Programming",         tags:["COMP2021",], },
        { icon:"mdi-database"               , name:"Database Systems",                    tags:["COMP2411",], },
        { icon:"mdi-network"                , name:"Computer Networking",                 tags:["COMP2322",], },
        { icon:"mdi-cpu-64-bit"             , name:"Computer Organization",               tags:["COMP2421",], },
        { icon:"mdi-linux"                  , name:"Operating Systems",                   tags:["COMP2432",], },
        { icon:"mdi-code-not-equal-variant" , name:"Web Application",                     tags:["COMP3421",], },
      ],
    }
  },
  mounted: function () {
    $('[data-toggle="tooltip"]').tooltip();
  }
}
</script>