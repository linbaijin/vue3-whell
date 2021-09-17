<demo>theme</demo>
<template>
  <div>
    <Button theme="normal">Button</Button>
    <Button theme="link">Button</Button>
    <Button theme="text">Button</Button>
  </div>
</template>

<script>
import Button from '../../lib/Button.vue'
export default {
  props: {},
  components: {
    Button
  },
  setup(props, content) {
    return {}
  },
}
</script>

<style lang="scss"></style>
