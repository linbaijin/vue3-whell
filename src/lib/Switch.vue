<template>
  <div>
    <button
      class="ls-switch"
      :class="{ checked: value }"
      :style="{ backgroundColor: value ? activeColor : inactiveColor }"
      @click="toggle"
    >
      <span></span>
    </button>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    activeColor: {
      type: String,
    },
    inactiveColor: {
      type: String,
    },
  },
  setup(props, context) {
    const toggle = () => {
      context.emit('update:value', !props.value)
    }
    return {
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
    transition: all 0.3s ease-in-out;
  }
}

.checked {
  background-color: blue;
  & > span {
    left: calc(100% - #{$h2} - 2px);
  }
}

.ls-switch:focus {
  outline: none;
}

.ls-switch:active {
  > span {
    width: $h2 + 4px;
  }
}
.ls-switch.checked:active {
  > span {
    width: $h2 + 4px;
    margin-left: -4px;
  }
}
</style>
