<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>
*::-webkit-scrollbar {
  width: .8rem;
  height: .6rem;
}

*::-webkit-scrollbar-track {
  background: var(--light);
}

*::-webkit-scrollbar-thumb {
  background-color: #999;
  border-radius: .4rem;
  border: .15rem solid var(--light);
}

:root[data-theme="dark"] {
  --white: #000;
  --gray: #6c757d;
  --gray-dark: #f8f9fa;
  --secondary: #6c757d;
  --light: #343a40;
  --dark: #f8f9fa;
}
body {
  background-color: var(--white);
}
</style>
