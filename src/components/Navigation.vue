<template>
        
          <ul>
            <li class="active" @click="$emit('clicked')"><a class="cursor-pointer" v-scroll-to="{ el: '#header', offset: -20 }">Home</a></li>
            <li @click="$emit('clicked')"><a class="cursor-pointer" v-scroll-to="{ el: '#about', offset: -40 }">Über&nbsp;uns</a></li>
            <li @click="$emit('clicked')"><a class="cursor-pointer" v-scroll-to="{ el: '#loesung', offset: -40 }">Unsere&nbsp;Lösung</a></li>
            <li @click="$emit('clicked')"><a class="cursor-pointer" v-scroll-to="{ el: '#architektur', offset: -40 }">Architektur</a></li>
            <li class="dropdown"><a class="cursor-pointer dropdown-toggle" data-toggle="dropdown">Anwendungen</a>
              <ul class="dropdown-menu">
                <li class="dropdown-item"><a target="_blank" href="https://www.fastbordercrossing.org">Fahrer-Frontend</a></li>
                <li class="dropdown-item"><a target="_blank" href="https://checkpoint.fastbordercrossing.org">Checkpoint-Frontend</a></li>
              </ul>
            </li>
            <li @click="$emit('clicked')"><a class="cursor-pointer" v-scroll-to="{ el: '#team', offset: -40 }">Team</a></li>
            <li @click="$emit('clicked')"><a class="cursor-pointer" v-scroll-to="{ el: '#contact', offset: -40 }">Kontakt 
            </a></li>
            <li>
            <LanguageSwitcher></LanguageSwitcher>
            </li>
          </ul>

</template>


<script>
import LanguageSwitcher from './LanguageSwitcher.vue'
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
