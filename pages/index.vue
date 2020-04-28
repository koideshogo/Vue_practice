<!-- <template>内はHTMLを書く所 -->
<template>
  <div class="container">
    <messages />
  </div>
</template>
<!-- script内はJSを書く所-->
<script>
import Messages from '~/components/Messages.vue'

export default {
  components: {
    Messages
  }
}
</script>
<!-- style内はJSを書く所-->
<style>
</style>