<template>
  <div class="function-bar bg-light">
    <div id="functions" class="collapse">
      <div><span class="mdi mdi-functions"></span></div>
      <div><span class="mdi mdi-functions"></span></div>
      <div><span class="mdi mdi-functions"></span></div>
    </div>
    <div>
      <a id="bar" data-toggle="collapse" href="#functions" role="button" aria-expanded="false" aria-controls="functions">
        <span class="mdi mdi-function-variant"></span>
      </a>
    </div>
  </div>
</template>
<style scoped>
  .function-bar {
    display: flex;
    position: fixed;
    left: 5%;
    bottom: 5%;
    justify-content: center;
    align-items: center;
    width: 1rem;
    border-radius: .5rem;
    flex-direction: column;
  }
  #bar {
    height: 1rem;
  }
  span.mdi {
    height: 1rem;
    width: auto;
  }
</style>
<script>
export default {
  
}
</script>