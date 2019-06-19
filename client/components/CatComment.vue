<template>
    <div class="card-body">
        <div class="input-group">
            <input type="text" class="form-control" placeholder="Laissez votre commentaire" ref="inputComment">
            <div class="input-group-append">
                <button class="btn btn-outline-secondary" v-on:click="setComment">Postez</button>
            </div>
        </div>
        <router-link class="my-3" style="text-decoration: none; cursor: pointer;" v-bind:to="{ name: 'cat', params: { id: thiscat.id }}">Les commentaires sur {{ thiscat.name }}, c'est par là.</router-link>
    </div>
</template>

<script>
import { store } from '../store'
export default {
    name: 'CatComment',
    props: {
        thiscat: Object
    },
    store,
    methods: {
        setComment(event) {
            let comment = this.$refs.inputComment.value
            console.log(comment)
            let com = {}
            com.id = this.thiscat.id
            com.comment = comment
            console.log(com)
            this.$store.commit('addComment', com)
            console.log('COMMIT COMMENT', com)
            comment = ''
        }
        
    }
    
}
</script>

<style>

</style>


