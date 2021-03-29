<template>
  <span data-toggle="tooltip" data-placement="bottom" v-bind:title="ititle">
    <a v-bind:href="ilink" target="_blank"><span class="mdi mdi-24px" v-bind:class="iicon"></span></a>
  </span>
</template>
<style>
</style>
<script>
export default {
  props: [
    "ititle",
    "ilink",
    "iicon",
  ]
}
</script>