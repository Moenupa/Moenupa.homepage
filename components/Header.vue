<template>
  <div class="navbar fixed-top nav-bar-expand-lg scrolling-navbar navbar-dark">
    <a href="/" class="brand"></a>
    <button id="navbar-toggler-btn" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <div class="animated-icon"><span></span><span></span><span></span></div>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto text-center">
        <li class="nav-item">
          <a class="nav-link" href="/">
            <i class="mdi mdi-home"></i>
            Home
          </a>
        </li>
        <li class="nav-item">
          <NuxtLink class="nav-link" to="/about">
            <i class="iconfont icon-user-fill"></i>
            About
          </NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink class="nav-link" href="/links">
            <i class="iconfont icon-link-fill"></i>
            Links
          </NuxtLink>
        </li>
        <li class="nav-item" id="search-btn">
          <a class="nav-link" data-toggle="modal" data-target="#modalSearch">&nbsp;<i class="mdi mdi-magnify"></i>&nbsp;</a>
        </li>
        <li class="nav-item" id="themeSwitch">
          <a class="nav-link" href="javascript:">&nbsp;<i class="mdi mdi-theme-light-dark"></i>&nbsp;</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>

</style>

<script>
</script>
