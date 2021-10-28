<template>
  <div>
    <div>父组件传来的值{{ formatValue }}</div>
    <button @click="changeValue">改变父组件传来的值</button>
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
  props: {
    value: {
      type: Number,
      require: true,
    },
  },
  components: {},
  setup(props, context) {
      const formatValue = computed(() => `...${props.value}`)
    const changeValue = () => {
      const v = props.value
      context.emit('update:value', v + 1)
    }
    return {
        formatValue,
      changeValue,
    }
  },
}
</script>

<style lang="scss"></style>
