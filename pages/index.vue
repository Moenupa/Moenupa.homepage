<template>
  <div>
    <Header />
    <div class="banner">
      <div class="container">
        <div class="profile bg-light">
          <div class="selfie">
            <img src="/Moenupa.homepage/static/img/87535316_p0.png" alt="">
            <!-- author link: https://www.pixiv.net/users/23223750 not yet authorized-->
          </div>
          <ul>
            <li><i class="mdi mdi-github"></i>Github: <a href="https://github.com/Moenupa">Moenupa</a></li>
            <li><i class="mdi mdi-cellphone"></i>Phone: +852 5496 8569</li>
            <li><i class="mdi mdi-email"></i>E-Mail: <a href="mailto:Moenupa@outlook.com">Moenupa@outlook.com</a></li>
            <li><i class="mdi mdi-wechat"></i>Wechat: <a href="https://u.wechat.com/MJ28uzxd5_hdvmexQCcPyws">Moenupa</a></li>
          </ul>
        </div>
        <div class="interests bg-light">
          <h3>Interests</h3>
          <ul>
            <li><i class="mdi mdi-music-box"></i>Music</li>
            <li><i class="mdi mdi-chart-box"></i>Machine Learning</li>
            <li><i class="mdi mdi-gamepad-circle"></i>Gaming</li>
            <li><i class="mdi mdi-web-box"></i>Front-End</li>
          </ul>
        </div>
        <div class="introduction bg-light">
          <h3>Introduction</h3>
          <p>👋 Hello, there!</p>
          <p>I am WANG Meng, a year-2 Computing student from Hong Kong PolyU. I started the minor in mathematics in Oct, 2020. I am taking COMP3421 Web Application Design and Development in this semester.</p>
        </div>
        <div class="courses bg-light">
          <h3>Courses</h3>
          <ul>
            <li><i class="mdi mdi-code-greater-than"></i>COMP1002 Computational Thinking</li>
            <li><i class="mdi mdi-account-group"></i>COMP1901 Freshmen Seminar</li>
            <li><i class="mdi mdi-currency-sign"></i>COMP1011 Programming Fundamentals</li>
            <li><i class="mdi mdi-laptop"></i>COMP1411 Introduction to Computer Systems</li>
            <li><i class="mdi mdi-data-matrix"></i>COMP1433 Introduction to Data Analysis</li>
            <li><i class="mdi mdi-database"></i>COMP2411 Database Systems</li>
            <li><i class="mdi mdi-code-not-equal-variant"></i>COMP3421 Web App</li>
          </ul>
        </div>
        <div class="courses2 bg-light">
          <h3>Courses</h3>
          <ul>
            <li><i class="mdi mdi-code-greater-than"></i>COMP1001 Python</li>
            <li><i class="mdi mdi-code-not-equal-variant"></i>COMP3421 Web App</li>
          </ul>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style>
.banner {
  width: 100vw;
  padding-top: 100px;
  background: linear-gradient(#00000000, var(--white) 60%),
    left / cover url(/Moenupa.homepage/static/img/87535316_p0.png) no-repeat fixed;
}
.profile img {
  width:200px;
  height:200px;
  margin:10px 40px 20px;
  border-radius:50%;
  object-fit: cover;
}
.container {
  min-height: 100vh;
  display: grid !important;
  grid: auto-flow dense/ repeat(auto-fit, minmax(300px, 1fr));
  justify-content: center;
  grid-gap: 20px 20px;
  grid-template-areas: "introduction profile courses"   
                       "introduction profile courses2"
                       "interests interests interests"; 
}
.container > .bg-light {
  padding: 10px;
  height: 400px;
  display: block;
  justify-content: initial;
  align-items: initial;
  border-radius: 10px;
  overflow: hidden;
  scroll-behavior: auto;
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
p {
  text-align: initial;
}
p:last-child {
  margin-bottom: 0;
}
</style>

<script>
export default {
  script: [
    { src: '/Moenupa.homepage/static/js/moenupa.js' }
  ]
}
</script>