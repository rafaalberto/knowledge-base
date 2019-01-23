import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'
import App from './App.vue'
import './config/bootstrap'
import './config/messages'

import store from './config/store'  
import router from './config/router'

Vue.config.productionTip = false

require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IlJhZmFlbCIsImVtYWlsIjoicmFmYWVsLmFsYmVydG8xNzAzQGdtYWlsLmNvbSIsImFkbWluIjp0cnVlLCJpc3N1ZWRBdCI6MTU0ODI2MDY2MywiZXhwaXJhdGlvbiI6MTU0ODUxOTg2M30.It8M7PThs2iffWFcKGpQO4bsNrWpifwCEglIp0KSr4M'

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
