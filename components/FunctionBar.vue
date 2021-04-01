<template>
  <div class="function-bar bg-light">
    <div id="functions" class="text-dark collapse">
      <button class="btn btn-light" id="theme-switch" data-toggle="tooltip" data-placement="right" title="Switch Light/Dark">
        <span class="mdi mdi-24px mdi-theme-light-dark"></span>
      </button>
      <button class="btn btn-light" id="return-top" data-toggle="tooltip" data-placement="right" title="Return to Top">
        <span class="mdi mdi-24px mdi-arrow-up-drop-circle-outline"></span>
      </button>
      <button class="btn btn-light" id="function3" data-toggle="tooltip" data-placement="right" title="Function2 (UnderDevelopment)">
        <span class="mdi mdi-24px mdi-function"></span>
      </button>
      <button class="btn btn-light" id="function4" data-toggle="tooltip" data-placement="right" title="Function3 (UnderDevelopment)">
        <span class="mdi mdi-24px mdi-function"></span>
      </button>
    </div>
    <button id="bar" class="btn btn-light" type="button" data-toggle="collapse" data-target="#functions" aria-expanded="false" aria-controls="functions">
      <span class="mdi mdi-24px mdi-function-variant" data-toggle="tooltip" data-placement="right" title="Functions"></span>
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
  box-shadow: 0 0 0.5rem rgb(96 96 96 / 50%) !important;
}

.function-bar,
.function-bar * {
	width: var(--bar-width);
}

.function-bar,
#bar {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 0;
	border-radius: calc(var(--bar-width) / 2);
}

#functions > * {
	text-align: center;
	height: var(--bar-width);
	border-radius: calc(var(--bar-width) / 2);
}

#functions > * + * {
	margin: var(--bar-margin) 0;
}

#functions > *:first-child {
	margin: 0 0 var(--bar-margin);
}

#functions > *:last-child {
	margin: var(--bar-margin) 0 0;
}

/* barsettings */

#bar {
	height: var(--bar-width);
}
#functions.collapse + #bar,
#functions.show + #bar {
	background-color: var(--light);
}
#functions.collapse + #bar {
	box-shadow: none !important;
}
#functions.show + #bar,
#functions > .btn:hover {
	box-shadow: 0 0 0.5rem rgb(96 96 96 / 50%) !important;
}

.btn {
	border: none;
	background-color: transparent;
}
</style>
<script>
</script>