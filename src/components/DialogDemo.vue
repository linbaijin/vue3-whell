<template>
  <div>Dialog示例</div>
  <h1>示例一</h1>
  <Button @click="toggle" type="primary">toggle</Button>
  <Dialog v-model:visible="x"></Dialog>
  <Dialog v-model:visible="x" :closeOnClickOverlay="false" :ok="f1" :cancel="f2"></Dialog>
</template>

<script lang="ts">
import { ref } from 'vue'
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
export default {
  components: {
    Dialog,
    Button,
  },
  setup() {
    const x = ref(false)
    const toggle = () => {
      x.value = !x.value
    }
    const f1 = () => {
      return false
    }
    const f2 = () => {}
    return {
      x,
      toggle,
      f1,
      f2,
    }
  },
}
</script>

<style lang="scss">
</style>
