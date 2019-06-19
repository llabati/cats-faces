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
import { store } from '../store.js'
export default {
    name: 'Cat',
    store,
    data(){
        return {

            id: this.$route.params.id
        }
    },
    computed: {
        cat(id) {
            return this.$store.state.cats[this.id];
        },
        comments(){
            return this.cat.comments;
        }
    },
    created(){
        console.log(this.cat)
    },
    mounted(){
        console.log('MOUNTED', this.cat.id, this.cat.name, this.cat.comments)
    }
    
}
</script>
