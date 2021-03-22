<template>
  <div>
    <Header />
    <div class="banner">
      <div class="container grid-container">
        <div class="bg-light text-center p-3 profile">
          <div class="selfie">
            <img src="/Moenupa.homepage/static/img/87535316_p0.png" alt="">
            <!-- author link: https://www.pixiv.net/users/23223750 not yet authorized-->
          </div>
          <h1>Moenupa WANG</h1>
          <ul>
            <li><i class="mdi mdi-cellphone"></i>Phone: +852 5496 8569</li>
            <li><i class="mdi mdi-github"></i>Github: <a href="https://github.com/Moenupa">Moenupa</a></li>
            <li><i class="mdi mdi-email"></i>E-Mail: <a href="mailto:Moenupa@outlook.com">Moenupa@outlook.com</a></li>
            <li><i class="mdi mdi-wechat"></i>Wechat: <a href="https://u.wechat.com/MJ28uzxd5_hdvmexQCcPyws">Moenupa</a></li>
          </ul>
          <div>
            <span>
              <a href="https://github.com/Moenupa"><span class="mdi mdi-github mdi-24px"></span></a>
            </span>
            <span>
              <a href="mailto:Moenupa@outlook.com"><span class="mdi mdi-email mdi-24px"></span></a>
            </span>
            <span>
              <a href="https://u.wechat.com/MJ28uzxd5_hdvmexQCcPyws"><span class="mdi mdi-wechat mdi-24px"></span></a>
            </span>
          </div>
        </div>
        <div class="bg-light text-center p-3 interests">
          <h2>Interests</h2>
          <ul>
            <li><i class="mdi mdi-music-box"></i>Music</li>
            <li><i class="mdi mdi-chart-box"></i>Machine Learning</li>
            <li><i class="mdi mdi-gamepad-circle"></i>Gaming</li>
            <li><i class="mdi mdi-web-box"></i>Front-End</li>
          </ul>
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
              <tr>
                <td><i class="mdi mdi-code-greater-than"></i></td>
                <td>COMP1002 Computational Thinking</td>
              </tr>
              <tr>
                <td><i class="mdi mdi-account-group"></i></td>
                <td>COMP1901 Freshmen Seminar</td>
              </tr>
              <tr>
                <td><i class="mdi mdi-currency-sign"></i></td>
                <td>COMP1011 Programming Fundamentals</td>
              </tr>
              <tr>
                <td><i class="mdi mdi-laptop"></i></td>
                <td>COMP1411 Introduction to Computer Systems</td>
              </tr>
              <tr>
                <td><i class="mdi mdi-data-matrix"></i></td>
                <td>COMP1433 Introduction to Data Analysis</td>
              </tr>
              <tr>
                <td><i class="mdi mdi-database"></i></td>
                <td>COMP2411 Database Systems</td>
              </tr>
              <tr>
                <td><i class="mdi mdi-code-not-equal-variant"></i></td>
                <td>COMP3421 Web Application</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="bg-light text-center gist-box github">
          <script src="https://gist.github.com/Moenupa/aab911df7d12ffabb0ff9e8cb5545597.js"></script>
        </div>
        <div class="bg-light text-center gist-box steam">
          <script src="https://gist.github.com/Moenupa/dd5e2c295036bcfa7251a8dfe5facabc.js"></script>
        </div>
        <div class="bg-light text-center gist-box netease-music">
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
                       "github steam steam"
                       "github netease-music netease-music"; 
}
.grid-container > * {
  display: block;
  justify-content: initial;
  align-items: initial;
  border-radius: 10px;
}

ul {
  justify-content: initial;
  align-items: initial;
  list-style: none;
  text-align: initial;
  padding: 0;
  margin-bottom: 0;
}
li > .mdi {
  margin-right: 5px;
}
table > tr:first-child > td, table > tr:first-child > td {
  border-top: none;
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

.gist-box .gist * {
  margin: 0 !important;
  border: none !important;
  background-color: transparent;
}
.gist .gist-data, .gist .gist-meta {
  background-color: var(--light) !important;
}
.gist .gist-data tr:first-child {
  margin-top: .5rem;
}
.gist .gist-data tr:last-child {
  margin-bottom: .5rem;
}

*::-webkit-scrollbar {
  width: 1rem;               /* width of the entire scrollbar */
}

*::-webkit-scrollbar-track {
  background: var(--light);        /* color of the tracking area */
}

*::-webkit-scrollbar-thumb {
  background-color: #999;    /* color of the scroll thumb */
  border-radius: .5rem;       /* roundness of the scroll thumb */
  border: 3px solid var(--light);  /* creates padding around scroll thumb */
}
</style>

<script>
</script>