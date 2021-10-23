<template>
  <div class="demo-page">
    <h1>DatePicker 日期选择器</h1>
    <Demo :component="DatePickerDemo1" />
  </div>
</template>

<script lang="ts">
import DatePickerDemo1 from '../demo/DatePicker/demo1.vue'
import Demo from './Demo.vue'
export default {
  components: {
    DatePickerDemo1,
    Demo,
  },
  setup() {
    const onClick = () => {
      console.log('hi')
    }
    return {
      onClick,
      DatePickerDemo1,
    }
  },
}
</script>

<style></style>
