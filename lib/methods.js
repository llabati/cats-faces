import { Meteor } from 'meteor/meteor'
import { Cats } from './collections'
import { Humans } from './collections'
import { Comments } from './collections'

Meteor.methods({
    manageNewAccount(newHuman){
        if (Humans.find({ name: newHuman }).count() === 0) Humans.insert({ name: newHuman })
    },
    verifyAccount(newHuman){
        console.log('nouveau visiteur devant la bdd', newHuman)
        console.log('le camp des hommes', Humans.find())
        console.log(Humans.find({ "name" : newHuman }).count())
        if (Humans.find({ name: newHuman }).count() === 1) return true
        else return false
    },
    countInCollection(collection){
        collection.find().count()
    },
    updateVotes(winner, winVotes){
        console.log('The cat is', winner, winner.votes, winVotes)
        Cats.update({ name : winner.name }, { $set: { votes : winVotes }})
    },
    updateScore(score, name){
        console.log('Score updated!')
        Cats.update({ name: name }, { $set: { score: score }})
    },
    addBonus(name){
        let favoriteCat = Cats.find({ name: name })
        let newScore = favoriteCat.score + 200
        Cats.update( { name : favoriteCat.name}, { $set: { score: newScore }})
    },

    insertComment(comment, human, date, cat){
        Comments.insert({ content: comment, author: human, date: date, cat: cat })
    },

    findOneCat(chosenName) {
        Cats.find({ name: chosenName })
    }
    
})  

