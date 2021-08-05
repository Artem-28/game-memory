<template>
  <div class="game-field">
    <flip-card v-for="card in cards" :key="card.id" :card="card" />
  </div>
</template>

<script>
import FlipCard from "./FlipCard";
import Card from "./Card";

export default {
  name: "PlayField",
  components: {
    Card,
    FlipCard,
  },
  computed: {
    cards() {
      console.log(this.$store.state.Game.cards)
      return this.$store.state.Game.cards;
    },
  }
}
</script>

<style scoped>
.game-field {
  width: 500px;
  height: 500px;
  border: 1px solid black;
}
</style>
