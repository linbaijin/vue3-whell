<template>
  <div>
    <div class="ls-ui-home">
      <Topnav />
      <div class="banner">
        <h1>L's UI</h1>
        <h1>Asome Vue3 UI Framework</h1>
        <p class="actions">
          <a href="https://github.com/linbaijin/vue3-whell">Github</a>
          <a href="/doc">开始</a>
        </p>
      </div>
    </div>

    <div class="features">
      <ul>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-vue"></use>
          </svg>
          <h3>基于 Vue 3</h3>
          <p>骄傲地使用了 Vue 3 Composition API</p>
        </li>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-ts"></use>
          </svg>
          <h3>基于 TypeScript</h3>
          <p>源代码采用 TypeScript 书写（非严格检查）</p>
        </li>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-light"></use>
          </svg>
          <h3>代码易读</h3>
          <p>每个组件的源代码都极其简洁</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue'
export default {
  name: 'Home',
  components: { Topnav },
}
</script>

<style lang="scss">
@import '../assets/scss/variables.scss';
.ls-ui-home {
  background: $linear-gradient-bg;
  clip-path: ellipse(80% 60% at 50% 40%);
}
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  color: #fff;
  > .actions {
    padding: 8px 0;
    a {
      margin: 0 8px;
      border: $doc-btn-border;
      color: $doc-btn-color;
      display: inline-block;
      border-radius: 4px;
      padding: 8px 12px;
      &:hover {
        text-decoration: none;
      }
    }
  }
}
.features {
  color: #000;
  margin: 64px auto;
  @media (min-width: 800px) {
    width: 800px;
  }
  @media (min-width: 1200px) {
    width: 1200px;
  }

  > ul {
    display: flex;
    flex-wrap: wrap;
    > li {
      width: 400px;
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        'icon title'
        'icon text';
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      & > .icon {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }
      > h3 {
        grid-area: title;
        font-size: 28px;
      }
      > p {
        grid-area: text;
      }
    }
  }
}
</style>
