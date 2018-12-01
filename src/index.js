import Vue from 'vue'
import App from './components/App.vue'
import './assets/styles/application.css'
import './assets/images/bg.jpg'

const root = document.createElement('div')
document.body.appendChild(root)
new Vue({
  render: (h) => h(App)
}).$mount(root)