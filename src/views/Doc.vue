<template>
  <div class="layout">
    <Topnav class="nav" />
    <div class="content">
      <aside :class="{ active: menuVisible }">
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch"> switch组件 </router-link>
          </li>
          <li>
            <router-link to="/doc/button"> button组件 </router-link>
          </li>
          <li>
            <router-link to="/doc/dialog"> dialog组件 </router-link>
          </li>
          <li>
            <router-link to="/doc/tabs"> tabs组件 </router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from 'vue'
import Topnav from '../components/Topnav.vue'
export default {
  name: 'Doc',
  components: { Topnav },
  setup() {
    const menuVisible = inject<Ref<boolean>>('xxx')
    console.log('tapnav menuVisible', menuVisible?.value)
    return { menuVisible }
  },
}
</script>

<style lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  & > .nav {
    flex-shrink: 0;
  }
  & > .content {
    position: relative;
    margin-top: 60px;
    padding-left: 156px;
    flex-grow: 1;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}

.content {
  display: flex;
  position: relative;
  > main {
    flex-grow: 1;
    padding: 16px;
    background: lightgreen;
  }
}

aside {
  position: absolute;
  z-index: 10;
  flex-shrink: 0;
  background: lightblue;
  width: 150px;
  padding: 16px;
  top: 0;
  left: -100%;
  padding-top: 70px;
  height: 100%;
  transition: all 0.3s ease-in-out;
  & > h2 {
    margin-bottom: 4px;
  }
  & > ol {
    & > li {
      padding: 4px 0;
    }
  }
}

.active {
  left: 0;
}

main {
  overflow: auto;
}
</style>
