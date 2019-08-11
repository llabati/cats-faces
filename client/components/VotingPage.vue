<template>
    <div class="container col-10 mb-20 bg-white" id="voting">
        <section class="col-2 offset-5">
            <button id="launch" class="btn btn-outline text-info" @click="setNewCats" v-if="!clicked">Lancer le match !</button>
        </section>
        <section id="two-cats" class="row d-flex justify-content-between" v-if="clicked">
            <beauty-cat :cat="leftCat" :left="true" v-on:score="modifyScore('left')"></beauty-cat>
            <beauty-cat :cat="rightCat" :left="false" v-on:score="modifyScore('right')"></beauty-cat>
        </section>
        <section id="favorites">
            <cat-favorites :welcome="currentVisitor"></cat-favorites>
        </section>
    </div>
</template>

<script>
import BeautyCat from './BeautyCat.vue'
import CatFavorites from './CatFavorites'
import { store } from '../store.js'
import { Cats } from '../../lib/collections'
import { Humans } from '../../lib/collections'
export default {
    data(){
        return {
            random: [],
            left: Boolean,
            leftCat: {},
            rightCat: {},
            clicked: false
        }
    },
    computed: {
        currentVisitor(){
            return this.$store.state.currentHuman
        },
    },
    store,
    meteor: {
        $subscribe: {
            'cats': [],
            'humans': [],
        },
        cats() {
            return Cats.find({})
        }, 
        humans(){
            return Humans.find({})
        },
        
    },
    methods: {
        setNewCats: function(){
            let len = this.cats.length
            let leftIndex = Math.floor(Math.random() * len)
            this.leftCat = this.cats[leftIndex]
            console.log('LEFTCAT', this.leftCat)
            let rightIndex = Math.floor(Math.random() * len)
            this.rightCat = this.cats[rightIndex]
            if (rightIndex === leftIndex) return setNewCats()
            else {
                this.clicked = true
                return { leftCat, rightCat }
            }

        },
        modifyScore: function(side){
            console.log(side)
            let winner = side === 'left' ? this.leftCat : this.rightCat
            let looser = winner === this.leftCat ? this.rightCat : this.leftCat
            console.log('WINNER:', winner)
            console.log('LOOSER:', looser)
            this.setNewScores(winner, looser)
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
    #launch {
        border: solid 3px #17a2b8;
        margin: 10px auto;
    }
</style>


