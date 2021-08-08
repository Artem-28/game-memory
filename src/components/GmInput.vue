<template>
  <div class="gm-input">
    <div class="gm-input__label">
      <label><strong>{{label}}</strong></label>
      <span v-if="invalid" class="gm-input__error-message">{{errorMessage}}</span>
    </div>
    <input
        :style="style"
        class="gm-input__control"
        :type="type"
        :value="value"
        @input="$emit('input', $event.target.value)"
        @blur="$emit('blur')"
    >
  </div>

</template>

<script>
export default {
  name: "GmInput",
  props: ['options', 'label', 'errorMessage', 'type', 'value', 'invalid', 'id'],
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
.gm-input {
  &__control {
    box-sizing: border-box;
    margin-top: 10px;
    background: none;
    font-size: 30px;
    border: 2px solid rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    transition: all 0.5s;
    color: rgba(255, 255, 255, 0.5);
    padding: 0 10px;
  }
  &__control:focus {
    outline: none;
    color: rgba(255, 255, 255, 0.7);
    border: 2px solid rgba(255, 255, 255, 0.7);
    -webkit-box-shadow: 0px 0px 11px -1px rgba(255, 255, 255, 0.7);
    -moz-box-shadow: 0px 0px 11px -1px rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 11px -1px rgba(255, 255, 255, 1);
    border-radius: 10px;
  }
  &__label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  &__error-message {
    color: red;
    font-size: 10px;
  }
}

</style>
