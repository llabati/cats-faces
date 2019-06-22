<template>
    <div class="card">
        <img class="img-fluid card-img-top" src="static/img/PELOTE.jpg">
        <caption class="text-center">PELOTE</caption>
        
        <!-- <cat-vote :currentCat="random[0]" v-on:vote="transmitVote(side)"></cat-vote>  -->
        
    </div>  

</template>

<script>
import { store } from '../store'
import CatVote from './CatVote'

export default {
    name: 'CatDisplay',
    store,
    props: {
        cat: Object
    },
    /*data(){
        return{
            side: left
        }
    },
    methods: {
        transmitVote(side){
            return $emit('support', this.side)
        }
    },
    components: {
        CatVote
    }  */

}
</script>
