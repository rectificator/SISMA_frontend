import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Home from '@/views/Home'
import SismaForms from '@/views/SismaForms'
import Reporte from '@/views/Reporte'
import PanelAdministracion from '@/views/PanelAdministracion'
import FormBase from '@/views/FormBase'
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
            path: '/forms/:form',
            name: 'sisma-form',
            component: SismaForms,
        },
        {
            path: '/reporte',
            name: 'reporte',
            component: Reporte,
        },
        {
            path: '/admin',
            name: 'admin',
            component: PanelAdministracion,
        },
        {
            path: '/form/:form',
            name: 'form',
            component: FormBase,
        },
        {
            path: '*',
            name: 'Error',
            component: Error,
        },
    ],
})
