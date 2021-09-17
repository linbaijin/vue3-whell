<demo>api调用</demo>
<template>
  <div>
    <Button @click="showDialog" type="primary">点击打开dialog</Button>
  </div>
</template>

<script>
import Button from '../../lib/Button.vue'
import { openDialog } from '../../lib/openDialog'
export default {
  props: {},
  components: {
    Button,
  },
  setup(props, content) {
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
      showDialog,
    }
  },
}
</script>

<style lang="scss"></style>
