<template>
  <button class="ls-button" :class="className" :disabled="disabled">
    <span v-if="loading" class="ls-loadingIndicator"></span>
    <slot />
  </button>
</template>

<script lang="ts">
import { computed } from 'vue'
export default {
  props: {
    theme: {
      type: String,
      default: 'button',
    },
    size: {
      type: String,
      default: 'normal',
    },
    type: {
      type: String,
      default: 'default',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, content) {
    const { theme, size, type, disabled, loading } = props
    const className = computed(() => {
      return {
        [`ls-theme-${theme}`]: theme,
        [`ls-size-${size}`]: size,
        [`ls-type-${type}`]: type,
      }
    })
    return {
      className,
      disabled,
      loading,
    }
  },
}
</script>

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
.ls-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  outline: none;
  border: none;
  & + & {
    margin-left: 8px;
  }
  // &:hover,
  // &:focus {
  //   color: $blue;
  //   border-color: $blue;
  // }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.ls-theme-button {
    background-color: #fff;
    // &.ls-size-large {
    //   font-size: 24px;
    //   height: 48px;
    // }
    // &.ls-size-small {
    //   font-size: 12px;
    //   height: 24px;
    // }
  }
  &.ls-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    &:hover,
    &:focus {
      color: lighten($blue, 10%);
    }
  }
  &.ls-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
  }
  &.ls-theme-button {
    &.ls-size-normal {
      font-size: 16px;
      height: 32px;
    }
    &.ls-size-large {
      font-size: 24px;
      height: 48px;
    }
    &.ls-size-small {
      font-size: 12px;
      height: 24px;
    }
    &.ls-type-default {
      background: #fff;
      color: $color;
      border: 1px solid $border-color;
      &[disabled] {
        cursor: not-allowed;
        color: #c0c4cc;
      }
    }
    &.ls-type-primary {
      background-color: $primary-color;
      color: #fff;
      &:hover,
      &:focus {
        background-color: lighten($primary-color, 10%);
      }
      &[disabled] {
        background-color: $primary-disabled-color;
        cursor: not-allowed;
      }
    }
    &.ls-type-success {
      background-color: $success-color;
      color: #fff;
      &:hover,
      &:focus {
        background-color: lighten($success-color, 10%);
      }
      &[disabled] {
        background-color: $success-disabled-color;
        cursor: not-allowed;
      }
    }
    &.ls-type-warning {
      background-color: $warning-color;
      color: #fff;
      &:hover,
      &:focus {
        background-color: lighten($warning-color, 10%);
      }
      &[disabled] {
        background-color: $warning-disabled-color;
        cursor: not-allowed;
      }
    }
    &.ls-type-info {
      background-color: $info-color;
      color: #fff;
      &:hover,
      &:focus {
        background-color: lighten($info-color, 10%);
      }
      &[disabled] {
        background-color: $info-disabled-color;
        cursor: not-allowed;
      }
    }
    &.ls-type-danger {
      background-color: $danger-color;
      color: #fff;
      &:hover,
      &:focus {
        background-color: lighten($danger-color, 10%);
      }
      &[disabled] {
        background-color: $danger-disabled-color;
        cursor: not-allowed;
      }
    }
  }
  > .ls-loadingIndicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $blue $blue $blue transparent;
    border-style: solid;
    border-width: 2px;
    animation: ls-spin 1s infinite linear;
  }
  @keyframes ls-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
