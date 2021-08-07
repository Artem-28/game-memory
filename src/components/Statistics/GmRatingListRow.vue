<template>
<div class="list-row">
  <div class="list-row__item">{{index}}</div>
  <div class="list-row__item">{{user.name}}</div>
  <div class="list-row__item">{{user.email}}</div>
  <div class="list-row__item">{{user.points}}</div>
</div>
</template>

<script>
export default {
  name: "GmRatingListRow",
  props: ['user', 'index']
}
</script>

<style lang="scss" scoped>
.list-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 50px;
  transition: all 0.5s;
  &__item {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__item:not(:last-child) {
    border-right: 1px solid rgba(255, 255, 255, 0.5);
  }
}
.list-row:not(:last-child) {
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
}
.list-row:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.7);
}

</style>
