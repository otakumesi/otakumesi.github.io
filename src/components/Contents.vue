<template>
  <div class="contents">
    <IconMenu>
      <CircleButton bg-color="#FF9800" trigger-component><Icon name="plus" scale="4"></Icon></CircleButton>
      <CircleButton bg-color="#9E9E9E">
        <a href="https://github.com/otakumesi" target="_blank"><Icon name="github" scale="4"></Icon></a>
      </CircleButton>
      <CircleButton bg-color="#8BC34A">
        <a href="http://qiita.com/Otakumesi" target="_blank"><Icon name="search" scale="4"></Icon></a>
      </CircleButton>
      <CircleButton bg-color="#2196F3">
        <a href="https://twitter.com/otakumesi" target="_blank"><Icon name="twitter" scale="4"></Icon></a>
      </CircleButton>
      <CircleButton bg-color="#FFC107">
        <a href="http://otakumesi.io/post" target="_blank"><Icon name="align-left" scale="4"></Icon></a>
      </CircleButton>
    </IconMenu>
  </div>
</template>

<script>
import 'vue-awesome/icons/flag'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import IconMenu from './IconMenu'
import CircleButton from './CircleButton'

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
.contents {
  text-align: center;
  width: 100%;
}
</style>
