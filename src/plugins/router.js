import {createRouter, createWebHistory} from 'vue-router';
import {defineAsyncComponent} from "vue";

const ifAuthorized = (to, from, next) => {
    if (localStorage.getItem('token')) {
        next()
    } else {
        next('/login');
    }
}

const ifNotAuthorized = (to, from, next) => {
    if (localStorage.getItem('token')) {
        next('/')
    } else {
        next()
    }
}

const routes = [
    {
        path: '/',
        component: ()=> import('@/pages/HomePage.vue'),
        meta: {
            layout: defineAsyncComponent(()=> import('@/layouts/DefaultLayout.vue')),
        },
        beforeEnter: ifAuthorized
    },
    {
        path: '/book-content/:bookId',
        component: ()=> import('@/pages/BookContent.vue'),
        meta: {
            layout: defineAsyncComponent(()=> import('@/layouts/DefaultLayout.vue')),
        },
        beforeEnter: ifAuthorized
    },
    {
        path: '/login',
        component: ()=> import('@/pages/LoginPage.vue'),
        meta: {
            layout: defineAsyncComponent(()=> import('@/layouts/BlankLayout.vue')),
        },
        beforeEnter: ifNotAuthorized
    },
    {
        path: '/categories/:id',
        component: ()=> import('@/pages/HomePage.vue'),
        meta: {
            layout: defineAsyncComponent(()=> import('@/layouts/DefaultLayout.vue')),
        },
        beforeEnter: ifAuthorized
    },
]

export default createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'bg-gray-600',
})