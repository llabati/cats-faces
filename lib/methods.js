import { Meteor } from 'meteor/meteor'
import { Cats } from './collections'

Meteor.methods({
    updateVotes(winner, winVotes){
        console.log('The cat is', winner, winner.votes, winVotes)
        Cats.update({ name : winner.name }, { $set: { votes : winVotes }})
    },

    updateScore(newScore, name){
        Cats.update({ name: name }, { $set: { score : newScore }})
    },

    insertComment(coms, name){
        Cats.update({ name: name }, { $set: { comments : coms}})
    },

    findOneCat(chosenName) {
        Cats.find({ name: chosenName })
    }
    
})  

