<template>
  <div class="text-dark">
    <Header />
    <div class="banner">
      <div class="container grid-container">
        <div class="bg-light text-center p-3 profile">
          <div class="selfie">
            <img src="/Moenupa.homepage/static/img/87535316_p0.png" alt="">
            <!-- author link: https://www.pixiv.net/users/23223750 not yet authorized-->
          </div>
          <h1>Moenupa WANG</h1>
          <h5>Undergraduate Student at HKPolyU</h5>
          <div>
            <span><a href="https://github.com/Moenupa" target="_blank"><span class="mdi mdi-github mdi-24px"></span></a></span>
            <span><a href="mailto:Moenupa@gamil.com" target="_blank"><span class="mdi mdi-email mdi-24px"></span></a></span>
            <span><a href="https://u.wechat.com/MJ28uzxd5_hdvmexQCcPyws" target="_blank"><span class="mdi mdi-wechat mdi-24px"></span></a></span>
            <span><a href="https://twitter.com/Moenupa" target="_blank"><span class="mdi mdi-twitter mdi-24px"></span></a></span>
            <span><a href="https://facebook.com/Moenupa" target="_blank"><span class="mdi mdi-facebook mdi-24px"></span></a></span>
          </div>
          <div>
            <span><a href="https://music.163.com/#/user/home?id=392696583" target="_blank"><span class="mdi mdi-music-circle mdi-24px"></span></a></span>
            <span><a href="https://steamcommunity.com/id/moenupa/" target="_blank"><span class="mdi mdi-steam mdi-24px"></span></a></span>
            <span><a href="https://youtube.com/channel/UCbOOUmgSADEx9TK4gMQS85w" target="_blank"><span class="mdi mdi-youtube mdi-24px"></span></a></span>
            <span><a href="https://m.bilibili.com/space/380763134" target="_blank"><span class="mdi mdi-video-box mdi-24px"></span></a></span>
          </div>
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
          <p>I am WANG Meng, a year-2 Computing student from Hong Kong PolyU. I started the minor in mathematics in Oct, 2020. I am taking COMP3421 Web Application Design and Development in this semester.</p>
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
        <div class="bg-light text-center py-3 gist-box github">
          <script src="https://gist.github.com/Moenupa/aab911df7d12ffabb0ff9e8cb5545597.js"></script>
        </div>
        <div class="bg-light text-center p-3 gist-box steam">
          <script src="https://gist.github.com/Moenupa/dd5e2c295036bcfa7251a8dfe5facabc.js"></script>
        </div>
        <div class="bg-light text-center p-3 gist-box netease-music">
          <script src="https://gist.github.com/Moenupa/30493d0c7ead93d676b4d6c8a29dbb8a.js"></script>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style>
.banner {
  width: inherit;
  padding-top: 5rem;
  background: linear-gradient(#00000000, var(--white) 80%),
    left / cover url(/Moenupa.homepage/static/img/87535316_p0.png) no-repeat fixed;
}
.profile img {
  width:10rem;
  height:10rem;
  margin:.5rem 2rem 1rem;
  border-radius:50%;
  object-fit: cover;
}
.profile span + span {
  margin-left: 1rem;
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
  border-radius: 10px;
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

.gist-box * {
  color: inherit !important;
  margin: 0 !important;
  border: none !important;
  background-color: transparent !important;
}
</style>

<script>
</script>