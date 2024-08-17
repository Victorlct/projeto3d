import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/icons.css';
import './assets/main.css';
import './scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';

createApp(App).mount('#app');

AOS.init();