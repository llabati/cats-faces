<template>
    <div class="card">

        <section>
            <h1 class="display-4 text-center text-info">{{ name }}</h1>
            <div class="col-6 offset-3">
                <img :src="`public/${cat.pic}`" :alt="cat.name"/>
                
            </div>
        </section>
        <section class="card-body">
            <h2 id="com" class="display-5 text-center text-muted">Tous les commentaires sur ce chat</h2>
            <ul class="list-group">
                <li v-for="comment in comments" :key="comment.id" class="list-group-item bg-gray">
                    <p><strong>{{ comment.author }}</strong></p>
                    <p class="bg-white">{{ comment.content }}</p>
                </li>
            </ul>
        </section>
        <div class="card-footer">
                <button class="btn btn-info float-right" @click="$router.push('/vote')">Continuer à voter</button>
        </div>
    </div>
</template>

<script>
import { Cats } from '../../lib/collections'
import { Comments } from '../../lib/collections'
export default {
    name: 'Cat',
    data(){
        return {
            name: this.$route.params.name
        }
    },
    meteor: {
        $subscribe: {
            'cats': [],
            'comments': [],
            
        },
        
        cats(){
            return Cats.find({})
        },
        
        comments(cat){
            return Comments.find({cat: this.name})
        },
        
    },

    computed: {
        cat(name) {
            console.log(this.cats.find(c => c.name === this.name))
            return this.cats.find(c => c.name === this.name)
        },
    },
    
    
}
</script>
