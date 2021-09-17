<demo>基础用法</demo>
<template>
  <div>
    <Button type="primary">按钮</Button>
    <Button type="success">按钮</Button>
    <Button type="warning">按钮</Button>
    <Button type="info">按钮</Button>
    <Button type="danger">按钮</Button>
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
