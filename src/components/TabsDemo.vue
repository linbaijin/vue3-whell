<template>
  <div>
    tabsDemo
    <h1>示例1</h1>
    <Tabs v-model:selected="activeName">
      <Tab title="导航1">内容1</Tab>
      <Tab title="导航2222">内容2</Tab>
      <Tab title="导航3">内容3</Tab>
    </Tabs>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import Tab from '../lib/Tab.vue'
import Tabs from '../lib/Tabs.vue'
export default {
  components: {
    Tab,
    Tabs,
  },
  setup() {
    const activeName = ref('导航1')
    return {
      activeName,
    }
  },
}
</script>

<style></style>
