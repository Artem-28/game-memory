<template>
  <div class="counter">
    <div class="counter__content">
      <h2>Ваш результат</h2>
      <div class="item">
        <span class="item__title">Таймер</span>
        <div class="item__control">
          <strong>{{timer}}</strong>
        </div>
      </div>
      <div class="item">
        <span class="item__title">Колличество ходов</span>
        <div class="item__control">
          <strong>{{steps}}</strong>
        </div>
      </div>
      <div class="item">
        <span class="item__title">Получено очков</span>
        <div class="item__control">
          <strong>{{points}}</strong>
        </div>
      </div>
      <div class="counter__button">
        <gm-button :options="buttonOptions" @click="toggleStartGame"/>
      </div>
    </div>
  </div>
</template>

<script>
import GmButton from "../GmButton";
import {mapMutations, mapGetters} from "vuex";
export default {
  name: "GameCounter",
  components: {GmButton},
  data() {
    return {
      buttonOptions: {
        width: '100%',
        height: '50px',
        text: 'старт'
      },
      timerInterval: null,
    }
  },
  computed: {
    ...mapGetters({
      timer: "Counter/timer",
    }),
    steps() {
      return this.$store.state.Counter.steps
    },
    points() {
      return this.$store.state.Counter.points
    },
    isStartGame() {
      return this.$store.state.Game.start
    }
  },
  methods: {
    ...mapMutations({
      updateTime: "Counter/updateTime",
      toggleStartGame: "Game/toggleStartGame",
      resetGame: "Game/resetGame",
      generateGameCards: "Game/generatingGameCards",
      resetCounter: "Counter/resetCounter",
      gameOver: "Game/gameOver",
    }),
  },
  watch: {
    isStartGame() {
      if( !this.isStartGame ) {
        this.buttonOptions.text = 'старт'
        clearInterval(this.timerInterval)
        this.resetGame()
        this.resetCounter()
        this.gameOver({message: 'Вы проиграли', points: 0})
        return
      }
      this.buttonOptions.text = 'сдаться'
      this.generateGameCards()
      this.timerInterval = setInterval(() => {
        this.updateTime()
      }, 1000);
    }
  }
}
</script>

<style lang="scss" scoped>
.counter {
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 10px;
  background:  rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.7);
  &__content {
    h2 {
      margin: 0;
      padding: 0;
    }
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__button {
    width: 100%;
    margin-top: 30px;
  }
}

.item {
  width: 100%;
  margin-top: 20px;
  &__control {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    width: 100%;
    height: 50px;
    margin: 10px 0;
    border: 2px solid rgba(255, 255, 255, 0.7);
    border-radius: 10px;
    font-family: 'Orbitron', sans-serif;
  }
}

</style>
