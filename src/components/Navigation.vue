<template>
    <div>
    <nav class="navbar navbar-expand-lg container static-top">
          <a class="navbar-brand" href="/"><img src="@/assets/fastborderx_logo_mit_text.svg" height="60" alt="" ></a>
          <a @click="toggleMenu()" class="navbar-toggler mr-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fas fa-bars"></i>
          </a>
          <div v-if="showMobileMenu" class="collapse navbar-collapse d-block" id="navbarTogglerDemo02">
          <ul class="navbar-nav ml-auto mt-0 pb-2">
            <li class="nav-item" @click="$emit('clicked')"><a class="cursor-pointer nav-link" v-scroll-to="{ el: '#header', offset: -60 }">Home</a></li>
            <li class="dropdown" @click.prevent="showChildren = !showChildren"><a class="cursor-pointer dropdown-toggle nav-link" data-toggle="dropdown">{{ $t('solutionTitle') }}</a>
              <ul class="dropdown-menu d-block" v-if="showChildren">
                <li class="dropdown-item"><a class="cursor-pointer" v-scroll-to="{ el: '#driver-app', offset: -60 }">{{ $t('driverAppTitle') }}</a></li>
                <li class="dropdown-item"><a class="cursor-pointer" v-scroll-to="{ el: '#checkpoint-app', offset: -60 }">{{ $t('checkpointAppTitle') }}</a></li>
                <li class="dropdown-item"><a class="cursor-pointer" v-scroll-to="{ el: '#admin-app', offset: -60 }">{{ $t('adminAppTitle') }}</a></li>
              </ul>
            </li>
            <li class="nav-item" @click="$emit('clicked')"><a class="cursor-pointer nav-link" v-scroll-to="{ el: '#about', offset: -60 }">{{ $t('aboutTitle') }}</a></li>
            <li class="nav-item" @click="$emit('clicked')"><a class="cursor-pointer nav-link" v-scroll-to="{ el: '#contact', offset: -60 }">{{ $t('contactTitle') }}</a></li>
            <li>
            <LanguageSwitcher></LanguageSwitcher>
            </li>
          </ul>
          </div>
      </nav>
      <div v-if="showOverlay" class="mobile-nav-overly"></div>
      </div>
</template>


<script>
import VueMq from 'vue-mq'
import LanguageSwitcher from './LanguageSwitcher.vue'
import Vue from 'vue';
Vue.use(VueMq, {
  breakpoints: {
    mobile: 450,
    tablet: 900,
    laptop: 1250,
    desktop: Infinity,
  }
})
Vue.component('dropdownelement', {
    data: function() {
        return {
            showChildren: false,
        }
    }
})

  export default {
    name: 'Navigation',
    components: {
      LanguageSwitcher
    },
    data: function() {
      return {
          showChildren: false,
          showMobileMenu: false,
          showOverlay: false
      }
    },
    beforeMount: function() {
      if(this.$mq === 'laptop' || this.$mq === 'desktop') {
        this.showMobileMenu = true;
      }
    },
    methods: {
      toggleMenu: function() {
        this.showMobileMenu = !this.showMobileMenu
        this.showOverlay = !this.showOverlay
      }
    }
  }
</script>

<style>
  .cursor-pointer {
    cursor: pointer;
  }
</style>
