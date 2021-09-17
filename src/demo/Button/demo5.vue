<demo>加载中</demo>
<template>
  <div>
    <Button loading>按钮</Button>
    <Button :loading="false">加载完毕</Button>
  </div>
</template>

<script>
import Button from '../../lib/Button.vue'
export default {
  props: {},
  components: {
    Button,
  },
  setup(props, content) {
    return {}
  },
}
</script>

<style lang="scss"></style>
