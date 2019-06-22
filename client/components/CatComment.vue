<template>
    <div class="card-body">
        <div class="input-group">
            <input type="text" class="form-control" placeholder="Laissez votre commentaire" ref="inputComment">
            <div class="input-group-append">
                <button class="btn btn-outline-secondary" v-on:click="setComment">Postez</button>
            </div>
        </div>
        <router-link class="my-3" style="text-decoration: none; cursor: pointer;" v-bind:to="{ name: 'cat', params: { id: cat.id }}">Les commentaires sur {{ cat.name }}, c'est par là.</router-link>
    </div>
</template>

<script>
import { store } from '../store'
import { Meteor } from 'meteor/meteor'
import { Cats } from '../../lib/collections'
export default {
    name: 'CatComment',
    props: {
        cat: Object
    },
    store,
    data(){
        return {
            //coms: []
        }
    },
    computed: {
        coms(){
            return this.cat.comments
        }
    },
    methods: {
        setComment(event) {
            let comment = this.$refs.inputComment.value
            console.log(comment)
            //let com = {}
            //com.id = this.cat.id
            //com.comment = comment
            //console.log(com)
            let id = this.cat.id 
            
            this.coms.push(comment)
            console.log(this.coms)
            Meteor.call('insertComment', this.coms, id)
            //this.$store.commit('addComment', com)
            //console.log('COMMIT COMMENT', com)
            this.$refs.inputComment.value = ''
        }
       
    }
    
}
</script>

<style>

</style>


