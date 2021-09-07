<template>
  <div>
    <div v-for="title in titles" :key="title">{{ title }}</div>
    <component v-for="children in defaults" :is="children" :key="children.key"></component>
  </div>
</template>

<script lang="ts">
import Tab from './Tab.vue'
export default {
  props: {},
  components: {},
  setup(props, content) {
    const defaults = content.slots.default?.()
    defaults &&
      defaults.forEach((tag) => {
        if (tag.type !== Tab) {
          throw new Error('Tabs子节点必须是Tab')
        }
      })
    const titles = defaults?.map((tag) => tag?.props?.title)
    return {
      defaults,
      titles,
    }
  },
}
</script>

<style lang="scss"></style>
