<demo>基础用法</demo>
<template>
  <div>
    <Button @click="toggle" type="primary">点击打开dialog</Button>
    <Dialog v-model:visible="dialogVisible">
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
    return {
      dialogVisible,
      toggle
    }
  },
}
</script>

<style lang="scss"></style>
