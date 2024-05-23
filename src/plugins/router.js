import {createRouter, createWebHistory} from 'vue-router';
import {defineAsyncComponent} from "vue";

const routes = [
    {
        path: '/',
        component: ()=> import('@/pages/HomePage.vue'),
        meta: {
            layout: defineAsyncComponent(()=> import('@/layouts/DefaultLayout.vue')),
        }
    },
    {
        path: '/book-content',
        component: ()=> import('@/pages/BookContent.vue'),
        meta: {
            layout: defineAsyncComponent(()=> import('@/layouts/DefaultLayout.vue')),
        }
    },
    {
        path: '/login',
        component: ()=> import('@/pages/LoginPage.vue'),
        meta: {
            layout: defineAsyncComponent(()=> import('@/layouts/BlankLayout.vue')),
        }
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})