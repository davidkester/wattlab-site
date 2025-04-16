// Import our custom CSS
import './scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

const app = createApp(App)

app.use(router)

app.component('Navbar', Navbar);
app.component('Footer', Footer);

app.mount('#app')
