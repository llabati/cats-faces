<template>
    <div class="card">

        <section>
            <h1 class="display-4 text-center text-info">{{ cat.name }}</h1>
            <img class="card-img-top" :src="cat.pic">
        </section>
        <section class="card-body">
            <h2 id="com" class="display-5 text-center text-muted">Tous les commentaires sur ce chat</h2>
            <ul class="list-group">
                <li v-for="comment in comments" :key="comment.id" class="list-group-item">{{ comment }}</li>
            </ul>
        </section>
    </div>
</template>

<script>
//import { store } from '../store.js'
import { Cats } from '../../lib/collections'
export default {
    name: 'Cat',
    //store,
    data(){
        return {
            id: this.$route.params.id
        }
    },
    meteor: {
        $subscribe: {
            //'this-cat': [],
            'cats': []
        },
        cats() {
            return Cats.find({})
        },  
        
    },

    computed: {
        cat() {
            return this.cats[this.id];
        },
        comments(){
            return this.cat.comments;
        }
    },
    
    
}
</script>
