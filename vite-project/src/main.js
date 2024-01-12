import { createApp } from 'vue';
import './css/style.css';
import './bootstrap/bootstrap.min.css'
import App from './App.vue';
import router from './router.js';
import axios from 'axios';

const app = createApp(App);
app.config.globalProperties.$axios = axios;
app.use(router);
app.mount('#app');
