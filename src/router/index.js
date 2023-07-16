import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../components/HomePage.vue'
import RegisterPage from '../components/RegisterPage.vue'
import LoginPage from '../components/LoginPage.vue'
import PokemonDisplay from '../components/PokemonDisplay.vue'
import OpenWeatherMap from '../components/OpenWeatherMap.vue'
import GetCustomer from '../components/GetCustomer.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterPage
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/pokemon',
    name: 'pokemon',
    component: PokemonDisplay
  },
  {
    path: '/weather ',
    name: 'weather ',
    component: OpenWeatherMap
  },
  {
    path: '/getcustomer ',
    name: 'getcustomer ',
    component: GetCustomer
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
