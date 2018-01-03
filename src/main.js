// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import VueMoment from 'vue-moment'

Vue.use(VueMoment)

Vue.config.debug = true
Vue.config.devtools = true
Vue.config.productionTip = true

import App from './App'
import ActivitiesStore from './stores/ActivitiesStore'

ActivitiesStore.dispatch('getGithubCommitActivities')

/* eslint-disable no-new */
new Vue({
  store: ActivitiesStore,
  el: '#app',
  render (h) { return h(App) }
})
