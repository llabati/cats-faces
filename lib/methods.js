import { Meteor } from 'meteor/meteor'
import { Cats } from './collections'

Meteor.methods({
    updateVotes(currentCat, newVote){
        console.log('The cat is', currentCat, newVote)
        Cats.update({ id: currentCat }, { $set: { votes: newVote }})
    },

    updateScore(newScore, id){
        Cats.update({ id: id }, { $set: { score : newScore }})
    },

    insertComment(coms, id){
        Cats.update({ id: id }, { $set: { comments : coms}})
    },

    findOneCat(chosenId) {
        Cats.find({ id: chosenId })
    }
    
})  

