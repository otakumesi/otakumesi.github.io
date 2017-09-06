<template>
  <div id="app">
    <h1>Otakumesi::IO#index</h1>
    <Contents></Contents>
  </div>
</template>

<script>
import Contents from './components/Contents'
export default {
  name: 'app',
  components: {
    Contents
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
  margin-top: 60px;
  width: 100%;
}
</style>
