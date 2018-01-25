<template>
  <div class="nav" v-bind:class="{ active: menuActive }">
    <div class="nav__bar">

      <div class="nav__logo">
        <app-logo></app-logo>
      </div>

      <div class="nav__button">
        <app-nav-button></app-nav-button>
      </div>

    </div>


    <ul class="nav__items" v-bind:class="{ active: menuActive, inactive: !menuActive }">
      <li class="nav__item">
        <router-link to="/">Home</router-link>
      </li>
      <li class="nav__item">
        <router-link to="about">About</router-link>
      </li>
      <li class="nav__item">
        <router-link to="contact">Quicksand</router-link>
      </li>
      <li class="nav__item">
        <router-link to="services">Services</router-link>
      </li>
    </ul>

    <div class="nav__overlay" v-bind:class="{ active: menuActive }" >
      <div class="nav__overlay-text" v-bind:class="{ active: menuActive }">sure.thing#</div>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AppLogo from './LogoComponent';
import AppNavButton from './NavButtonComponent';

export default {
  name: 'AppNav',
  components: {
    AppLogo,
    AppNavButton
  },
  computed: mapGetters({
      menuActive: 'menuActive'
  })
}
</script>

<style lang="scss">
@import '../styles/variables';
@import '../styles/mixins';
@import '../styles/fonts';
.nav {

  &.active {
    height: 100vh;
  }

  &__bar {
    height: $nav-height;
    z-index: 101;
    position: fixed;
    width: 100%;
  }

  &__logo {
    padding-left: $base-padding;
    @include valign();
    display: inline-block;
  }

  &__button {
    padding-right: $base-padding;
    @include valign();
    float: right;
  }

  &__items {
    @include valign();
    width: 400px;
    max-width: 100vw;
    margin: 0 auto;
    padding: 0;
    list-style: none;
    opacity: 0;
    z-index: -101;
    position: absolute;
    left: -10000px;
    transition: 
        opacity ($duration-menu-length /2) ease-out;

    &.active {
      z-index: 101;
      opacity: 1;
      position: relative;
      left: auto;
      
      transition: 
        opacity ($duration-menu-length /2) ease-in;
    }
  }

  &__item {
    text-align: center;
    font-size: 3em;
    padding: 24px 0;
    a {
      color: #fff;
      text-decoration: none;
    }
  }

  &__overlay {
    opacity: 0;
    z-index: -100;
    background-color: #000000;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: opacity $duration-menu-length cubic-bezier(1.000, 0.045, 1.000, -0.185);

    &.active {
      z-index: 100;
      opacity: 1;
      transition: opacity $duration-menu-length cubic-bezier(0.000, 1.020, 0.000, 1.005);
    }

  }

  &__overlay-text {
    font-size: 8em;
    text-align: center;
    @include valign();
    opacity: 0;

    &.active {
      color: #111;
      opacity: 1;
    }
  }
}

</style>
