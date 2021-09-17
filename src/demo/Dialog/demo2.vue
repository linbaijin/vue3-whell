<demo>自定义内容</demo>
<template>
  <div>
    <Button @click="toggle" type="primary">点击打开dialog</Button>
    <Dialog v-model:visible="dialogVisible" :closeOnClickOverlay="false" :ok="f1" :cancel="f2">
      <template #title>
        <strong>加粗的标题</strong>
      </template>
      <template #content>
        <div>dialog内容</div>
      </template>
    </Dialog>
  </div>
</template>

<script>
import { ref } from 'vue'
import Button from '../../lib/Button.vue'
import Dialog from '../../lib/Dialog.vue'
export default {
  props: {},
  components: {
    Button,
    Dialog,
  },
  setup(props, content) {
    const dialogVisible = ref(false)
    const toggle = () => {
      dialogVisible.value = !dialogVisible.value
    }
    const f1 = () => {
      return false
    }
    const f2 = () => {
      console.log('!!!!')
      alert('你点击了取消')
      return false
    }
    return {
      dialogVisible,
      toggle,
      f1,
      f2,
    }
  },
}
</script>

<style lang="scss"></style>
