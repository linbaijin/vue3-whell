<template>
  <div style="color:#000">
    父组件：{{ value }}
    <TestChildren v-model:value="value" />
    <DatePicker v-model="time" />
  </div>
</template>

<script>
import { ref } from 'vue'
import TestChildren from '../components/TestChildren.vue'
import DatePicker from '../lib/DatePicker/DatePicker.vue'
export default {
  props: {},
  components: {
    TestChildren,
    DatePicker,
  },
  setup(props, context) {
    const value = ref(0)
    const time = ref(new Date())
    return {
      value,
      time,
    }
  },
}
</script>

<style lang="scss"></style>
