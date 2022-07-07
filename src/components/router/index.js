import { createWebHistory, createRouter } from "vue-router";
import VueMain from '../Main/VueMain.vue';
import Templates from '../views/Templates.vue'

const routes = [
    {path: '', name: 'Home', component:VueMain },
    {path: '/templates', name: 'Templates', component:Templates },
    //Bu yerga routlar qoshilib  boradi

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;