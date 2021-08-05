<template>
  <div class="game-field">
    <div class="game-field__content">
      <div
          class="game-field__cell"
          v-for="number in numberOfCell"
          :key="number"
      >
        <flip-card v-if="cards[number-1]">
          <template v-slot:front>
            <card :image-url="cards[number-1].frontSide" />
          </template>
          <template v-slot:back>
            <card :image-url="cards[number-1].backSide" />
          </template>
        </flip-card>
      </div>
    </div>
  </div>

</template>

<script>
import {mapMutations} from 'vuex'
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
      return this.$store.state.Game.cards;
    },
    numberOfCell() {
      return this.$store.state.Game.numberOfCell;
    }
  },
  methods: {
    ...mapMutations({
      generatingGameCards: "Game/generatingGameCards",
      countingNumberOfCell: "Game/countingNumberOfCell"
    })
  },
  mounted() {
    this.generatingGameCards()
    this.countingNumberOfCell()
  }
}
</script>

<style lang="scss" scoped>
.game-field {
  position: relative;
  display: block;
  border: 1px solid black;
  &__content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  &__cell {
    padding: 3px;
  }
}
.game-field:after {
  content: '';
  display: block;
  padding-top: 100%;
}
</style>
