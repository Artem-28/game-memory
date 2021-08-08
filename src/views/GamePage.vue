<template>
  <div class="game-page">
    <div class="field-wrapper">
      <game-field />
    </div>
    <div class="counter-wrapper">
      <game-counter />
    </div>
    <gm-game-popup
        :show="resultGame.gameOver"
        :message="resultGame.message"
        :points="resultGame.points"
        @confirm="resetResultGame"
    />
  </div>
</template>

<script>
import GameField from "../components/Game/GameField";
import GameCounter from "../components/Game/GameCounter";
import GmGamePopup from "../components/Game/GmGamePopup";
import {mapActions, mapMutations} from "vuex";

export default {
  name: "GamePage",
  components: {
    GmGamePopup,
    GameCounter,
    GameField,
  },
  computed: {
    resultGame() {
      return this.$store.state.Game.resultGame
    }
  },
  methods: {
    ...mapMutations({
      resetResultGame: "Game/resetResultGame",
    }),
    ...mapActions({
      getUser: "Users/getUserByUid"
    })
  },
  mounted() {
    const uid = this.$store.state.Auth.currentUser.uid
    this.getUser(uid)
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
