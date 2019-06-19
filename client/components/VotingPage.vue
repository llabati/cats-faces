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
export default {
    data(){
        return {
            random: []
        }
    },
    store,
    methods: {
        setNewCats: function(){
        this.random = []
        let left = Math.floor(Math.random() * 25)
        this.random.push(left)
        //this.random.push(this.$store.state.cats[left])
        let right = Math.floor(Math.random() * 25)
        if (right === left) right = Math.floor(Math.random() * 25)
        this.random.push(right)
        //this.random.push(this.$store.state.cats[right])
        console.log(this.random)
        return this.random
        },
        modifyScore: function(side){
            console.log(side)
            let winner = side === 'left' ? this.$store.state.cats[this.random[0]] : this.$store.state.cats[this.random[1]]
            let looser = winner.id === this.random[0] ? this.$store.state.cats[this.random[1]] : this.$store.state.cats[this.random[0]]
            console.log('WINNER:', winner)
            this.setNewScores(winner, looser)
            this.setNewCats()
        },
        setNewScores: function(winner, looser){
        
        /*if (this.vote === 'left'){
            console.log(this.vote)
            this.winner = this.competitors[0];
            console.log(this.winner)
            this.looser = this.competitors[1];
        } if(this.vote === 'right') {
            this.winner = this.competitors[1];
            this.looser = this.competitors[0];
        } 
        let indexW = this.winner.id 
        console.log(indexW)
        let indexL = this.looser.id
        //this.$store.commit('updateVote', indexW)
*/

        let scoreW = winner.score
        console.log('WINNER S SCORE', scoreW)
        let scoreL = looser.score

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
        //console.log('BEFORE COMMIT', indexW, scoreW)
        console.log('BEFORE COMMIT', winner.name, scoreW)
        console.log('BEFORE COMMIT II', looser.name, scoreL)
        let newScores = {}
        newScores.indexW = winner.id
        newScores.scoreW = scoreW
        newScores.indexL = looser.id
        newScores.scoreL = scoreL
        console.log('NEWSCORES', newScores)
        return this.$store.commit('updateScores', newScores)
        //this.$emit('newGame')

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


