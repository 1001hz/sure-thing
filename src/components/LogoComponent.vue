<template>
  <div class="logo">
    sure.thing<span class="logo__hash">#</span>
  </div>
</template>
<script>
export default {
  name: 'AppLogo'
}
</script>
<style lang="scss">

@import '../styles/variables.scss';
.logo {
  color: $white;
  font-size: 2em;

  &__hash {
    color: lighten($brand-color, 20%);
  }
}
</style>
