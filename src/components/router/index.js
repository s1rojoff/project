import { createWebHistory, createRouter } from "vue-router";
import VueMain from '../Main/VueMain.vue';
import Templates from '../views/Templates.vue'
import Features from '../views/Features.vue'
import ForTeams from "../views/ForTeams.vue"

const routes = [
    {path: '', name: 'Home', component:VueMain },
    {path: '/features', name: 'Features', component:Features },
    {path: '/templates', name: 'Templates', component:Templates},
    {path: '/business', name:'ForTeams', component: ForTeams}
    //Bu yerga routlar qoshilib  boradi

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;