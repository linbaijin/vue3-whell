<template>
    <div>
        <h1>示例一</h1>
        <Switch v-model:value="toggle" />
        <h1>示例二</h1>
        <Switch v-model:value="toggle2" checkedString="开启" unCheckedString="关闭" />
    </div>
</template>

<script>
import { ref } from 'vue'
import Switch from '../lib/Switch.vue'
export default {
    components: {
        Switch
    },
    setup() {
        const toggle = ref(false)
        const toggle2 = ref(false)
        return {
            toggle,
            toggle2
        }
    }
}
</script>

<style lang="scss">

</style>
