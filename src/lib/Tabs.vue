<template>
  <div class="ls-tabs">
    <div class="ls-tabs-nav" ref="navContainer">
      <div
        class="ls-tabs-nav-item"
        v-for="title in titles"
        :key="title"
        :ref="(el) => setSelectedItem(el, title)"
        :class="{ 'ls-tabs-nav-item--selected': selected === title }"
        @click="select(title)"
      >
        {{ title }}
      </div>
      <div class="ls-tabs-nav-indicator" ref="indicator"></div>
    </div>

    <div class="ls-tabs-content">
      <component :is="current" :key="current.props.title"></component>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, onMounted, ref, watchEffect } from 'vue'
import Tab from './Tab.vue'
export default {
  props: {
    selected: {
      type: String,
    },
  },
  components: {},
  setup(props, content) {
    const selectedItem = ref<HTMLDivElement>()
    const indicator = ref<HTMLDivElement>()
    const navContainer = ref<HTMLDivElement>()
    const defaults = content.slots.default?.()
    defaults?.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error('Tabs子节点必须是Tab')
      }
    })
    const titles = defaults?.map((tag) => tag?.props?.title)
    onMounted(() => {
      if (!props.selected && titles) {
        select(titles[0])
      }
      watchEffect(
        () => {
          console.log('watchEffect执行', selectedItem.value)
          if (selectedItem.value && navContainer.value && indicator.value) {
            const { width: selectedWidth } = selectedItem.value.getBoundingClientRect()
            indicator.value.style.width = selectedWidth + 'px'
            const { left: containerLeft } = navContainer.value.getBoundingClientRect()
            const { left: selectedItemLeft } = selectedItem.value?.getBoundingClientRect()
            const left = selectedItemLeft - containerLeft

            indicator.value.style.left = left + 'px'
          }
        },
        {flush: 'post'} //https://v3.cn.vuejs.org/guide/reactivity-computed-watchers.html#%E5%89%AF%E4%BD%9C%E7%94%A8%E5%88%B7%E6%96%B0%E6%97%B6%E6%9C%BA
      )
    })

    const current = computed(() => {
      return defaults?.find((tag) => tag.props?.title === props.selected)
    })
    const select = (title: string) => {
      content.emit('update:selected', title)
    }
    const setSelectedItem = (el: HTMLDivElement, title: string) => {
      if (title === props.selected) {
        selectedItem.value = el
      }
    }
    return {
      defaults,
      titles,
      select,
      current,
      selectedItem,
      setSelectedItem,
      indicator,
      navContainer,
    }
  },
}
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.ls-tabs {
  background-color: #fff;
  padding: 0 8px;
  &-nav {
    display: flex;
    color: $color;
    position: relative;
    border-bottom: 1px solid $border-color;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &--selected {
        color: $blue;
      }
    }
    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>
