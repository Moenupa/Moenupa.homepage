<template>
  <div class="container">
    <Header />
    <h1 class="title">Moenupa.homepage</h1>
    <div class="links">
      <a
        href="https://github.com/nuxt/nuxt.js"
        target="_blank"
        rel="noopener noreferrer"
        class="button--grey"
      >
        GitHub
      </a>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
}
</style>
