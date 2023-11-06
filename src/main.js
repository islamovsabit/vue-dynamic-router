import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './views/App.vue'
import router from './router/router.js'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
