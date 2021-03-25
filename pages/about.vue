<template>
  <div>
    <NuxtLogo />
    <h1 class="title">Moenupa.homepage</h1>
    <h3 class="subtitle">Powered by Nuxt.js</h3>
    <div class="links" style="padding-top:15px">
      <a
        href="https://nuxtjs.org/"
        target="_blank"
        rel="noopener noreferrer"
        class="btn-nuxt"
      >
        Documentation
      </a>
      <a
        href="https://github.com/nuxt/nuxt.js"
        target="_blank"
        rel="noopener noreferrer"
        class="btn-nuxt-github"
      >
        GitHub
      </a>
    </div>
  </div>
</template>

<style scoped>
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
}

.btn-nuxt, .btn-nuxt-github {
  display: inline-block;
  border-radius: 4px;
  text-decoration: none;
  padding: 10px 30px;
  font-weight: 600;
}

.btn-nuxt {
  border: 1px solid #108775;
  color: #108775;
}

.btn-nuxt:hover {
  color: var(--light);
  background-color: #108775;
}

.btn-nuxt-github {
  border: 1px solid var(--gray);
  color: var(--gray);
  margin-left: 15px;
}

.btn-nuxt-github:hover {
  color: var(--light);
  background-color: var(--gray);
}

.title, .subtitle {
  font-weight: 300;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-size: 8rem;
  color: #2F495E;
  letter-spacing: 1px;
}

[data-theme="dark"] .title {
  color: #00C58E;
}

.subtitle {
  font-size: 3rem;
  color: #108775;
  word-spacing: 5px;
  padding-bottom: 15px;
}

</style>

<script>
export default {
  layout: 'simple'
}
</script>
