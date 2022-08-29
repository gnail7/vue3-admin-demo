import { createApp } from 'vue'
import router from './router'
import elementPlus from 'element-plus'
import store from './store'
import 'element-plus/dist/index.css'
import * as Elicons from "@element-plus/icons-vue";

import App from './App.vue'

const app =  createApp(App)

for (const name in Elicons) {
    app.component(name, Elicons[name]);
  }
app.use(router)
app.use(store)
app.use(elementPlus)
app.mount('#app')

