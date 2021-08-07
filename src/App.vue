<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import AuthPage from "./views/AuthPage";

export default {
  components: {
    AuthPage,
    AuthLayout,
    MainLayout,
  },
  computed: {
    layout(){
      return (this.$route.meta.layout || 'auth') + '-layout';
    },
  },
  mounted() {
    const path = this.$store.state.Auth.currentUser ? '/' : '/auth';
    this.$router.push(path);
  }
}
</script>
<style lang="scss">

#app {
  color: white;
  font-family: 'Comfortaa', sans-serif;
}
</style>
