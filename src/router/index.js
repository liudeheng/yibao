import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import ('../pages/Home')
const Contribution = () => import ('../pages/Contribution')
const Rank = () => import ('../pages/Rank')
const Vote = () => import ('../pages/Vote')
const Rules = () => import ('../pages/Rules')
const Detail = () =>import ('../pages/Detail')

Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect: '/home'
  },
  {
    path:'/home',
    component: Home
  },
  {
    path:'/rank',
    component: Rank
  },
  {
    path:'/rules',
    component: Rules
  },
  {
    path:'/vote',
    component: Vote
  },
  {
    path:'/contribution',
    component: Contribution
  },
  {
    path:'/detail',
    component: Detail
  }



]
const router = new VueRouter({
  routes,
  mode:'history'
})

export default router