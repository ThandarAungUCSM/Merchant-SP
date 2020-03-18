<template>
  <div id="app" class="app-bg">
    <router-view/>
  </div>
</template>

<script>

import { mapState, mapMutations } from 'vuex'
export default {
  name: 'App',
  computed: {
    ...mapState('lang',
      [
        'selectedLang'
      ])
  },
  methods: {
    ...mapMutations('lang', [
      'setDefaultLanguage'
    ])
  },
  created () {
    // Set language
    this.setDefaultLanguage()
    this.$i18n.locale = this.selectedLang
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /* margin-top: 60px; */
  }
  .app-bg {
    /* min-height: 730px; */
    background: #F0F0F0;
  }
</style>
