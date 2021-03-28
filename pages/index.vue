<template>
  <div class="banner">
    <div class="container grid-container text-dark">
      <div class="bg-light text-center p-3 profile">
        <Profile />
      </div>
      <div class="bg-light text-center p-3 interests">
        <h2>Interests</h2>
        <table class="table text-left m-0">
          <tbody>
            <tr><td><span class="mdi mdi-music-box"></span></td><td>Music</td></tr>
            <tr><td><span class="mdi mdi-chart-box"></span></td><td>Machine Learning</td></tr>
            <tr><td><span class="mdi mdi-gamepad-circle"></span></td><td>Gaming</td></tr>
            <tr><td><span class="mdi mdi-web-box"></span></td><td>Front-End</td></tr>
          </tbody>
        </table>
      </div>
      <div class="bg-light text-center p-3 introduction" >
        <h2>Introduction</h2>
        <p>👋 Hello, there!</p>
        <p>I am WANG Meng, a year-2 Computing student from Hong Kong PolyU. I started the minor in mathematics in Oct, 2020. I am taking COMP3421 (Web Application Design and Development) this semester.</p>
      </div>
      <div class="bg-light text-center p-3 courses" >
        <h2>Courses</h2>
        <table class="table text-left m-0">
          <tbody>
            <tr><td><span class="mdi mdi-code-greater-than"></span></td><td>COMP<br>1002</td><td>Computational Thinking</td></tr>
            <tr><td><span class="mdi mdi-account-group"></span></td><td>COMP<br>1901</td><td>Freshmen Seminar</td></tr>
            <tr><td><span class="mdi mdi-currency-sign"></span></td><td>COMP<br>1011</td><td>Programming Fundamentals</td></tr>
            <tr><td><span class="mdi mdi-laptop"></span></td><td>COMP<br>1411</td><td>Introduction to Computer Systems</td></tr>
            <tr><td><span class="mdi mdi-data-matrix"></span></td><td>COMP<br>1433</td><td>Introduction to Data Analysis</td></tr>
            <tr><td><span class="mdi mdi-iframe-array"></span></td><td>COMP<br>2011</td><td>Data Structures</td></tr>
            <tr><td><span class="mdi mdi-code-braces-box"></span></td><td>COMP<br>2021</td><td>Object-Oriented Programming</td></tr>
            <tr><td><span class="mdi mdi-database"></span></td><td>COMP<br>2411</td><td>Database Systems</td></tr>
            <tr><td><span class="mdi mdi-network"></span></td><td>COMP<br>2322</td><td>Computer Networking</td></tr>
            <tr><td><span class="mdi mdi-cpu-64-bit"></span></td><td>COMP<br>2421</td><td>Computer Organization</td></tr>
            <tr><td><span class="mdi mdi-linux"></span></td><td>COMP<br>2432</td><td>Operating Systems</td></tr>
            <tr><td><span class="mdi mdi-code-not-equal-variant"></span></td><td>COMP<br>3421</td><td>Web Application</td></tr>
          </tbody>
        </table>
      </div>
      <div class="bg-light text-center py-3 github">
        <GistBox gistscript="https://gist.github.com/Moenupa/aab911df7d12ffabb0ff9e8cb5545597.js" />
      </div>
      <div class="bg-light text-center py-3 steam">
        <GistBox gistscript="https://gist.github.com/Moenupa/dd5e2c295036bcfa7251a8dfe5facabc.js" />
      </div>
      <div class="bg-light text-center py-3 netease-music">
        <GistBox gistscript="https://gist.github.com/Moenupa/30493d0c7ead93d676b4d6c8a29dbb8a.js" />
      </div>
      <div class="bg-light text-center py-3 codestats">
        <GistBox gistscript="https://gist.github.com/Moenupa/5848c95b83cb449f79e14b16615039fc.js" />
      </div>
      <div class="bg-light text-center py-3 covid">
        <GistBox gistscript="https://gist.github.com/Moenupa/58f69668a4db5aa5da0b74b901230ffc.js" />
      </div>
    </div>
    <!-- <FunctionBar /> -->
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
    grid-template-areas: "profile"   
                         "introduction"
                         "courses"
                         "interests"
                         "github"
                         "codestats"
                         "covid"
                         "steam"
                         "netease-music"; 
  }
}
@media (min-width: 576px) {
  .grid-container {
    grid-template-areas: "profile profile"   
                         "introduction ."
                         "introduction interests"
                         ". interests"
                         "github interests"
                         "courses courses"
                         "codestats codestats"
                         "covid covid"
                         "steam steam"
                         "netease-music netease-music"; 
  }
}
@media (min-width: 768px) {
  .grid-container {
    grid-template-areas: "profile profile"   
                         "introduction introduction"
                         "interests courses"
                         "github courses"
                         "codestats codestats"
                         "covid covid"
                         "steam steam"
                         "netease-music netease-music"; 
  }
}

@media (min-width: 992px) {
  .grid-container {
    grid-template-areas: "profile profile profile"   
                          "introduction introduction courses"
                          "interests interests courses"
                          "codestats codestats courses"
                          "covid covid courses"
                          "github . courses"
                          "github steam steam"
                          "github netease-music netease-music"; 
  }
}

.banner {
  width: inherit;
  padding-top: 5rem;
  background: linear-gradient(#00000000, var(--white) 80%),
    left top / cover url(/Moenupa.homepage/static/img/87535316_p0.png) no-repeat fixed;
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

.profile { grid-area: profile }
.interests { grid-area: interests }
.courses { grid-area: courses }
.introduction { grid-area: introduction }
.github { grid-area: github }
.steam { grid-area: steam }
.netease-music { grid-area: netease-music }
.codestats { grid-area: codestats; }
.covid { grid-area: covid; }

</style>

<script>
</script>