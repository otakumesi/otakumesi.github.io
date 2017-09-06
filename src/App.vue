<template>
  <div id="app">
    <IconMenu>
      <CircleButton icon="plus" bg-color="#FF9800"></CircleButton>
      <CircleButton icon="github" bg-color="#9E9E9E">
        <a href="https://github.com/otakumesi"><Icon name="github" scale="4"></Icon></a>
      </CircleButton>
      <CircleButton bg-color="#8BC34A">
        <a href="http://qiita.com/Otakumesi"><Icon name="search" scale="4"></Icon></a>
      </CircleButton>
      <CircleButton icon="twitter" bg-color="#2196F3">
        <a href="https://twitter.com/otakumesi"><Icon name="twitter" scale="4"></Icon></a>
      </CircleButton>
    </IconMenu>
  </div>
</template>

<script>
import 'vue-awesome/icons/flag'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import IconMenu from './components/IconMenu'
import CircleButton from './components/CircleButton'

export default {
  name: 'app',
  components: {
    IconMenu,
    CircleButton,
    Icon
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
}
</style>
