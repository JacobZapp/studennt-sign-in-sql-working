// This is telling main.js, the main file to import the code and happenings from the createApp function
import { createApp } from 'vue'

// This is telling main.js, the main file to import pinia store so that we can use it.
import { createPinia } from 'pinia'

// This is importing bootstrap styles for the app.
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import './style.css'
import App from './App.vue'


// createApp(App).mount('#app')
// TODO above is original code without using pinia store, below is what i want to do if i am using pinia for anything instead.
// TODO make app and pinia const variablesm and then app.use(pinia) is telling my code, 'Hey use the store for data mainly' I think
const app = createApp(App)
const pinia = createPinia()

app.use(pinia).mount('#app')