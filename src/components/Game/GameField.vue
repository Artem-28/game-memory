<template>
  <div class="game-field">
    <div class="game-field__content">
      <div
          class="game-field__cell"
          :class="{empty : !isStart}"
          v-for="number in numberOfCell"
          :key="number"
      >
        <FlipCard
            class="test"
            v-if="cards[ number - 1 ] && isStart"
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
import FlipCard from "../GmFlipCard";
import Card from "./GameCard";

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
    isStart() {
      return this.$store.state.Game.start;
    },
    finishGame() {
      return this.$store.state.Game.numberOfCell / 2 === this.$store.state.Counter.successSteps
    }
  },
  methods: {
    ...mapMutations({
      generatingGameCards: "Game/generatingGameCards",
      flipCard: "Game/flipCard",
      deleteCards: "Game/deleteCards",
      incrementSteps: "Counter/incrementSteps",
      updatePoints: "Counter/updatePoints",
      gameOver: "Game/gameOver",
      toggleStartGame: "Game/toggleStartGame",
    }),
    ...mapActions({
      restartGame: "Game/restartGame",
      updateUser: "Users/updateUser",
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
        this.updatePoints()
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
      if( this.selectedCards.length === 2) {
        this.compareCards()
        this.incrementSteps()
      }
    },
    async finishGame() {
      if(this.finishGame) {
        const points = this.$store.state.Counter.points
        this.toggleStartGame()
        const uid = this.$store.state.Auth.currentUser.uid
        await this.updateUser({uid, points})
        this.gameOver({message: 'Вы выиграли', points})
      }
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
.empty {
  margin: 3px;
  border-radius: 10px;
  background:  rgba(255, 255, 255, 0.1);
  /*color: rgba(255, 255, 255, 0.7);*/
}
</style>
