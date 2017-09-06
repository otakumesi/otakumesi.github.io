<template>
  <div :class="iconMenuClass">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'icon-menu',
    methods: {
      toggleComponent (e) {
        this.isOpen = !this.isOpen
      }
    },
    computed: {
      iconMenuClass () {
        return {
          'icon-menu': true,
          'icon-active': this.isOpen,
          'icon-hidden': !this.isOpen
        }
      }
    },
    data () {
      return {
        isOpen: false
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.triggerElem = this.$el.querySelector('[trigger-component]')
        this.triggerElem.addEventListener('click', this.toggleComponent)
      })
    }
  }
</script>

<style>
.icon-menu .circle-button {
  cursor: pointer;
}

.icon-menu .circle-button:first-child {
}

.icon-menu .circle-button:nth-child(n+2) {
  transition: transform 0.5s ease-out;
  -moz-transition: transform 0.5s ease-out;
  -webkit-transition: transform 0.5s ease-out;
  -o-transition: 0.5s ease-out;
  -ms-transition: 0.5s ease-out;
  transform: scale(0);
  -webkit-transform: scale(0);
  -moz-transform: scale(0);
  -o-transform: scale(0);
  -ms-transform: scale(0);
}

.icon-menu.icon-active .circle-button:nth-child(n+2) {
  transform: scale(1);
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  -o-transform: scale(1);
  -ms-transform: scale(1);
}

.icon-menu.icon-active .circle-button:nth-child(2) {
  transition-delay: 0.1s;
}

.icon-menu.icon-active .circle-button:nth-child(3) {
  transition-delay: 0.2s;
}

.icon-menu.icon-active .circle-button:nth-child(4) {
  transition-delay: 0.3s;
}

.icon-menu.icon-hidden .circle-button {
  transition-delay: 0s;
}

</style>
