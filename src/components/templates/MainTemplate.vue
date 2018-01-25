<template>
  <main>
    <app-nav></app-nav>
    <router-view></router-view>
  </main>
</template>

<script>
import AppNav from '../NavComponent'

export default {
  components: {
    AppNav
  }
}
</script>

<style  lang="scss">
main {
  
}
</style>
