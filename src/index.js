import Vue from 'vue'
import App from './App'
import router from './router'
import { print } from './tool'

if (module.hot) {
  module.hot.accept()
}
print('index.js')
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')