import { createApp } from 'vue';

//import style
import './assets/scss/main.scss';

//import bootstrap
import '../node_modules/bootstrap';

//import router
import { router } from './router';

//import vue root component
import App from './App.vue';

createApp(App)
    .use(router)
    .mount('#app');
