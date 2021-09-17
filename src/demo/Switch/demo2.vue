<demo>带有文字</demo>
<template>
  <div>
    <Switch v-model:value="toggle" checkedString="开启" unCheckedString="关闭" />
  </div>
</template>

<script>
import { ref } from 'vue'
import Switch from '../../lib/Switch.vue'
export default {
  props: {},
  components: {
    Switch,
  },
  setup(props, content) {
    const toggle = ref(false)
    return {
      toggle,
    }
  },
}
</script>

<style lang="scss"></style>
