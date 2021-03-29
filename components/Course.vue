<template>
  <tr>
    <td><span class="mdi" v-bind:class="cicon"></span></td>
    <td>{{ ctitle }}&nbsp;<small class="badge badge-pill badge-info text-wrap text-monospace" style="opacity: .6;">{{ cdep }}{{ cid }}</small></td>
  </tr>
</template>
<style>
</style>
<script>
export default {
  props: [
    "cicon",
    "cdep",
    "cid",
    "ctitle"
  ]
}
</script>