<template>
  <div class="game-field">
    <div class="game-field__content">
      <div
          class="game-field__cell"
          v-for="number in numberOfCell"
          :key="number"
      >
        <FlipCard
            class="test"
            v-if="cards[ number - 1 ]"
            :flip="cards[ number - 1 ].flip"
            :is-active="!cards[ number - 1 ].flip"
            @flipping="cards[ number - 1 ].flip && !success && overturningCard(cards[ number - 1 ])"
        >
          <template v-slot:front>
            <card
                :image-url="cards[ number - 1 ].frontSide"
                :front="true"
            />
          </template>
          <template v-slot:back>
            <card
                :image-url="cards[ number - 1 ].backSide"
                :back="true"
            />
          </template>
        </FlipCard>
      </div>
    </div>
  </div>

</template>

<script>
import {mapMutations, mapActions} from 'vuex'
import FlipCard from "./FlipCard";
import Card from "./Card";

export default {
  name: "PlayField",
  components: {
    Card,
    FlipCard,
  },
  data() {
    return {
      selectedCards: [],
      flipTimeout: null,
      success: false,
    }
  },
  computed: {
    cards() {
      return this.$store.state.Game.cards;
    },
    numberOfCell() {
      return this.$store.state.Game.numberOfCell;
    },
  },
  methods: {
    ...mapMutations({
      generatingGameCards: "Game/generatingGameCards",
      countingNumberOfCell: "Game/countingNumberOfCell",
      flipCard: "Game/flipCard",
      deleteCards: "Game/deleteCards",
    }),
    ...mapActions({
      restartGame: "Game/restartGame",
    }),

    overturningCard(card){
      if (this.selectedCards.length === 2) {
        this.clearSelectedCards()
        clearTimeout(this.flipTimeout)
      }
      this.selectedCards.length < 2 && this.selectedCards.push(card)
      this.flipCard(card)
      this.updateFlipTimeout()
    },

    compareCards(){
      const firstCard = this.selectedCards[0]
      const secondCard = this.selectedCards[1]
      if (firstCard.id === secondCard.id){
        this.success = true
        clearTimeout(this.flipTimeout)
        setTimeout(() => {
          this.deleteCards({ firstCard, secondCard })
          this.success = false
        }, 600)
      }
    },

    updateFlipTimeout(){
      clearTimeout(this.flipTimeout)
      this.flipTimeout = setTimeout(() => this.clearSelectedCards(), 2000)
    },

    clearSelectedCards(){
      const firstCard = this.selectedCards[0]
      const secondCard = this.selectedCards[1]
      firstCard && this.flipCard(firstCard)
      secondCard && this.flipCard(secondCard)
      this.selectedCards.length = 0
    }
  },
  watch: {
    selectedCards(){
      this.selectedCards.length === 2 && this.compareCards()
    }
  },
  mounted() {
    clearInterval(this.flipTimeout)
   this.restartGame()
  },
}
</script>

<style lang="scss" scoped>

.game-field {
  position: relative;
  display: block;
  max-height: 830px;
  max-width: 830px;
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
