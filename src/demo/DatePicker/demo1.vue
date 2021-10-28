<demo>基础用法</demo>
<template>
  <div>
    <DatePicker v-model="time" />
  </div>
</template>

<script>
import { ref } from 'vue'
import DatePicker from '../../lib/DatePicker/DatePicker.vue'
export default {
  props: {},
  components: {
    DatePicker,
  },
  setup(props, content) {
    const time = ref(new Date())
    return {
      time
    }
  },
}
</script>

<style lang="scss"></style>
