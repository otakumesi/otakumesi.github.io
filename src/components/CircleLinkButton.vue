<template>
  <div class="circle-button">
    <a :href="href" target="_blank">
      <button :style="buttonStyle"><slot></slot></button>
    </a>
  </div>
</template>

<script>
  export default {
    name: 'cicle-button',
    props: ['bgColor', 'href'],
    data () {
      return {
        href: this.href,
        buttonStyle: { 'background-color': this.bgColor }
      }
    }
  }
</script>

<style>
div {
  display: inline-block;
}

button {
  width: 100px;
  height: 100px;
  margin: 10px;
  border: none;
  border-radius: 50px;
  text-align: center;
  vertical-align: middle;
  color: black;
  box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.4);
}

button a {
  color: black;
}

button a:hover {
  color: black;
}

button:active {
  box-shadow: none;
}
</style>
