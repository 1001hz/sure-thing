<template>
  <div class="home" id="home" v-bind:class="{ ready: (splashFinished || splashHasRun) }" @scroll="handleScroll">

    <section class="home__section">
      <div id="test"></div>
      <h2>Search Engine Optimisation</h2>
      <div class="home__explore">
        <router-link to="seo">
          <i class="fa fa-angle-double-right" aria-hidden="true"></i>
        </router-link></div>
      <p>At vero eos et accusamus et iusto odio dignissimos ducimus</p>
    </section>

    <section class="home__section">
      <div id="overlay-1" class="home__section-cover home__section-cover--first"></div>
      <div id="test2"></div>
      <h2>Content Optimisation</h2>
      <div class="home__explore">
        <router-link to="contentoptimisation">
          <i class="fa fa-angle-double-right" aria-hidden="true"></i>
        </router-link></div>
      <p>At vero eos et accusamus et iusto odio dignissimos ducimus</p>
    </section>

    <section class="home__section">
      <div id="overlay-2" class="home__section-cover home__section-cover--second"></div>
      <h2>Another Great Thing</h2>
      <div class="home__explore"><router-link to="about">
        <i class="fa fa-angle-double-right" aria-hidden="true"></i>
        </router-link></div>
      <p>At vero eos et accusamus et iusto odio dignissimos ducimus</p>
    </section>

    <section class="home__section">
      <div id="overlay-3" class="home__section-cover home__section-cover--third"></div>
      <h2>More Great Things</h2>
      <div class="home__explore"><router-link to="about">
        <i class="fa fa-angle-double-right" aria-hidden="true"></i>
        </router-link></div>
      <p>At vero eos et accusamus et iusto odio dignissimos ducimus</p>
    </section>

    <section class="home__section">
      <div id="overlay-4" class="home__section-cover home__section-cover--fourth"></div>
      <h2>Time to chat</h2>
      <p>At vero eos et accusamus et iusto odio dignissimos ducimus</p>
    </section>

    <div class="home__splash" v-bind:class="{ hide: splashHasRun }">
      <splash-page></splash-page>
    </div>

    
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SplashPage from './SplashPage'

export default {
  name: 'HomePage',
  components: {
    SplashPage
  },
  methods: {
    handleScroll(e) {
      
      var showHideSlide = function(overlayId, index) {

        var overlay = document.getElementById(overlayId);

        if(((e.srcElement.clientHeight / 3) < (e.srcElement.scrollTop - (e.srcElement.clientHeight * index))) 
        && (e.srcElement.scrollTop / (index + 1) ) < e.srcElement.clientHeight) {

          overlay.classList.add('shrink');
          
        }
        else if((e.srcElement.scrollTop / (index + 1)) < e.srcElement.clientHeight) {
          overlay.classList.remove('shrink');
        }

      }

      showHideSlide('overlay-1', 0);
      showHideSlide('overlay-2', 1);
      showHideSlide('overlay-3', 2);
      showHideSlide('overlay-4', 3);
      
    }
  },
  computed: mapGetters({
      splashHasRun: 'splashHasRun',
      splashFinished: 'splashFinished',
  }),
  beforeRouteLeave (to, from, next) {
    document.getElementById('home').classList.add('leaving');
    this.$store.dispatch('splashHasRun');
    setTimeout(function(){
      next();
    }, 1000);
  },
  mounted() {
    particlesJS("test", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});
    particlesJS("test2", {"particles":{"number":{"value":16,"density":{"enable":true,"value_area":800}},"color":{"value":"#1b1e34"},"shape":{"type":"polygon","stroke":{"width":0,"color":"#000"},"polygon":{"nb_sides":6},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.3,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":80,"random":false,"anim":{"enable":true,"speed":10,"size_min":40,"sync":false}},"line_linked":{"enable":false,"distance":200,"color":"#ffffff","opacity":1,"width":2},"move":{"enable":true,"speed":8,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"grab"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});

    }
}
</script>

<style lang="scss">
@import '../../styles/variables';
@import '../../styles/mixins';
@import '../../styles/breakpoints';
#test, #test2 {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.home {

  overflow-y: scroll;
  height: 100vh;

  h2 {
    margin: 0;
    max-width: 50vw;
    padding-top: $base-padding;
    opacity: 0;
    transform: translateY(30px);
    transition: opacity $duration-slides ease-in, transform $duration-slides ease-in;
  }

  &__explore {
    position: absolute;
    right: -75px;
    top: calc(50% - 75px);
    opacity: 0;

    a {
      color: #fff;
      font-size: 5em;
      text-decoration: none;
      width: 150px;
      height: 150px;
      display: inline-block;
      background-color: lighten($color-a, 20%);
      border-radius: 75px;
      padding-left: 22px;
      padding-bottom: 20px;
      opacity: 0.2;
      
      .fa {
        @include valign();
      }
    }
  }

  &__splash {
    
    &.hide {
      display: none;
    }
  }

  &__section-cover {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      transition: top $duration-slides ease-in-out;

      &.shrink {
        top: 100vh;
        transition: top $duration-slides ease-in-out;
      }

      &.shrink ~ h2 {
        opacity: 1;
        transform: translateY(0px);
        transition: opacity $duration-slides ease-in, transform $duration-slides ease-in;
      }

      &.shrink ~ .home__explore {
        opacity: 1;
        right: -75px;
        transition: opacity $duration-slides ease-in, right $duration-slides ease-in;
      }

      &--first {
        background-color: lighten($color-c, 20%);
      }

      &--second {
        background-color: lighten($color-b, 20%);
      }

      &--third {
        background-color: lighten($color-d, 20%);
      }

      &--fourth {
        background-color: lighten(#000, 20%);
      }
  }

  &__section {

    min-height: 100vh;
    padding: $nav-height $base-padding 0 $base-padding;
    position: relative;

    p {
      margin: 0;
      position: absolute;
      bottom: $base-padding;
      font-size: 2em;
      color: white;
    }

    &:nth-of-type(1) {
      background-color: $color-a;
      h2 {
        color: lighten($color-a, 20%);
      }
      
    }
    &:nth-of-type(2) {
      background-color: $color-c;
      h2 {
        color: lighten($color-c, 20%);
      }
    }
    &:nth-of-type(3) {
      background-color: $color-b;
      h2 {
        color: lighten($color-b, 20%);
      }
    }
    &:nth-of-type(4) {
      background-color: $color-d;
      h2 {
        color: lighten($color-d, 20%);
      }
    }
    &:nth-of-type(5) {
      background-color: black;
      h2 {
        color: lighten(black, 20%);
      }
    }
  }

  &.ready {

    .home__section:first-of-type {

      h2 {
        opacity: 1;
        transform: translateY(0px);
        transition: opacity $base-duration ease-in, transform $base-duration ease-in;
      }

      .home__explore {
        opacity: 1;
        right: -75px;
        transition: opacity $duration-slides ease-in, right $duration-slides ease-in;
      }

    }
  }

  &.leaving {
    transform: translateX(-100vw);
    transition: transform $base-duration ease-in;
    transition-delay: 0.5s;
    h2, p {
      opacity: 0 !important;
      transform: translateY(20px) !important;
      transition: opacity $base-duration ease-in, transform $base-duration ease-in;
    }

  }
}

@include desktop() {
  .home {
    &__section {
      p {
        max-width: 50vw;
      }
    }
  }
}
</style>
