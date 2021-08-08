<template>
  <transition appear name="flip">
    <div
        class="flip-container"
        :class="{hover: flip, active: isActive}"
        @click="$emit('flipping', $event);"
    >
      <div class="flipper">
        <div class="front" :class="{absolute: flip}">
          <slot name="front" />
        </div>
        <div class="back" :class="{absolute: !flip}">
          <slot name="back" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "GmFlipCard",
  props: ['flip', 'isActive'],
}
</script>

<style scoped>
.absolute {
  position: absolute;
}

.flip-container {
  perspective: 1000px;
}

.flip-container.hover .flipper {
  transform: rotateY(180deg);
}
.flip-container.active .flipper {
  -webkit-box-shadow: 0px 0px 11px -1px rgba(255, 255, 255, 1);
  -moz-box-shadow: 0px 0px 11px -1px rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 11px -1px rgba(255, 255, 255, 1);
}

.flip-container, .front, .back {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}

/* flip speed goes here */
.flipper {
  transition: 0.6s;
  border-radius: 10px;
  transform-style: preserve-3d;
  width: 100%;
  height: 100%;
  position: relative;
}

/* hide back of pane during swap */
.front, .back {
  backface-visibility: hidden;
  /*position: absolute;*/
  top: 0;
  left: 0;
}


.front {
  z-index: 2;
  /* for firefox 31 */
  transform: rotateY(0deg);
}


.back {
  transform: rotateY(180deg);
}
.flip-enter-active {
  animation: flip-in 0.6s;
}
.flip-leave-active {
  animation: flip-in 0.6s reverse;
}
@keyframes flip-in {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
