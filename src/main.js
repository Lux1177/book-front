import './assets/main.css'
import router from '@/plugins/router.js'

import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from "pinia";

createApp(App)
    .use(createPinia())
    .use(router)
    .mount('#app')