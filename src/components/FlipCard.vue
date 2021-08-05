<template>
  <transition name="flip">
    <div
        class="flip-container"
        :class="{hover: flip, active: isActive}"
        @click="$emit('flipping', $event);"
    >
      <div class="flipper">
        <div class="front">
          <slot name="front" />
        </div>
        <div class="back">
          <slot name="back" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "FlipCard",
  props: ['flip', 'isActive'],
}
</script>

<style scoped>
/* entire container, keeps perspective */
.flip-container {
  perspective: 1000px;
}
/* flip the pane when hovered */
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
  position: absolute;
  top: 0;
  left: 0;
}

/* front pane, placed above back */
.front {
  z-index: 2;
  /* for firefox 31 */
  transform: rotateY(0deg);
  background: -webkit-linear-gradient(#3d68bf, #0d1423);
  background: -o-linear-gradient(#3d68bf, #0d1423);
  background: -moz-linear-gradient(#3d68bf, #0d1423);
  background: linear-gradient(#3d68bf, #0d1423);
}

/* back, initially hidden pane */
.back {
  transform: rotateY(180deg);
  background: -webkit-linear-gradient(#c65e57, #873630);
  background: -o-linear-gradient(#c65e57, #873630);
  background: -moz-linear-gradient(#c65e57, #873630);
  background: linear-gradient(#c65e57, #873630);
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
