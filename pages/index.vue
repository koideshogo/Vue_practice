<!-- <template>内はHTMLを書く所 -->
<template>
  <div class="container">
    <div class="chats-layout">
      <messages />
    </div>
    <div class="input-layout">
      <chat-form />
    </div>
  </div>
</template>
<!-- script内はJSを書く所-->
<script>
import Messages from '~/components/Messages.vue'
import ChatForm from '~/components/ChatForm.vue'
import {db} from '~/plugins/firebase'

export default {
  components: {
    Messages,
    ChatForm
  },
  mounted() {
    db.collection('chanels').doc('CTGKCIOfuYZBFN8bYizq').get()
      .then((doc) => {
        console.log('doc.id: ', doc.id)
        console.log('doc.data(): ', doc.data())
      })
  }
}
</script>
<!-- style内はJSを書く所-->
<style scpoed>
.container {
  height: 100%;
}

.chats-layout {
  overflow: scroll;
  height: 90%;
}

.input-layout {
  height: 10%;
}

</style>