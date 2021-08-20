<template>
  <div>Dialog示例</div>
  <h1>示例一</h1>
  <Button @click="toggle" type="primary">toggle</Button>
  <Button @click="toggle2" type="primary">toggle2</Button>
  <h1>示例二</h1>
  <Button @click="showDialog" type="primary">showDialog</Button>
  <Dialog v-model:visible="x">
    <template #content>
      <div>dialog内容</div>
    </template>
  </Dialog>
  <Dialog v-model:visible="y" :closeOnClickOverlay="false" :ok="f1" :cancel="f2">
    <template #title>
      <strong>加粗的标题</strong>
    </template>
    <template #content>
      <div>dialog内容</div>
    </template>
  </Dialog>
</template>

<script lang="ts">
import { ref } from 'vue'
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import {openDialog} from '../lib/openDialog'
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
        }
      })
    }
    return {
      x,
      toggle,
      y,
      toggle2,
      f1,
      f2,
      showDialog
    }
  },
}
</script>

<style lang="scss"></style>
