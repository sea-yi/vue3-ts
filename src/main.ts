import { createApp, App } from 'vue'
import { registerApp } from './global'
import 'normalize.css'
import './assets/css/index.less'

import rootApp from './App.vue'

import router from './router'
import store from './store'
import { setupStore } from './store'

// import syRequest from './service'

const app: App = createApp(rootApp)

registerApp(app)
app.use(store)
setupStore()
app.use(router)

app.mount('#app')

// interface DataType {
//   data: any
//   returnAny: string
// }

// syRequest.request<DataType>({
//   url: '/home/mutidata',
//   method: 'GET'
// })
