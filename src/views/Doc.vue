
<template>
  <div>
    <Topnav />
    <div class="content">
      <aside v-if="menuVisible">
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
    return {menuVisible}
  }
}
</script>

<style lang="scss">
aside {
  background: lightblue;
  width: 150px;
  padding: 16px;
  padding-top: 80px;
  position: fixed;
  top: 0;
  left: 0;
  & > h2 {
    margin-bottom: 4px;
  }
  & > ol {
    & > li {
      padding: 4px 0;
    }
  }
}

main {
    padding-left: 150px;
}

@media (max-width:500px) {
    main {
        padding-left: 0;
    }
  }
</style>
