<template>
  <div class="contents">
    <IconMenu>
      <CircleLinkButton bg-color="#FF9800" trigger-component><Icon name="plus" scale="4"></Icon></CircleLinkButton>
      <CircleLinkButton bg-color="#9E9E9E" href="https://github.com/otakumesi">
        <Icon name="github" scale="4"></Icon></a>
      </CircleLinkButton>
      <CircleLinkButton bg-color="#8BC34A" href="http://qiita.com/Otakumesi">
        <Icon name="search" scale="4"></Icon>
      </CircleLinkButton>
      <CircleLinkButton bg-color="#2196F3" href="https://twitter.com/otakumesi">
        <Icon name="twitter" scale="4"></Icon>
      </CircleLinkButton>
      <CircleLinkButton bg-color="#FFC107" href="http://otakumesi.hatenablog.jp/">
        <Icon name="align-left" scale="4"></Icon>
      </CircleLinkButton>
    </IconMenu>
  </div>
</template>

<script>
import 'vue-awesome/icons/flag'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import IconMenu from './IconMenu'
import CircleLinkButton from './CircleLinkButton'

export default {
  name: 'app',
  components: {
    IconMenu,
    CircleLinkButton,
    Icon
  }
}
</script>

<style>
.contents {
  background-color: #f9f9f9;
  text-align: center;
  width: 100%;
  border-bottom: 1px dashed;
  padding: 30px 0;
}
</style>
