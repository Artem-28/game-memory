<template>
  <div id="app">
    <main-layout>
      <router-view/>
    </main-layout>
  </div>
</template>

<script>
import MainLayout from "./layouts/MainLayout";

export default {
  components: {
    MainLayout,
  },
}
</script>
<style lang="scss">
#app {
  color: white;
  font-family: 'Comfortaa', sans-serif;
}
</style>
