import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Home from '@/views/Home'
import SismaForm from '@/views/SismaForm'
import Error from '@/views/Error'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'login',
            component: Login,
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
        },
        {
            path: 'forms/:form',
            name: 'sisma-form',
            component: SismaForm
        },
        {
            path: '*',
            name: 'Error',
            component: Error,
        },
    ],
})
