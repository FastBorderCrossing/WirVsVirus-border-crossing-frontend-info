<template>
    <li class="dropdown"><a class="cursor-pointer dropdown-toggle" data-toggle="dropdown"><img width="12" :src="getLangFlag()" /> {{activeLang}}</a>
      <ul class="dropdown-menu">
        <li @click="changeLang(lang.lang)" class="dropdown-item cursor-pointer" v-for="(lang, i) in langs" :key="`Lang${i}`"><a><img :src="lang.flag" width="12" /> {{lang.label}}</a></li>
      </ul>
    </li>
</template>

<script>

export default {
  name: 'locale-changer',
  data () {
    return { 
        activeLang: this.$i18n.locale,
        langs: [
            {
            'label': 'deutsch',
            'lang': 'de',
            'flag': require('../assets/flags/de.svg')
            },
            {
            'label': 'english',
            'lang': 'en', 
            'flag': require('../assets/flags/en.svg')
            },
            // {
            // 'label': 'español',
            // 'lang': 'es', 
            // 'flag': require('../assets/flags/es.svg')
            // },
            // {
            // 'label': 'français',
            // 'lang': 'fr', 
            // 'flag': require('../assets/flags/fr.svg')
            // }
            ]
        }
  },
  methods: {
    changeLang: function(lang) {
      this.$i18n.locale = lang
      this.activeLang = lang;
    },
    getLangFlag: function() {
      return require('../assets/flags/'+this.$i18n.locale+'.svg')
    }
  }
}
</script>

<style>
  .cursor-pointer {
    cursor: pointer;
  }
</style>