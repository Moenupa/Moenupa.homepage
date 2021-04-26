<template>
  <tr>
    <td><span class="mdi" v-bind:class="info.icon"></span></td>
    <td>
      {{ info.name }}
      <span v-for="tag in info.tags" :key="tag.id" class="badge badge-pill badge-info text-wrap text-monospace" style="opacity: .6;">{{ tag }}</span>
    </td>
  </tr>
</template>
<style>
</style>
<script>
export default {
  props: {
    info: {
      type: Object
      // name: ""
      // icon: ""
      // tags: []
    }
  }
}
</script>