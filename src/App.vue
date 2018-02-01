<template>
  <div class="g-wrapper">
    <div class="g-inner">
      <div class="content" id="app">
        <header class="header">
          <h1 class="header-text">Otakumesi::IO#index</h1>
        </header>
        <main class="main">
        <div class="main-content">
          <h2 class="sub-header-text">Contents</h2>
          <Contents></Contents>
        </div>
        <div class="main-content">
          <h2 class="sub-header-text">MyActivities</h2>
          <div class="activity-wrapper">
            <AllActivities></AllActivities>
          </div>
        </div>
        </main>
        <footer class="footer">
          © otakumesi 2016-2017
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import Contents from './components/Contents'
import AllActivities from './components/AllActivities'
import './assets/style.scss'

export default {
  components: {
    Contents,
    AllActivities
  }
}
</script>

<style lang="scss">
.g-wrapper {
  width: 100%;
}

.g-inner {
  margin: auto;
  width: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.content {
  width: 100%;
}

.header {
  margin: auto;
  padding: 3rem 0;
  background-image: url('./assets/macbook.jpg');
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  background-size: cover;
  .header-text {
    display: inline-block;
    font-size: 6vw;
    padding: 3vw 3vh;
    border-radius: 3rem;
    background-color: rgba(255, 255, 255, 0.8);
  }
}

.main-content {
  margin: 0 auto;
  padding: 30px 0;
  width: 100%;
  background-color: #f9f9f9;
  &:nth-child(odd) {
    background-color: #fff;
  }
}

.main-content-title {
  display: block;
  background-color: #fff;
}

.sub-header-text {
  display: inline-block;
  padding: 0 30px 10px;
  border-bottom: 1px solid;
  font-size: 2.4rem;
}

.activity-wrapper {
  display: block;
  max-width: 780px;
  margin: 0 auto;
}

.footer {
  padding: 10px 0 10px;
  background-color: #000;
  color: #fff;
}
</style>
