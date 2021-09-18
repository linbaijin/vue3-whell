<template>
  <div class="demo">
    <h2>{{ component.__sourceCodeTitle }}</h2>
    <div class="demo-component">
      <component :is="noRefComponent"></component>
    </div>
    <div class="demo-actions">
      <Button @click="toggle">查看代码</Button>
    </div>
    <div class="demo-code" v-show="codeVisible">
      <pre class="language-html" v-html="Prism.highlight(component.__sourceCode, Prism.languages.html, 'html')"></pre>
    </div>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
import { ref, shallowRef } from 'vue'
const Prism = (window as any).Prism
export default {
  props: {
    component: {
      type: Object,
      required: true,
    },
  },
  components: {
    Button,
  },
  setup(props, content) {
    const codeVisible = ref(false)
    const toggle = () => {
      codeVisible.value = !codeVisible.value
    }
    const noRefComponent = shallowRef(props.component)
    return {
      codeVisible,
      toggle,
      noRefComponent:noRefComponent.value,
      Prism
    }
  },
}
</script>

<style lang="scss">
@import '../assets/scss/variables.scss';
.demo {
  border: 1px solid $doc-demo-border-color;
  margin: 16px 0 32px;
  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $doc-demo-border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $doc-demo-border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $doc-demo-border-color;
    > pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
</style>
