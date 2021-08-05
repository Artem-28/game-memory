<template>
<div class="card">
  <div class="card__image">
    <img :src="require(`@/assets/images/${imageUrl}`)">
  </div>
</div>
</template>

<script>
export default {
  name: "Card",
  props: ['imageUrl']
}
</script>

<style lang="scss" scoped>
.card {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  padding: 20px;
  width: 100%;
  height: 100%;
  &__image {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
