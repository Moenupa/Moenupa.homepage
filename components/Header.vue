<template>
  <div class="navbar navbar-expand-lg navbar-light fixed-top">
    <a href="#" class="brand mdi mdi-alpha-m-circle">Moenupa.homepage</a>
    <button class="navbar-toggler btn btn-light" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="mdi mdi-menu"></span>
      <!-- <span class="hamburger-upper"></span>
      <span class="hamburger-lower"></span> -->
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto text-center">
        <li class="nav-item">
          <NuxtLink class="nav-link" to="/">
            <span class="mdi mdi-home"></span>
            <span>Home</span>
          </NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink class="nav-link" to="/about">
            <span class="mdi mdi-information"></span>
            <span>About</span>
          </NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink class="nav-link" to="/links">
            <span class="mdi mdi-link"></span>
            <span>Link</span>
          </NuxtLink>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="theme-switch" href="javascript:">
            <span class="mdi mdi-theme-light-dark"></span>
            <span>Light/Dark</span>
          </a>
        </li>
      </ul>
    </div>
    
  </div>
</template>

<style scoped>
/* .hamburger-upper, .hamburger-lower {
  display: block;
  height: 30px;
  background-color: #000;
  position: relative;
}
.upper {
  top: 80px;
  transition: .5s transform ease-in-out, .5s top ease-in-out .5s;
}
.lower {
  top: 80px;
  transition: .5s transform ease-in-out, .5s top ease-in-out .5s;
} */
.navbar {
  background-color: rgba(var(--light-rgb),.5);
}
</style>

<script>
</script>