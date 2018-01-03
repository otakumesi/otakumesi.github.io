import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import axios from 'axios'
import X2JS from 'x2js'
import QiitaActivity from '../models/QiitaActivity'
import HatenaBlogActivity from '../models/HatenaBlogActivity'
import GithubCommitActivity from '../models/GithubCommitActivity'

const ActivitiesStore = new Vuex.Store({
  state: {
    activities: []
  },
  mutations: {
    getQiitaAcitivities (state, qiitaArticles) {
      this.state.activities = this.state.activities.concat(QiitaActivity.createFromJSON(qiitaArticles))
    },
    getHatenaBlogActivities (state, hatenaBlogArticles) {
      this.state.activities = this.state.activities.concat(HatenaBlogActivity.createFromRSS(hatenaBlogArticles))
    },
    getGithubCommitActivities (state, githubCommitEvents) {
      this.state.activities = this.state.activities.concat(GithubCommitActivity.createFromGithubEvents(githubCommitEvents))
    }
  },
  actions: {
    getQiitaAcitivities ({ commit }) {
      axios.request({
        method: 'GET',
        baseURL: 'https://qiita.com/',
        url: '/api/v2/users/Otakumesi/items',
        transformResponse: [qiitaJSON => {
          let qiitaArticles = JSON.parse(qiitaJSON)
          return qiitaArticles
        }]
      })
        .then(response => {
          if (response.status === 200) {
            commit('getQiitaAcitivities', response.data)
          }
        })
    },
    getHatenaBlogActivities ({ commit }) {
      axios.request({
        method: 'GET',
        baseURL: 'http://otakumesi.hatenablog.jp/',
        url: '/rss',
        transformResponse: [articlesXML => {
          let x2js = new X2JS()
          let xmlObj = x2js.xml2js(articlesXML)
          let item = xmlObj.rss.channel.item
          if (Array.isArray(item)) {
            return item
          } else {
            return Array.of(item)
          }
        }]
      })
        .then(response => {
          if (response.status === 200) {
            commit('getHatenaBlogActivities', response.data)
          }
        })
    },
    getGithubCommitActivities ({ commit }) {
      axios.request({
        method: 'GET',
        baseURL: 'https://api.github.com',
        url: '/users/otakumesi/events',
        transformResponse: [eventsJSON => {
          let events = JSON.parse(eventsJSON)
          return events.filter(event => {
            return event.type === 'PushEvent'
          })
        }]
      })
        .then(response => {
          if (response.status === 200) {
            commit('getGithubCommitActivities', response.data)
          }
        })
    }
  }
})

export default ActivitiesStore
