<template>
  <div>
    <h1>Tabs 标签页</h1>
    <Demo :component="TabsDemo1" />
  </div>
</template>

<script lang="ts">
import TabsDemo1 from '../demo/Tabs/demo1.vue'
import Demo from './Demo.vue'
export default {
  components: {
    TabsDemo1,
    Demo
  },
  setup() {
    return {
      TabsDemo1,
    }
  },
}
</script>

<style></style>
