import { createApp } from 'vue';
import i18n from './i18n'
//import store from './store/store';


import App from './App.vue';
import router from './router/index.js';

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {fas} from "@fortawesome/free-solid-svg-icons";
import vuelidate from 'vuelidate';
import { createPinia } from 'pinia';

library.add(fas);
createApp(App).use(router).use(i18n).use(createPinia()).use(vuelidate).component("fa", FontAwesomeIcon).mount('#app')
