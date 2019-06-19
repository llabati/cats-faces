<template>
    <div id="app" class="bg-info pb-50">
        <div class="jumbotron-fluid">
            <h1 class="col-10 offset-1 display-1 text-center text-white">Faites gagner<br>votre chat préféré</h1>
            <h2 class="col-10 offset-1 display-4 text-center">A chaque fois, deux chats : à vous de choisir</h2>
        </div>
        <router-view/>
        
        <div id="num-votes" class="container-fluid row justify-content-center" v-if="$route.name !='cat'">
            
            <div class="col">
                <p class="display-4 text-center text-white"><strong>Vous avez voté {{ totalVotes }} fois.</strong></p>
            </div>
            
        </div>
        <div v-if="totalVotes > 50 && $route.path != '/rank'">
            <navigation-bar></navigation-bar>
        </div>
        <div v-else-if="totalVotes <= 50 && $route.path != '/rank'" >
            <div class="container mb-100">
                <p class="my-20 display-5 text-white text-center">Vous ne pourrez accéder au classement que lorsque vous aurez voté 50 fois.</p>
            </div>
        </div>
        <div v-else-if="$route.path === '/rank'">
        </div>
    </div>
</template>

<script>
import NavigationBar from './NavigationBar.vue'
import VotingPage from './VotingPage'
import { store } from '../store.js'
export default {
    data(){
        return {
            
        }
    },
    store,
    computed: {
        totalVotes(){
            return this.$store.state.total
        }
    },
    
    components: {
        NavigationBar,
        VotingPage
    }
}
</script>


<style>
#num-votes {
    margin-top: 25px;
}

</style>
