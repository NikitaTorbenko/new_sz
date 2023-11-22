import { createApp } from 'vue';
import './index.css';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/lara-light-teal/theme.css';
import { createPinia } from 'pinia';

const store = createPinia();

const app = createApp(App);
app.use(PrimeVue).use(store).mount('#app');
