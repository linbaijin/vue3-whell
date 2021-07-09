<template>
    <div>
        <Switch v-model:value="toggle" />
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
        return {
            toggle
        }
    }
}
</script>

<style lang="scss">

</style>
