<template>
  <div class="demo-page">
    <h1>Button 按钮</h1>
    <Demo :component="ButtonDemo1" />
    <Demo :component="ButtonDemo2" />
    <Demo :component="ButtonDemo3" />
    <Demo :component="ButtonDemo4" />
    <Demo :component="ButtonDemo5" />
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
import ButtonDemo1 from '../demo/Button/demo1.vue'
import ButtonDemo2 from '../demo/Button/demo2.vue'
import ButtonDemo3 from '../demo/Button/demo3.vue'
import ButtonDemo4 from '../demo/Button/demo4.vue'
import ButtonDemo5 from '../demo/Button/demo5.vue'
import Demo from './Demo.vue'
export default {
  components: {
    Button,
    ButtonDemo1,
    Demo,
  },
  setup() {
    const onClick = () => {
      console.log('hi')
    }
    return {
      onClick,
      ButtonDemo1,
      ButtonDemo2,
      ButtonDemo3,
      ButtonDemo4,
      ButtonDemo5,
    }
  },
}
</script>

<style></style>
