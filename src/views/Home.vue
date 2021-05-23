<template>
    <div>
        <Topnav />
        <div class="banner">
            <h1>L's UI</h1>
            <h1>Asome Vue3 UI Framework</h1>
            <p class="actions">
                <a href="">Github</a>
                <a href="/doc">开始</a>
            </p>
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
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: lightgreen;
  > .actions{
    padding: 8px 0;
    a {
      margin:0 8px;
      background: #fff;
      display: inline-block;
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 8px;
    }
  }
}
</style>
