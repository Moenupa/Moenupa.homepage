<template>
  <div class="function-bar bg-light">
    <div id="functions" class="text-dark collapse">
      <button class="btn btn-light" id="return-top" data-toggle="tooltip" data-placement="right" title="Return to Top">
        <span class="mdi mdi-arrow-up-drop-circle-outline"></span>
      </button>
      <button class="btn btn-light" id="theme-switch" data-toggle="tooltip" data-placement="right" title="Switch Light/Dark">
        <span class="mdi mdi-weather-sunny"></span>
      </button>
      <button class="btn btn-light" id="function3" data-toggle="tooltip" data-placement="right" title="Function2 (UnderDevelopment)">
        <span class="mdi mdi-function"></span>
      </button>
      <button class="btn btn-light" id="function4" data-toggle="tooltip" data-placement="right" title="Function3 (UnderDevelopment)">
        <span class="mdi mdi-function"></span>
      </button>
    </div>
    <button id="bar" class="btn btn-light" type="button" data-toggle="collapse" data-target="#functions" aria-expanded="false" aria-controls="functions">
      <span class="mdi mdi-function-variant" data-toggle="tooltip" data-placement="right" title="Functions"></span>
    </button>
  </div>
</template>
<style scoped>
.function-bar {
  --bar-width: 4rem;
  --bar-margin: calc(-1 * var(--bar-width) / 5);
  position: fixed;
  left: 5%;
  bottom: 5%;

  min-height: var(--bar-width);
  font-size: 1.4rem;
  width: var(--bar-width);
  border-radius: calc(var(--bar-width) / 2);
}

.function-bar * {
  width: inherit;
  font-size: inherit;
}

#functions {
  padding: calc(-1 * var(--bar-margin)) 0;
}

#functions > .btn {
  margin: var(--bar-margin) 0;
}

/* barsettings */
#functions.collapse + #bar,
#functions.show + #bar {
  background-color: var(--light);
}
#functions.collapse + #bar {
  box-shadow: none !important;
}
.function-bar,
#functions.show + #bar,
#functions > .btn:hover {
  box-shadow: 0 0 0.5rem rgb(96 96 96 / 50%) !important;
}

.btn {
  height: var(--bar-width);
  border-radius: calc(var(--bar-width) / 2);
  border: none;
  background-color: transparent;
  text-align: center;
  padding: 0;
}

.btn:hover {
  background-color: var(--light);
  font-size: 1.7rem;
}
</style>
<script>
</script>