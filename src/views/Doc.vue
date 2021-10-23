<template>
  <div class="layout">
    <Topnav class="nav" />
    <div class="content">
      <aside :class="{ active: menuVisible }">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">开始</router-link>
          </li>
        </ol>
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
          <li>
            <router-link to="/doc/datepicker"> datepicker组件 </router-link>
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
@import '../assets/scss/variables.scss';
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  & > .nav {
    flex-shrink: 0;
  }
  & > .content {
    position: relative;
    margin-top: 90px;
    // padding-left: 156px;
    padding-left: 0;
    flex-grow: 1;
    // @media (max-width: 500px) {
    //   padding-left: 0;
    // }
  }
}

.content {
  display: flex;
  position: relative;
  color: $doc-font-color;
  & > aside {
    @media (max-width: 500px) {
      position: absolute;
    }
  }
  & > main {
    flex-grow: 1;
    padding: 16px;
  }
}

aside {
  position: relative;
  z-index: 10;
  flex-shrink: 0;
  width: 150px;
  padding: 16px 0;
  top: 0;
  left: -100%;
  padding-top: 10px;
  height: 100%;
  transition: all 0.3s ease-in-out;
  border-right: 1px solid rgba(61, 61, 61, 0.2);
  background-color: #fff;
  & > h2 {
    padding: 0 16px;
    margin-bottom: 4px;
  }
  & > ol {
    & > li {
      & > a {
        position: relative;
        display: block;
        padding: 12px 16px;
        outline: none;
        background-color: #fff;
        transition: all 0.3s ease-in-out;
        &.router-link-active {
          color: rgb(158, 71, 250);
          background-color: rgba(217, 181, 255, 0.616);
          &::after {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 3px;
            height: 100%;
            background-color: rgb(135, 22, 255);
            animation: asideCurrent 250ms ease-in-out;
          }
        }
      }
    }
  }
  @keyframes asideCurrent {
    from {
        transform: scaleY(0);
    }
    to {
        transform: scaleY(1);
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
