<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import './styles/index.scss';

* {
  box-sizing: border-box;
}

body {
  font-size: $base-font-size;
  font-family: $font-body;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1 {
  font-size: 3em;
}
h2 {
  font-size: 2.5em;
}
h3 {
  font-size: 2em;
}
h4 {
  font-size: 1.5em;
}
h5 {
  font-size: 1em;
}
h6 {
  font-size: 0.8em;
}
</style>
