<template>
  <div id="app">
    <div id="top">
      <app-header></app-header>
    </div>

    <div id="app-content">
      <router-view></router-view>
    </div>

    <div id="nav">
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
  import appHeader from './components/AppHeader'
  import appFooter from './components/AppFooter'
  export default {
    components: {
      appHeader,
      appFooter
    }
  }
</script>

<style lang="scss">
  #app{
    width: 3.75rem;
    margin: .2rem auto;
    padding-bottom: .7rem;
    overflow: hidden;
    #top{
      top: 0;
      position: fixed;
      z-index: 999;
    }
    #nav{
      bottom: 0;
      position: fixed;
    }
  }
</style>
