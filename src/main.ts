import { createApp } from 'vue';
import './index.css';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/lara-light-teal/theme.css';
import { createYmaps } from 'vue-yandex-maps';

const app = createApp(App);

app
  .use(
    createYmaps({
      apikey: '34fd3bf2-a278-46e1-be60-28504fb1e52b',
    })
  )
  .use(PrimeVue)
  .mount('#app');
