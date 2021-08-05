<template>
  <div class="main-layout">
    <div class="header"></div>
    <div class="main-layout__content">
      <slot />
    </div>
  </div>

</template>

<script>
export default {
  name: "MainLayout"
}
</script>

<style lang="scss" scoped>
.main-layout {
  display: flex;
  flex-direction: column;
  width: 100%;
  &__content {
    box-sizing: border-box;
    padding-right: 15%;
    padding-left: 15%;
    width: 100%;
    border: 3px solid green;
  }
}
.header {
  width: 100%;
  height: 50px;
  border: 1px solid black;
}

</style>
