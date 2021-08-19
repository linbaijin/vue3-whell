<template>
  <div>
    <button
      class="ls-switch"
      :class="{ 'ls-checked': value }"
      :style="{ backgroundColor: value ? activeColor : inactiveColor }"
      @click="toggle"
    >
      <span class="ls-switch-handle"></span>
      <span v-if="checkedString || unCheckedString" class="ls-switch-inner">{{value ? checkedString : unCheckedString}}</span>
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
    checkedString: {
      type: String,
    },
    unCheckedString: {
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
  min-width: $h * 2;
  height: $h;
  border: none;
  background-color: rgba($color: #000000, $alpha: 0.5);
  border-radius: $h / 2;
  position: relative;
  & > .ls-switch-handle {
    position: absolute;
    top: 2px;
    left: 2px;
    width: $h2;
    height: $h2;
    background-color: #ffffff;
    border-radius: $h2 / 2;
    transition: all 0.3s ease-in-out;
  }
  & > &-inner {
    display: block;
    font-size: 12px;
    margin: 0 6px 0 $h + 6px;
    transition: all 0.3s ease-in-out;
    color: #fff;
  }
}

.ls-checked {
  background-color: #1890ff;
  & > .ls-switch-handle {
    left: calc(100% - #{$h2} - 2px);
  }
  & > .ls-switch-inner {
    margin: 0 $h + 6px 0 6px;
  }
}

.ls-switch:focus {
  outline: none;
}

.ls-switch:active {
  > .ls-switch-handle {
    width: $h2 + 4px;
  }
}
.ls-switch.ls-checked:active {
  > .ls-switch-handle {
    width: $h2 + 4px;
    margin-left: -4px;
  }
}
</style>
