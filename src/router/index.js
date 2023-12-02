import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView.vue'
import ContactView from '../views/ContactView.vue'

const routes=[
    {
    path: '/',
    name:'HomeView',
    component: HomeView
    },
    {
        path: '/products',
        name:'ProductsView',
        component:ProductsView
    },
    {
        path:'/contact',
        name:'ContactView',
        component:ContactView
    }
]


const router = createRouter({
    history:createWebHistory(),
    routes
})
export default router