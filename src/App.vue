<script setup>

  import Typebot from 'https://cdn.jsdelivr.net/npm/@typebot.io/js@0.3/dist/web.js'

  Typebot.initBubble({
    typebot: "my-typebot-in64kxh",
    theme: {
      button: { backgroundColor: "#0042DA" },
      chatWindow: { backgroundColor: "#fff" },
    },
  });
</script>

<template>
  <router-view></router-view>
</template>

<style scoped>
#app{
  width: 100%;
  height: 100%;
  overflow: hidden
}

</style>
