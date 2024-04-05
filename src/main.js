import { createApp } from 'vue';
import i18n from './i18n'
//import store from './store/store';


import App from './App.vue';
import router from './router/index.js';

// import primevue 
import PrimeVue from 'primevue/config';
//theme
import "primevue/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primevue/resources/primevue.min.css";

import ToastService from 'primevue/toastservice';


import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {fas} from "@fortawesome/free-solid-svg-icons";
import vuelidate from 'vuelidate';
import { createPinia } from 'pinia';

library.add(fas);
createApp(App)
  .use(router)
  .use(i18n)
  .use(PrimeVue)
  .use(ToastService)
  .use(createPinia())
  .use(vuelidate)
  .component("fa", FontAwesomeIcon)
  .mount("#app");
