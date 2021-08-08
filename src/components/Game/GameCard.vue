<template>
<div class="card" :class="{back, front}">
  <div class="card__image">
    <img :src="require(`@/assets/images/${imageUrl}`)">
  </div>
</div>
</template>

<script>
export default {
  name: "GameCard",
  props: ['imageUrl', 'back', 'front']
}
</script>

<style lang="scss" scoped>
.card {
  user-select: none;
  border-radius: 10px;
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
.front {
  background: #959ffe;
  background: -webkit-linear-gradient(to right, #959ffe, #3cc0ff);
  background: linear-gradient(to right, #959ffe, #3cc0ff);
}
.back {
  background: linear-gradient(21deg, #dd03e4, #5611ec);
  transition: background-position .5s;
  background-size: 200% 100%;
  background-position: 100% 0;
  cursor: pointer;
}
.back:hover {
  background-position: 0 0;
}
</style>
