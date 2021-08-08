<template>
  <div class="wrapper" :class="{visible: show}">
    <div class="container">
      <div class="popup">
        <h2>GAME OVER</h2>
        <div class="popup__content">
          <h3>{{message}}</h3>
          <p>получено очков: <strong>{{points}}</strong></p>
        </div>
        <div class="popup__button">
          <gm-button :options="confirmButton" @click="$emit('confirm')" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GmButton from "../GmButton";
export default {
  name: "GmGamePopup",
  props: ['message', 'points', 'show'],
  components: {GmButton},
  data() {
    return {
      confirmButton: {
        width: "100px",
        height: '50px',
        text: 'ok'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper.visible {
  display: block;
}
.wrapper {
  position: absolute;
  display: none;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
}

.container {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 calc(50% - 225px);
}
.popup {
  h2 {
    margin: 0;
    padding: 0;
  }
  margin: 0 20px;
  box-sizing: border-box;
  width: 100%;
  max-width: 500px;
  border: 2px solid rgba(255, 255, 255, 0.7);
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  &__content {
    margin: 20px 0;
    h3 {
      margin: 0;
      padding: 0;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

</style>
