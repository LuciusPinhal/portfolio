import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router';

import { createI18n } from 'vue-i18n';
import en from './locale/en.json';
import ptbr from './locale/pt-br.json';

const app = createApp(App);

app.config.globalProperties.$axios = axios;


// const cookieValue = document.cookie.split('=')[1];
// const defaultLocale = cookieValue ? cookieValue : 'ptbr';

const i18n = createI18n({
    locale: document.cookie.split('=')[1],
    messages: {
        EN: en,
        PTBR: ptbr
    }
})

app.use(router);
app.use(i18n);
app.mount('#app');

