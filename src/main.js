import { createApp } from 'vue'
import App from './App.vue'
import "../src/assets/main.css"
import router from './components/router'
import store from './components/store'
// import { createApp } from "vue";
// 

createApp(App).use(router).use(store).mount('#app')
