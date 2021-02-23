import { Vue } from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {path: '/login', component: loginComponent},
    {path: '/home', component: HomeComponent}
]

const router = new VueRouter({
    routes
})

Vue(App, router).mount('#app')

// new Vue({
//     router,
//     render: h => h(App),
// }).$mount('#app')