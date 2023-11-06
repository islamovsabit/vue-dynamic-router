import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../pages/HomeView.vue';
import AboutView from '../pages/AboutView.vue';
import BlogPost from '../pages/BlogPost.vue'

const routes = [
    { path: '/', component: HomeView },
    { path: '/about', component: AboutView },
    { path: '/blog/:slug', component: BlogPost},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router