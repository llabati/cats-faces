<template>
    <div class="card">

        <section>
            <h1 class="display-4 text-center text-info">{{ cat.name }}</h1>
            <div class="col-6 offset-3">
                <img :src="pic" :alt="cat.name"/>
                
            </div>
        </section>
        <section class="card-body">
            <h2 id="com" class="display-5 text-center text-muted">Tous les commentaires sur ce chat</h2>
            <ul class="list-group">
                <li v-for="comment in comments" :key="comment.id" class="list-group-item">{{ comment }}</li>
            </ul>
        </section>
        <div class="card-footer">
                <button class="btn btn-info float-right" @click="$router.push('/')">Continuer à voter</button>
        </div>
    </div>
</template>

<script>
import { Cats } from '../../lib/collections'
export default {
    name: 'Cat',
    data(){
        return {
            name: this.$route.params.name
        }
    },
    meteor: {
        $subscribe: {
            'cats': []
        },
        cats() {
            return Cats.find({})
        },  
        
    },

    computed: {
        cat() {
            return this.cats.find(c => c.name === this.name)
        },
        comments(){
            return this.cat.comments;
        },
        pic(){
            return `public/${this.cat.pic}`
        }
    },
    
    
}
</script>
