<template>
    <div class="card col-6 border border-info rounded-lg col">
        
        <div class="card-body">
            <img class="img-fluid card-img-top" v-bind:src="cat.pic">
            <p class="lead text-info text-center"><strong>{{ cat.name }}</strong></p>
            <cat-comment :thiscat="cat"></cat-comment>
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
export default {
    name: 'BeautyCat',
    props: {
        side: String,
        currentCat: Number
    },
    store,
    
    data(){
        return {
            win: false
        }
    },

    computed: {
        cat(){
            return this.$store.state.cats[this.currentCat]
            
        }

    }, 
    watch: {
        win(){
            this.$emit('score')
        }
    },
    methods: {
        setVote(){
            console.log('BEAUTYCAT has-voted')
            this.win = !this.win
            let indexW = this.currentCat
            this.$store.commit('updateTotal')
            this.$store.commit('updateVote', this.currentCat)
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


