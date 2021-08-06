<template>
  <div class="main-layout">
    <gm-header/>
    <div class="main-layout__content">
      <slot />
    </div>
  </div>

</template>

<script>
import GmHeader from "../components/GmHeader";
export default {
  name: "MainLayout",
  components: {GmHeader}
}
</script>

<style lang="scss" scoped>
.main-layout {
  display: flex;
  flex-direction: column;
  width: 100%;
  background:linear-gradient(to right top, rgb(3, 0, 33), rgb(4, 0, 35) 2%, rgb(11, 5, 57) 24%, rgb(14, 7, 65) 38%, rgb(44, 21, 117) 71%, rgb(45, 48, 143)),
  linear-gradient(rgba(0, 8, 255, 0.1), rgba(0, 8, 255, 0));
  &__content {
    box-sizing: border-box;
    padding: 10px calc(50% - 415px);
    width: 100%;
  }
}

</style>
