<template>
  <div class="header">
    <div class="header__buttons">
      <div class="header__buttons__left">
        <router-link
            v-for="button in buttonsLeft"
            :key="button.id"
            :to="button.path"
        >
          <gm-button
              :options="button.options"
              :disabled="button.disabled"
          />
        </router-link>
      </div>
      <div class="header__buttons__right">
        <router-link
            v-for="button in buttonRight"
            :key="button.id"
            :to="button.path"
        >
          <gm-button
              :options="button.options"
              :disabled="button.disabled"
              @click="button.event"
          />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import GmButton from "./GmButton";
import {mapMutations} from "vuex";
export default {
  name: "GmHeader",
  components: {GmButton},
  computed: {
    isStartGame() {
      return this.$store.state.Game.start
    },
    buttonsLeft() {
      const buttonsLeft = {
        game: {
          id: 1,
          path: '/',
          disabled: this.isStartGame,
          options: {
            width: '150px',
            height: '50px',
            text: 'играть',
          }
        },
        statistics: {
          id: 2,
          path: '/statistics',
          disabled: this.isStartGame,
          options: {
            width: '150px',
            height: '50px',
            text: 'статистика',
          }
        },
      }
      return buttonsLeft
    },
    buttonRight() {
      const buttonRight = {
        logout: {
          id: 1,
          path: '/auth',
          event: this.logout,
          disabled: this.isStartGame,
          options: {
            width: '150px',
            height: '50px',
            text: 'выход',
          }
        },
      }
      return buttonRight
    },
  },
  methods: {
    ...mapMutations({
      logout: "Auth/logout",
    }),
  }
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &__buttons {
    padding: 20px 10px 0 10px;
    width: 100%;
    max-width: 1350px;
    display: flex;
    justify-content: space-between;
  }
  &__buttons__right ,&__buttons__left > * {
    margin: 0 20px;
  }
}
</style>
