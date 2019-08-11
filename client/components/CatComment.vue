<template>
    <div class="card-body">
        <div class="input-group">
            <input type="text" class="form-control" placeholder="Laissez votre commentaire" ref="inputComment">
            <div class="input-group-append">
                <button class="btn btn-outline-secondary" v-on:click="setComment">Postez</button>
            </div>
        </div>
        <router-link class="my-3" style="text-decoration: none; cursor: pointer;" v-bind:to="{ name: 'cat', params: { name: cat.name }}">Les commentaires sur {{ cat.name }}, c'est par là.</router-link>
    </div>
</template>

<script>
import { store } from '../store'
import { Meteor } from 'meteor/meteor'
import { Cats } from '../../lib/collections'
import { Comments } from '../../lib/collections'
import { Humans } from '../../lib/collections'
export default {
    name: 'CatComment',
    props: {
        cat: Object,
        currentHuman: String
    },
    store,
    data(){
        return {

        }
    },
    computed: {
        
    },
    methods: {
        setComment(event) {
            let comment = this.$refs.inputComment.value
            console.log(comment)

            let catName = this.cat.name 
            let humanName = this.$store.state.author
            
            Meteor.call('insertComment', comment, humanName, catName)

            this.$refs.inputComment.value = ''
        }
       
    }
    
}
</script>

<style>

</style>


