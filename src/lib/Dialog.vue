<template>
  <Teleport to="body">
    <transition name="fade">
      <div v-if="visible" class="ls-dialog-overlay" @click="onClickOverlay"></div>
    </transition>
    <div class="ls-dialog-wrapper" v-if="visible">
      <div class="ls-dialog">
        <header>
          <slot name="title">标题</slot>
          <span class="ls-dialog-close" @click="close"></span>
        </header>
        <main>
          <slot name="content"></slot>
        </main>
        <footer>
          <Button type="primary" @click="ok">OK</Button>
          <Button @click="cancel">Cancel</Button>
        </footer>
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts">
import Button from './Button.vue'
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true,
    },
    ok: {
      type: Function,
    },
    cancel: {
      type: Function,
    },
  },
  components: { Button },
  setup(props, context) {
    const close = () => {
      context.emit('update:visible', false)
    }
    const onClickOverlay = () => {
      props.closeOnClickOverlay && close()
    }
    const ok = () => {
      if (props.ok?.() !== false) {
        close()
      }
    }
    const cancel = () => {
      context.emit('cancel')
      close()
    }
    return {
      close,
      onClickOverlay,
      ok,
      cancel,
    }
  },
}
</script>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;
.ls-dialog {
  color: rgb(36, 36, 36);
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 15em;
  max-width: 90%;
  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.6);
    z-index: 99;
  }
  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
  }
  > header {
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }
  > main {
    padding: 12px 16px;
  }
  > footer {
    border-top: 1px solid $border-color;
    padding: 12px 16px;
    text-align: right;
  }
  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;
    &::before,
    &::after {
      content: '';
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
