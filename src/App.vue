<template>
  <main-layout>
    <plat-field></plat-field>
<!--    <router-view/>-->
  </main-layout>
</template>


<script>
import PlatField from "./components/PlayField";
import MainLayout from "./assets/layouts/MainLayout";
export default {
  components: {
    MainLayout,
    PlatField
  },
}
</script>
<style lang="scss">
</style>
