<template>

  <div class="splash" v-bind:class="{ finished: currentSlide > 4 }">
  

    
<div class="slider">
  <div class="slide" v-bind:class="{ active: currentSlide === 0 }">
    <div class="panel">
      <div class="top" data-back="SEO"></div>
      <div class="bottom" data-back="SEO"></div>
    </div>
    <div class="center">
      <h1>Increase traffic</h1>
    </div>
  </div>
  <div class="slide"  v-bind:class="{ active: currentSlide === 1 }">
    <div class="panel">
      <div class="top" data-back="DESERT"></div>
      <div class="bottom" data-back="DESERT"></div>
    </div>
    <div class="center">
      <h1>Across the desert</h1>
    </div>
  </div>
  <div class="slide" v-bind:class="{ active: currentSlide === 2 }">
    <div class="panel">
      <div class="top" data-back="WATER"></div>
      <div class="bottom" data-back="WATER"></div>
    </div>
    <div class="center">
      <h1>In search of water</h1>
    </div>
  </div>
  <div class="slide" v-bind:class="{ active: currentSlide === 3 }">
    <div class="panel">
      <div class="top" data-back="#"></div>
      <div class="bottom" data-back="#"></div>
    </div>
    <div class="center">
      <h1 class="title">sure.thing</h1>
    </div>
  </div>
</div>



  </div>

</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SplashPage',
  data: function() {
    return {
      currentSlide: 0
    }
  },
  created: function () {
    var vm = this;
    var inter = setInterval(function(){ 
      vm.currentSlide++;

      if(vm.currentSlide === 4) {
        
      }

      if(vm.currentSlide === 5) {
        console.log("Finished");
        vm.$store.dispatch('splashFinished');
        clearInterval(inter);
      }

     }, 1200);
     
    
  },
}
</script>

<style lang="scss">
@import '../../styles/variables';
@import '../../styles/fonts';

.splash {

  position: fixed;
  top: 0; left: 0;
  right: 0;
  bottom: 0;
  z-index: 201;

  &.finished {
    z-index: -1;
  }

h1 {
  color: #fff;
  font-weight: 500;

  &.title {
    color: $color-e;
  }
}
$color1: $color-a;
$color2: $color-b;
$color3: $color-c;
$color4: $color-d;

$contrast: 4%;
$shift: 10%;

$human: 'Average Sans', sans-serif;
$narrow: $font-body;


$time: 600ms;
$ease: cubic-bezier(1.000, 0.005, 0.570, 0.865);
$ease-out: cubic-bezier(0.230, 1.000, 0.320, 1.000);

$base: 1vh;

@mixin abfab{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}


.slider{
  @include abfab;
  height: 100vh;
  overflow: hidden;
}

.slide{
 @include abfab;
  &:nth-child(1) .panel > * {  
    background: darken(adjust-hue($color1, $shift), $contrast);
    color: $color1;
  }
  &:nth-child(2)  .panel > * {  
    background: darken(adjust-hue($color2, $shift), $contrast);
    color: $color2;
  }
  &:nth-child(3) .panel > * {  
    background: darken(adjust-hue($color3, $shift), $contrast);
    color: $color3;
  }
  &:nth-child(4) .panel > * {  
    background: darken(adjust-hue($color4, -$shift), $contrast);
    color: $color4;
  }
  .center{
    opacity: 0;
    transition: opacity linear $time*0.5;
  }
  .panel{
    @include abfab
  }
  .top, .bottom{
    content: attr(data-back);
    position: absolute;
    font-size: 20vw;
    font-weight: 800;
    height: 50vh;
    width: 100vw;
    text-align: center;
    z-index: 1;
    overflow: hidden;
    box-sizing: border-box;
    transition: transform $time $ease;
    &:after{
      position: relative;
      display: inline-block;
      transition: transform $time $ease;
      content: attr(data-back);
      font-family: $narrow;
    }
  }
  .top{
    line-height: 100vh;
    transform: translatey(-50vh);
    &:after{
      transform: translatey(50vh);
    }
  }
  .bottom{
    bottom: 0;
    line-height: 0vh;
    transform: translatey(50vh);
     &:after{
      transform: translatey(-50vh);
    }
  }
  &.active{
    .center{
      opacity: 1; 
      transition: opacity linear $time*0.5;
      transition-delay: $time;
    }
    .top, .bottom{
      transition: none;
      transform: translatey(0);
      z-index: -1;
      &:after{
        transition: transform $ease-out $time*2;
        transform: translatey(0);
      }
    }
  }
}

.center{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%,-50%,0);
  z-index: 2;
  text-align: center;
  h1{
    font-size: 10vh;
    line-height: 1;
    //text-shadow: 2px 2px 10px rgba(0,0,0,0.2);
    font-family: $narrow;
  }
}

.sig{
  position: fixed;
  bottom: 8px;
  right: 8px;
  text-decoration: none;
  font-size: 12px;
  font-weight: 100;
  font-family: sans-serif;
  color: rgba(255,255,255,0.4);
  letter-spacing: 2px;
}

}
</style>