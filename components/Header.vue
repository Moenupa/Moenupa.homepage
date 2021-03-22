<template>
  <div class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <a href="/" class="brand">Moenupa.homepage</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="mdi mdi-menu"></span>
      <span class="hamburger-upper"></span>
      <span class="hamburger-lower"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto text-center">
        <li class="nav-item">
          <a class="nav-link" href="/">
            <i class="mdi mdi-home"></i>
            <span>Home</span>
          </a>
        </li>
        <li class="nav-item">
          <NuxtLink class="nav-link" to="/about">
            <i class="mdi mdi-information"></i>
            <span>About</span>
          </NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink class="nav-link" to="/links">
            <i class="mdi mdi-link"></i>
            <span>Link</span>
          </NuxtLink>
        </li>
        <li class="nav-item" id="search-btn">
          <a class="nav-link" data-toggle="modal" data-target="#modalSearch">
            <i class="mdi mdi-magnify"></i>
            <span>Search</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="theme-switch" href="javascript:">
            <i class="mdi mdi-theme-light-dark"></i>
            <span>Light/Dark</span>
          </a>
        </li>
      </ul>
    </div>
    
  </div>
</template>

<style>
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

</style>

<script>
</script>
