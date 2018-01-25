<template>
  <div 
  class="nav-button" 
  v-bind:class="{ active: menuActive }" 
  @click="toggleMenu()"
  id="nav-button-1"
  >
    
    <span class="line"></span>
    <span class="line"></span>
    <span class="line"></span>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'NavButton',
  computed: mapGetters({
      menuActive: 'menuActive'
  }),
  methods: {
    toggleMenu() {
      this.menuActive === false ? this.$store.dispatch('openMenu') : this.$store.dispatch('closeMenu');
    }
  }
}
</script>
<style>
.nav-button .line{
  width: 30px;
  height: 3px;
  background-color: #ecf0f1;
  display: block;
  margin: 6px auto;
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.nav-button:hover{
  cursor: pointer;
}

/* ONE */

#nav-button-1.active .line:nth-child(2){
  opacity: 0;
}

#nav-button-1.active .line:nth-child(1){
  -webkit-transform: translateY(5px) rotate(45deg);
  -ms-transform: translateY(5px) rotate(45deg);
  -o-transform: translateY(5px) rotate(45deg);
  transform: translateY(5px) rotate(45deg);
}

#nav-button-1.active .line:nth-child(3){
  -webkit-transform: translateY(-13px) rotate(-45deg);
  -ms-transform: translateY(-13px) rotate(-45deg);
  -o-transform: translateY(-13px) rotate(-45deg);
  transform: translateY(-13px) rotate(-45deg);
}
</style>