<template>
  <div id="app">
  
     <app-header></app-header>
     <router-view></router-view>
  </div>
</template>

<script>
	import AppHeader from './components/containers/Header/Header'
export default {
  name: 'App',
    components: {
    AppHeader
  }
}
</script>

<style lang='scss'>
@import './stylesheets/_reset.scss';
@import './stylesheets/_common.scss';
</style>
