<template>
  <div id="seo" class="seo service service--a">
    <section class="service__banner">
      <div class="service__banner-image">
        <h1>
          Search<br />
          Engine<br />
          Optimisation
        </h1>
      </div>

      <div class="service__banner-content">
        <p>
          We are now listening for the "scroll" event and the "handleScroll" method will handle it.
        </p>
      </div>
    </section>

    <section class="service__section">
      <h2>Something about SEO</h2>
      <p>We are now listening for the "scroll" event and the "handleScroll" method will handle it. We are now listening for the "scroll" event and the "handleScroll" method will handle it.</p>
    </section>

  </div>
</template>

<script>
export default {
  name: 'SeoPage',
  beforeRouteLeave (to, from, next) {
    document.getElementById('seo').classList.add('leaving');
    setTimeout(function(){
      next();
    }, 1000);
  }
}
</script>

<style lang="scss">
@import '../../../styles/variables';
@import '../../../styles/breakpoints';
@import '../../../styles/mixins';
@import '../../../styles/service';

.seo {

}

</style>
