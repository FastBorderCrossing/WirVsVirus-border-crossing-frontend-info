<template>
    <nav class="navbar navbar-expand-lg static-top">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fas fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse " id="navbarTogglerDemo02">
          <a class="navbar-brand" href="/"><img src="@/assets/fastborderx_logo_mit_text.svg" height="60" alt="" ></a>
          <ul class="navbar-nav ml-auto mt-0">
            <li class="nav-item" @click="$emit('clicked')"><a class="cursor-pointer nav-link" v-scroll-to="{ el: '#header', offset: -20 }">Home</a></li>
            <li class="nav-item" @click="$emit('clicked')"><a class="cursor-pointer nav-link" v-scroll-to="{ el: '#loesung', offset: -40 }">{{ $t('solutionTitle') }}</a></li>
            <li class="nav-item" @click="$emit('clicked')"><a class="cursor-pointer nav-link" v-scroll-to="{ el: '#about', offset: -40 }">{{ $t('aboutTitle') }}</a></li>
            <li class="nav-item" @click="$emit('clicked')"><a class="cursor-pointer nav-link" v-scroll-to="{ el: '#contact', offset: -40 }">{{ $t('contactTitle') }}</a></li>
            <li>
            <LanguageSwitcher></LanguageSwitcher>
            </li>
          </ul>
          </div>
      </nav>
</template>


<script>
import LanguageSwitcher from './LanguageSwitcher.vue'
import Vue from 'vue';
Vue.component('dropdownelement', {
    data: function() {
        return {
            showChildren: false
        }
    }
})

  export default {
    name: 'Navigation',
    components: {
      LanguageSwitcher
    }
  }
</script>

<style>
  .cursor-pointer {
    cursor: pointer;
  }
</style>
