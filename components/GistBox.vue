<template>
  <div class="gist-box">
    <script v-bind:src="gistscript"></script>
  </div>
</template>
<style>
.gist-box * {
  color: inherit !important;
  margin: 0 !important;
  border: none !important;
  background-color: transparent !important;
}
.gist-meta {
  color: var(--gray) !important;
  padding-bottom: 0 !important;
}
</style>
<script>
export default {
  props: ["gistscript"]
}
</script>