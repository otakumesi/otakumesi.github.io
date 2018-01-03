<template>
  <div id="app">
    <h1 class="header-text">Otakumesi::IO#index</h1>
    <h2 class="sub-header-text">Contents</h2>
    <Contents></Contents>
    <h2 class="sub-header-text">MyActivities</h2>
    <main class="main">
      <AllActivities></AllActivities>
    </main>
  </div>
</template>

<script>
import Contents from './components/Contents'
import AllActivities from './components/AllActivities'

export default {
  components: {
    Contents,
    AllActivities
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
  padding-top: 30px;
  width: 100%;
}

.main {
  margin: 0 auto;
}

.header-text {
  font-size: 3rem;
}

.sub-header-text {
  display: inline-block;
  padding: 0 30px 10px;
  border-bottom: 1px solid;
  font-size: 2.4rem;
}

.main {
  background-color: #f9f9f9;
}
</style>
