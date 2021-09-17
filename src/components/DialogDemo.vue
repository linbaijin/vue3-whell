<template>
  <h1>Dialog 对话框</h1>
  <Demo :component="DialogDemo1" />
  <Demo :component="DialogDemo2" />
  <Demo :component="DialogDemo3" />
</template>

<script lang="ts">
import { ref } from 'vue'
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import { openDialog } from '../lib/openDialog'
import DialogDemo1 from '../demo/Dialog/demo1.vue'
import DialogDemo2 from '../demo/Dialog/demo2.vue'
import DialogDemo3 from '../demo/Dialog/demo3.vue'
import Demo from './Demo.vue'
export default {
  components: {
    Dialog,
    Button,
    Demo,
    DialogDemo1,
    DialogDemo2,
    DialogDemo3,
  },
  setup() {
    const x = ref(false)
    const toggle = () => {
      x.value = !x.value
    }
    const y = ref(false)
    const toggle2 = () => {
      y.value = !y.value
    }
    const f1 = () => {
      return false
    }
    const f2 = () => {}
    const showDialog = () => {
      openDialog({
        title: '标题',
        content: 'ssss',
        closeOnClickOverlay: false,
        ok() {
          console.log('ok')
        },
        cancel() {
          console.log('cancel')
        },
      })
    }
    return {
      x,
      toggle,
      y,
      toggle2,
      f1,
      f2,
      showDialog,
      DialogDemo1,
      DialogDemo2,
      DialogDemo3,
    }
  },
}
</script>

<style lang="scss"></style>
