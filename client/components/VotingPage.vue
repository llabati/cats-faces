<template>
    <div class="container col-10 mb-20 bg-white" id="voting">
        <section id="two-cats" class="row d-flex justify-content-between">
            <beauty-cat :currentCat="random[0]" v-on:score="modifyScore('left')"></beauty-cat>
            <beauty-cat :currentCat="random[1]" v-on:score="modifyScore('right')"></beauty-cat>
        </section>
        <section id="favorites">
            <cat-favorites></cat-favorites>
        </section>
    </div>
</template>

<script>
import BeautyCat from './BeautyCat.vue'
import CatFavorites from './CatFavorites'
import { store } from '../store.js'
import { Cats } from '../../lib/collections'
export default {
    data(){
        return {
            random: []
        }
    },
    store,
    meteor: {
        $subscribe: {
            'cats': []
        },
        cats() {
            return Cats.find({})
        },  
        
    },
    methods: {
        setNewCats: function(){
        let len = this.$store.state.cats.length
        this.random = []
        let left = Math.floor(Math.random() * len)
        this.random.push(left)
        let right = Math.floor(Math.random() * len)
        if (right === left) right = Math.floor(Math.random() * len)
        this.random.push(right)
        console.log('RANDOM', this.random)
        return this.random
        },
        modifyScore: function(side){
            console.log(side)
            let winner = side === 'left' ? this.cats[this.random[0]] : this.cats[this.random[1]]
            let looser = side === 'left' ? this.cats[this.random[1]] : this.cats[this.random[0]]
            console.log('WINNER:', winner)
            console.log('LOOSER:', looser)
            this.setNewScores(winner, looser)
            this.setVotes(winner)
            this.setNewCats()
        },
        setNewScores: function(winner, looser){
        
            let scoreW = winner.score
            console.log('WINNER S SCORE', scoreW)
            let scoreL = looser.score
            console.log('LOOSER S SCORE', scoreL)

            if (winner.votes < 20 || looser.votes < 20){
                scoreW += 100;
                scoreL -= 50;
                console.log('NEW SCORE:', scoreW)
            }
            else {
            let diff = scoreW - scoreL;
            console.log('DIFF:', diff)


            if (diff === 0) {
                scoreW += 100;
                scoreL -= 50;
            }
            if (diff > 0) {
                if (diff < scoreW / 2) {
                    scoreW += diff;
                    scoreL -= diff;
                }
                if (diff > scoreW / 2) {
                    scoreW += Math.floor(diff / 2);
                    scoreL -= Math.floor(diff / 2);
                }
            }
            if (diff < 0) {
                if (diff < Math.abs(scoreW) / 2) {
                    scoreW += Math.floor(diff / 2);
                    scoreL -= Math.floor(diff / 2);
                }
                if (diff > Math.abs(scoreW) / 2) {
                    scoreW += 2 * diff;
                    scoreL -= 2 * diff;
                    }           
                }
            }
            
            console.log('BEFORE COMMIT', winner.name, scoreW)
            console.log('BEFORE COMMIT II', looser.name, scoreL)

            Meteor.call('updateScore', scoreW, winner.name)
            Meteor.call('updateScore', scoreL, looser.name)

        },
        setVotes(winner){
            let winVotes = winner.votes
            winVotes++
            Meteor.call('updateVotes', winner, winVotes)
        }

    },
    created(){
        return this.setNewCats()
    },
    
    components: {
        BeautyCat,
        CatFavorites
    }
}
</script>

<style>
    #voting {
        padding: 20px;
        border: solid 5px blue;
    }
</style>


