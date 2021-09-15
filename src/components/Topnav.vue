<template>
  <div class="topnav" :class="{ top: scrollTop < 10 }">
    <div class="logo">
      <svg class="icon">
        <use xlink:href="#icon-UFOSVG"></use>
      </svg>
    </div>
    <ul class="menu">
      <li>
        <router-link to="/doc">文档</router-link>
      </li>
    </ul>
    <span class="toggleAside" @click="toggleMenuVisible"></span>
  </div>
</template>

<script lang="ts">
import { inject, onMounted, ref, Ref } from 'vue'
export default {
  setup(props, content) {
    const menuVisible = inject<Ref<boolean>>('xxx')
    const scrollTop = ref<number>(0)
    console.log('tapnav menuVisible', menuVisible?.value)
    onMounted(() => {
      window.addEventListener('scroll', () => {
        scrollTop.value = document.documentElement.scrollTop
      })
    })
    const toggleMenuVisible = () => {
      if (menuVisible) {
        menuVisible.value = !menuVisible.value
      }
    }
    return { toggleMenuVisible, scrollTop }
  },
}
</script>

<style lang="scss">
.topnav {
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;
  background: #fff;
  transition: all 250ms ease-in-out;
  &.top {
    background: transparent;
  }
  > .logo {
    max-width: 6em;
    margin-right: auto;
    & > .icon {
      width: 36px;
      height: 36px;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
  > .toggleAside {
    display: none;
    width: 24px;
    height: 24px;
    background-color: red;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>
