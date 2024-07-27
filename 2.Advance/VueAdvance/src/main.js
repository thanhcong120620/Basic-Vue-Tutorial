import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import GlobalComponents from './components/GlobalComponents.vue'
import ComponentVModel from './components/ComponentVModel.vue'

const app = createApp(App)
app.component('ComponentA', GlobalComponents).component('ComponentVModel', ComponentVModel)
app.provide('messageHelloFromJsApp', 'Hello VueJS') //dùng readonly('Hello VueJS') để ko cho người dùng update message

app.use(router)

app.mount('#app')
