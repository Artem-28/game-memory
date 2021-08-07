<template>
  <div class="game-page">
    <div class="field-wrapper">
      <game-field />
    </div>
    <div class="counter-wrapper">
      <game-counter />
    </div>
  </div>
</template>

<script>
import GameField from "../components/Game/GameField";
import GameCounter from "../components/Game/GameCounter";

export default {
  name: "GamePage",
  components: {
    GameCounter,
    GameField,
  }
}
</script>

<style scoped>
.game-page {
  padding: 0 10px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
}
.field-wrapper {
  height: 100%;
}

</style>
