<template>
  <div class="topnav">
    <div class="logo" >LOGO</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
    <span class="toggleAside" @click="toggleMenuVisible"></span>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from 'vue'
export default {
  setup() {
    const menuVisible = inject<Ref<boolean>>('xxx')
    console.log('tapnav menuVisible', menuVisible?.value)
    const toggleMenuVisible = () => {
      if (menuVisible) {
        menuVisible.value = !menuVisible.value
      }
    }
    return { toggleMenuVisible }
  },
}
</script>

<style lang="scss">
.topnav {
  background: pink;
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;
  > .logo {
    max-width: 6em;
    margin-right: auto;
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
  @media (max-width:500px) {
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
