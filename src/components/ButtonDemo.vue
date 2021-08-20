<template>
  <div>Button示例</div>
  <h1>示例一</h1>
  <div>
    <Button>按钮</Button>
    <Button theme="link">按钮</Button>
    <Button theme="text">按钮</Button>
  </div>
  <h1>示例二</h1>
  <div>
    <Button size="small">按钮</Button>
    <Button >按钮</Button>
    <Button size="large">按钮</Button>
  </div>
  <h1>示例三</h1>
  <div>
    <Button type="primary">按钮</Button>
    <Button type="success">按钮</Button>
    <Button type="warning">按钮</Button>
    <Button type="info">按钮</Button>
    <Button type="danger">按钮</Button>
  </div>
  <h1>示例四</h1>
  <div>
    <Button type="primary" :disabled="true">按钮</Button>
    <Button type="success" :disabled="true">按钮</Button>
    <Button type="warning" :disabled="true">按钮</Button>
    <Button type="info" :disabled="true">按钮</Button>
    <Button type="danger" :disabled="true">按钮</Button>
  </div>
  <h1>示例五</h1>
  <div>
    <Button loading>按钮</Button>
    <Button>加载完毕</Button>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
export default {
  components: {
    Button,
  },
  setup() {
    const onClick = () => {
      console.log('hi')
    }
    return {
      onClick,
    }
  },
}
</script>

<style></style>
