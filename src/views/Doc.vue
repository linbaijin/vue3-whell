<template>
    <div>
        <Topnav />
        <div class="content">
            <aside>
                <ol>
                    <li>组件1</li>
                    <li>组件2</li>
                </ol>
            </aside>
            <main>内容</main>
        </div>
    </div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue'
export default {
    name: 'Doc',
    components: { Topnav },
}
</script>

<style lang="scss">
aside {
    background: lightblue;
    width: 150px;
    padding: 16px;
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
</style>
