<template>
    <div class="card col-6 border border-info rounded-lg col">
        
        <div class="card-body">
            <img class="img-fluid card-img-top" v-bind:src="cat.pic">  
            <p class="lead text-info text-center"><strong>{{ cat.name }}</strong></p>
            <cat-comment :cat="cat"></cat-comment>  
        </div>
        <div class="card-footer border justify-content-right">
            <cat-vote :cat="cat" v-on:vote="setVote"></cat-vote>   
        </div>

    </div>
</template>

<script>
import CatComment from './CatComment.vue'
import CatVote from './CatVote.vue'
import { store } from '../store'
//import { Cats } from '../../lib/collections'
//import { Humans } from '../../lib/collections'
export default {
    name: 'BeautyCat',
    props: {
        left: Boolean,
        cat: Object

    },
    data(){
        return {
            
        }
    },
    store,
    
    methods: {
        setVote(){
            console.log('BEAUTYCAT has-voted')
            console.log('this currentcat', this.cat)
            let winning = this.cat.name
            this.$store.commit('UPDATE_TOTAL', winning)
            
            let newVote = this.cat.votes
            newVote++
            console.log('THIS-CURRENTCAT BEFORE MONGO', this.cat, newVote)
            Meteor.call('updateVotes', this.cat, newVote)
            this.$emit('score')
        }
        
    },
    components: {
        CatComment,
        CatVote
   } 
}
</script>
<style>

</style>


