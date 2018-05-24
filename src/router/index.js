import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 普通加载
const routes = [
    {
        path: '/auth/register',
        name: 'Register',
        component: () => import('@/views/auth/Register')
    }
]

const router = new Router({
    mode: 'history',
    routes
})

// 懒加载
// component: () => import('@/views/auth/Register')
export default router