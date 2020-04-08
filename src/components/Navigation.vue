<template>
          <ul>
            <li class="active" @click="$emit('clicked')"><a class="cursor-pointer" v-scroll-to="{ el: '#header', offset: -20 }">Home</a></li>
            <li @click="$emit('clicked')"><a class="cursor-pointer" v-scroll-to="{ el: '#about', offset: -40 }">{{ $t('aboutTitle') }}</a></li>
            <li @click="$emit('clicked')"><a class="cursor-pointer" v-scroll-to="{ el: '#loesung', offset: -40 }">{{ $t('solutionTitle') }}</a></li>
            <li @click="$emit('clicked')"><a class="cursor-pointer" v-scroll-to="{ el: '#architektur', offset: -40 }">{{ $t('architectureTitle') }}</a></li>
            <li class="dropdown"><a class="cursor-pointer dropdown-toggle" data-toggle="dropdown">{{ $t('applicationTitle') }}</a>
              <ul class="dropdown-menu">
                <li class="dropdown-item"><a target="_blank" href="https://www.fastbordercrossing.org">{{ $t('driverAppTitle') }}</a></li>
                <li class="dropdown-item"><a target="_blank" href="https://checkpoint.fastbordercrossing.org">{{ $t('checkpointAppTitle') }}</a></li>
              </ul>
            </li>
            <li @click="$emit('clicked')"><a class="cursor-pointer" v-scroll-to="{ el: '#team', offset: -40 }">{{ $t('teamTitle') }}</a></li>
            <li @click="$emit('clicked')"><a class="cursor-pointer" v-scroll-to="{ el: '#contact', offset: -40 }">{{ $t('contactTitle') }}</a></li>
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
