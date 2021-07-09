<template>
  <button v-bind="rest">
      <slot/>
  </button>
</template>

<script lang="ts">
export default {
    props: {
        size: {
            type: String,
            default: 'default'
        }
    },
    setup(props, content) {
        const {size, ...rest} = content.attrs
        return {
            size,
            ...rest
        }
    }
}
</script>

<style>

</style>