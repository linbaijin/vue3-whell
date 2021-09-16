<template>
  <article class="markdown-body" v-html="mdContent"></article>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
  props: {
    path: {
      type: String,
      required: true,
    },
  },
  components: {},
  setup(props, content) {
    const mdContent = ref<string | null>(null)
    import(
      /* @vite-ignore */
      props.path
    ).then((result) => {
      mdContent.value = result.default
    })
    return {
      mdContent,
    }
  },
}
</script>

<style lang="scss"></style>
