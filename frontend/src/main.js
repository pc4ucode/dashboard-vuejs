import {Vue} from 'vue'
import {App} from './App.vue'
import {VueRouter} from 'vue-router'

import LoginComponent from './pages/Login/LoginComponent'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: LoginComponent },
]

const router = new VueRouter({
    routes
})

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')