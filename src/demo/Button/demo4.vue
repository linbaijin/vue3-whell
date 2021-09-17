<demo>禁用状态</demo>
<template>
  <div>
    <Button type="primary" disabled>按钮</Button>
    <Button type="success" disabled>按钮</Button>
    <Button type="warning" disabled>按钮</Button>
    <Button type="info" disabled>按钮</Button>
    <Button type="danger" disabled>按钮</Button>
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
