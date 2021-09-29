import { createApp, App } from 'vue'
import { registerApp } from './global'

import rootApp from './App.vue'

import router from './router'
import store from './store'
import syRequest from './service'

const app: App = createApp(rootApp)

registerApp(app)
app.use(router)
app.use(store)
app.mount('#app')

syRequest.request({
  url: '/home/mutidata',
  method: 'GET'
})
