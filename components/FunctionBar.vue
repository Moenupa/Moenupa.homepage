<template>
  <div class="function-bar bg-light">
    <div id="functions" class="text-dark collapse">
      <button class="btn btn-light" id="return-top" data-toggle="tooltip" data-placement="right" title="Return to Top" @click="scrollTop" v-show="visible">
        <span class="mdi mdi-arrow-up-drop-circle-outline"></span>
      </button>
      <button class="btn btn-light" id="theme-switch" data-toggle="tooltip" data-placement="right" title="Switch Light/Dark" @click="switchTheme(true)">
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
export default {
  data () {
    return {
      visible: false
    }
  },
  methods: {
    scrollTop: function () {
      this.intervalId = setInterval(() => {
        if (window.pageYOffset === 0) {
          clearInterval(this.intervalId)
        }
        window.scroll(0, window.pageYOffset - 50)
      }, 20)
    },
    scrollListener: function (e) {
      this.visible = window.scrollY > 150
    },
    switchToDark: function () {
      $("html").attr("data-theme", "dark");
      $(".mdi-weather-sunny").each((i, ele) => {
        $(ele).toggleClass("mdi-moon-waning-crescent mdi-weather-sunny");
      });
      $(".alert-light").each((i, ele) => {
        $(ele).toggleClass("alert-light alert-dark");
      });
      $(".bg-light").each((i, ele) => {
        $(ele).toggleClass("bg-light bg-dark");
      });
      $(".border-light").each((i, ele) => {
        $(ele).toggleClass("border-light border-dark");
      });
      $(".btn-light").each((i, ele) => {
        $(ele).toggleClass("btn-light btn-dark");
      });
      $(".navbar-light").each((i, ele) => {
        $(ele).toggleClass("navbar-light navbar-dark");
      });
      $(".table-light").each((i, ele) => {
        $(ele).toggleClass("table-light table-dark");
      });
      $(".text-dark").each((i, ele) => {
        $(ele).toggleClass("text-light text-dark");
      });
      $(".thead-light").each((i, ele) => {
        $(ele).toggleClass("thead-light thead-dark");
      });
      $(".list-group-item-light").each((i, ele) => {
        $(ele).toggleClass("list-group-item-light list-group-item-dark");
      });
    },
    switchToLight: function () {
      $("html").attr("data-theme", "light");
      $(".mdi-moon-waning-crescent").each((i, ele) => {
        $(ele).toggleClass("mdi-moon-waning-crescent mdi-weather-sunny");
      });
      $(".alert-dark").each((i, ele) => {
        $(ele).toggleClass("alert-light alert-dark");
      });
      $(".bg-dark").each((i, ele) => {
        $(ele).toggleClass("bg-light bg-dark");
      });
      $(".border-dark").each((i, ele) => {
        $(ele).toggleClass("border-light border-dark");
      });
      $(".btn-dark").each((i, ele) => {
        $(ele).toggleClass("btn-light btn-dark");
      });
      $(".navbar-dark").each((i, ele) => {
        $(ele).toggleClass("navbar-light navbar-dark");
      });
      $(".table-dark").each((i, ele) => {
        $(ele).toggleClass("table-light table-dark");
      });
      $(".text-light").each((i, ele) => {
        $(ele).toggleClass("text-light text-dark");
      });
      $(".thead-dark").each((i, ele) => {
        $(ele).toggleClass("thead-light thead-dark");
      });
      $(".list-group-item-dark").each((i, ele) => {
        $(ele).toggleClass("list-group-item-light list-group-item-dark");
      });
    },
    switchTheme: function (b) {
      if (b)
      {
        if ($("html").attr("data-theme") == "dark")
          this.switchToLight();
        else if ($("html").attr("data-theme") == "light") 
          this.switchToDark();
        else if (window.matchMedia("(prefers-color-theme: dark)").matches) 
          this.switchToLight();
        else
          this.switchToDark();
      }
      else
      {
        if ($("html").attr("data-theme") == "dark")
          this.switchToDark();
        else if ($("html").attr("data-theme") == "light") 
          this.switchToLight();
        else if (window.matchMedia("(prefers-color-theme: dark)").matches) 
          this.switchToDark();
        else
          this.switchToLight();
      }
    }
  },
  mounted: function () {
    window.addEventListener('scroll', this.scrollListener);
    this.switchTheme(false);
  },
  beforeDestroy: function () {
    window.removeEventListener('scroll', this.scrollListener);
  }
}
</script>