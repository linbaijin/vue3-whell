<template>
  <div>
    <button class="ls-switch" :class="{ checked: checked }" @click="toggle"><span></span></button>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const checked = ref(false)
    const toggle = () => {
      console.log('toggle')
      checked.value = !checked.value
    }
    return {
      checked,
      toggle,
    }
  },
}
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.ls-switch {
  width: $h * 2;
  height: $h;
  border: none;
  background-color: gray;
  border-radius: $h / 2;
  position: relative;
  & > span {
    position: absolute;
    top: 2px;
    left: 2px;
    width: $h2;
    height: $h2;
    background-color: #ffffff;
    border-radius: $h2 / 2;
    transition: left .3s ease-in-out;
  }
}

.checked {
  background-color: blue;
  & > span {
    left: calc(100% - #{$h2} - 2px);
  }
}
</style>
