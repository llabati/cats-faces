<template>
    <div class="card">
        <section class="card-body">
            <h2 id="com" class="display-5 text-center text-muted">Tous les commentaires sur <span class="text-info">{{ name }}</span></h2>
            <ul class="list-group">
                <li v-for="comment in comments" :key="comment.id" class="list-group-item bg-secondary">
                    <p class="text-white"><strong>{{ comment.author }}</strong><em style="margin-left: 15px;">Posté le {{ comment.date }} </em></p>
                    <p class="bg-white" style="padding: 2%">{{ comment.content }}</p>
                </li>
            </ul>
        </section>
        <div class="card-footer">
                <button class="btn btn-info float-right" @click="returnToPreviousPage">Continuer à voter</button>
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
            console.log('THIS CAT COMPUTED', this.cats.find(c => c.name === this.name))
            return this.cats.find(c => c.name === this.name)
        },
    },
    methods: {
        returnToPreviousPage(){
            history.back()
        }
    },
    mounted(){
        console.log('THIS CAT', this.cat)
    }
    
    
}
</script>
