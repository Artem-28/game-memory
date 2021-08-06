<template>
  <div class="header">
    <div class="header__buttons">
      <div class="header__buttons__left">
        <router-link
            v-for="buttons in buttonsLeft"
            :key="buttons.id"
            :to="buttons.path"
        >
          <gm-button :options="buttons.options"/>
        </router-link>
      </div>
      <div class="header__buttons__right">
        <router-link
            v-for="buttons in buttonRight"
            :key="buttons.id"
            :to="buttons.path"
        >
          <gm-button :options="buttons.options"/>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import GmButton from "./GmButton";
export default {
  name: "GmHeader",
  components: {GmButton},
  data () {
    return {
      buttonsLeft: [
        {
          id: 1,
          path: '/',
          options: {
            width: '150px',
            height: '50px',
            text: 'играть'
          }
        },
        {
          id: 2,
          path: '/statistics',
          options: {
            width: '150px',
            height: '50px',
            text: 'статистика'
          }
        },
      ],
      buttonRight: [
        {
          id: 1,
          path: '/auth',
          options: {
            width: '150px',
            height: '50px',
            text: 'выход'
          }
        },
      ],
    }
  },
  methods: {
    togglePage() {
      console.log('toggle')
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  &__buttons {
    padding: 0 10px;
    width: 100%;
    max-width: 1100px;
    display: flex;
    justify-content: space-between;
  }
  &__buttons__right ,&__buttons__left > * {
    margin: 0 20px;
  }
}
</style>
