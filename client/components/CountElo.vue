<template>
    <div>

    </div>
</template>

<script>
export default {
    name: 'CountElo',
    props: {
        competitors: Array,
        vote: String,
        newVote: Boolean
    },
    data(){
        return {
            winner: '',
            looser: '',
            diff: 0,
            scoreW: 0,
            scoreL: 0
        }
    },
    /*watch: {
        newVote(){
            return this.countELO()
        }
    },*/
    methods: {
        countELO: function(competitors, vote){
        
        if (this.vote === 'left'){
            console.log(this.vote)
            this.winner = this.competitors[0];
            console.log(this.winner)
            this.looser = this.competitors[1];
        } if(this.vote === 'right') {
            this.winner = this.competitors[1];
            this.looser = this.competitors[0];
        }
        let indexW = this.winner.id -1
        console.log(indexW)
        let indexL = this.looser.id -1
        this.$store.commit('updateVote', indexW)


        this.scoreW = this.winner.score
        console.log(this.scoreW)
        this.scoreL = this.looser.score

        if (this.winner.votes < 20 || this.looser.votes < 20){
            console.log(this.scoreW)
            this.scoreW += 100;
            this.scoreL -= 50;
            console.log(this.scoreW)
        }
        else {
        this.diff = this.scoreW - this.scoreL;
        console.log(this.diff)


        if (this.diff === 0) {
            this.scoreW += 100;
            this.scoreL -= 50;
        }
        if ( this.diff > 0) {
            if (this.diff < this.scoreW / 2) {
                this.scoreW += this.diff;
                this.scoreL -= this.diff;
            }
            if (this.diff > this.scoreW / 2) {
                this.scoreW += Math.floor(this.diff / 2);
                this.scoreL -= Math.floor(this.diff / 2);
            }
        }
        if (this.diff < 0) {
            if (this.diff < Math.abs(this.scoreW) / 2) {
                this.scoreW += Math.floor(this.diff / 2);
                this.scoreL -= Math.floor(this.diff / 2);
            }
            if (this.diff > Math.abs(this.scoreW) / 2) {
                this.scoreW += 2 * this.diff;
                this.scoreL -= 2 * this.diff;
            }           
        }
        }
        //console.log('BEFORE COMMIT', indexW, scoreW)
        console.log('BEFORE COMMIT', indexW, this.scoreW)
        let newScores = {}
        newScores.indexW = indexW
        newScores.scoreW = this.scoreW
        newScores.indexL = indexL
        newScores.scoreL = this.scoreL
        console.log('NEWSCORES', newScores)
        this.$store.commit('updateScores', newScores)
        this.$emit('newGame')

    },

    }
}
</script>

