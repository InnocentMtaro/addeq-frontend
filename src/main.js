import 'bootstrap/dist/css/bootstrap.min.css';
// Optionally include Bootstrap JS (e.g. for modals, dropdowns, etc.)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

createApp(App).use(router).mount('#app')
