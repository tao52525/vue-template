import Vue from 'vue'
import App from './App'
import { print } from './tool'

if (module.hot) {
  module.hot.accept()
}
print('index.js')
new Vue({
  render: h => h(App)
}).$mount('#app')