<demo>不同尺寸</demo>
<template>
  <div>
    <Button size="small">Small</Button>
    <Button size="normal">Normal</Button>
    <Button size="large">Large</Button>
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
