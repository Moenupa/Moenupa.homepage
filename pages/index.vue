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
        <p>I am WANG Meng, a year-2 Computing student from Hong Kong PolyU. I started the minor in mathematics in Oct, 2020. I am taking COMP3421 (Web Application Design and Development) this semester.</p>
      </div>
      <div class="bg-light text-center p-3 courses" >
        <h2>Courses</h2>
        <table class="table text-left m-0">
          <tbody>
            <tr><td><span class="mdi mdi-code-greater-than"></span></td><td>COMP1002 Computational Thinking</td></tr>
            <tr><td><span class="mdi mdi-account-group"></span></td><td>COMP1901 Freshmen Seminar</td></tr>
            <tr><td><span class="mdi mdi-currency-sign"></span></td><td>COMP1011 Programming Fundamentals</td></tr>
            <tr><td><span class="mdi mdi-laptop"></span></td><td>COMP1411 Introduction to Computer Systems</td></tr>
            <tr><td><span class="mdi mdi-data-matrix"></span></td><td>COMP1433 Introduction to Data Analysis</td></tr>
            <tr><td><span class="mdi mdi-database"></span></td><td>COMP2411 Database Systems</td></tr>
            <tr><td><span class="mdi mdi-code-not-equal-variant"></span></td><td>COMP3421 Web Application</td></tr>
          </tbody>
        </table>
      </div>
      <div class="bg-light text-center py-3 github">
        <GistBox gistscript="https://gist.github.com/Moenupa/aab911df7d12ffabb0ff9e8cb5545597.js" />
      </div>
      <div class="bg-light text-center p-3 steam">
        <GistBox gistscript="https://gist.github.com/Moenupa/dd5e2c295036bcfa7251a8dfe5facabc.js" />
      </div>
      <div class="bg-light text-center p-3 netease-music">
        <GistBox gistscript="https://gist.github.com/Moenupa/30493d0c7ead93d676b4d6c8a29dbb8a.js" />
      </div>
    </div>
  </div>
</template>

<style>
.banner {
  width: inherit;
  padding-top: 5rem;
  background: linear-gradient(#00000000, var(--white) 80%),
    left / cover url(/Moenupa.homepage/static/img/87535316_p0.png) no-repeat fixed;
}
.grid-container {
  display: grid !important;
  grid: auto-flow dense/ repeat(auto-fit, minmax(15rem, auto));
  grid-gap: 1rem;
  grid-template-areas: "profile profile profile"   
                       "introduction introduction courses"
                       "interests interests courses"
                       "github . courses"
                       "github steam steam"
                       "github netease-music netease-music"; 
}
.grid-container > * {
  display: block;
  justify-content: initial;
  align-items: initial;
  border-radius: .5rem;
  box-shadow: rgba(96,96,96,.5) 0 0 .5rem;
}

table tr:first-child, table tr:first-child > td {
  border-top: none;
}
table, table tr, table th, table td {
  color: inherit !important;
  border-color: rgba(var(--dark-rgb), .5);
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

</style>

<script>
export default {
  head: {
    link: [
      { rel: 'stylesheet', type: 'text/css', href: '/Moenupa.homepage/static/css/gist-box.css' },
    ],
  }
}
</script>