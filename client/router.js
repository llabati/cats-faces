import Vue from 'vue'
import VueRouter from 'vue-router'

import VotingPage from './components/VotingPage.vue'
import CatPage from './components/CatPage.vue'
import RankingPage from './components/RankingPage.vue'
import ConnectionPage from './components/ConnectionPage.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', name: 'connection', component: ConnectionPage },
    { path: '/vote', name:'voting', component: VotingPage },
    { path: '/rank', name: 'ranking', component: RankingPage },
    { path: '/cat/:name', name: 'cat', component: CatPage }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
