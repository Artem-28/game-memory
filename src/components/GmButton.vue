<template>
  <button
      class="button"
      :class="{disabled: disabled}"
      :style="style"
      @click="$emit('click')"
      :disabled="disabled"
  >
    {{options.text}}
  </button>
</template>

<script>
export default {
  name: "GmButton",
  props: ['options', 'text', 'disabled'],
  data() {
    return {
      style: {
        width: this.options.width,
        height: this.options.height
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  background: none;
  color: rgba(255, 255, 255, 0.5);
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  cursor: pointer;
  text-transform: uppercase;
  font-family: 'Comfortaa', sans-serif;
  font-weight: 600;
  font-size: 18px;
  transition: all 0.5s;
  &:not(.disabled):hover {
    border: 2px solid rgba(255, 255, 255, 0.7);
    color: rgba(255, 255, 255, 0.7);
    -webkit-box-shadow: 0px 0px 11px -1px rgba(255, 255, 255, 0.7);
    -moz-box-shadow: 0px 0px 11px -1px rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 11px -1px rgba(255, 255, 255, 1);
  }
}
.button.active {
  border: 2px solid rgba(255, 255, 255, 0.9);
  color: rgba(255, 255, 255, 0.9);
}
.button:disabled {
  border: 2px solid rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.2);
  cursor: default;
}



</style>
