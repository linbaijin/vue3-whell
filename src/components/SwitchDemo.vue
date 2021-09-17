<template>
    <div>
        <h1>Switch 开关</h1>
        <Demo :component="SwitchDemo1" />
        <Demo :component="SwitchDemo2" />
    </div>
</template>

<script>
import SwitchDemo1 from '../demo/Switch/demo1.vue'
import SwitchDemo2 from '../demo/Switch/demo2.vue'
import Demo from './Demo.vue'
export default {
    components: {
        SwitchDemo1,
        SwitchDemo2,
        Demo
    },
    setup() {
        return {
            SwitchDemo1,
            SwitchDemo2
        }
    }
}
</script>

<style lang="scss">

</style>
