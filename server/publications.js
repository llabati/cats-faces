import { Meteor } from 'meteor/meteor'
import { Cats, Humans, Comments } from '../lib/collections'

Meteor.publish('cats', function(){
    return Cats.find({})
})
/*
Meteor.publish('thiscat', function(name){
    return Cats.find({name: name})
})
*/
Meteor.publish('humans', function(){
    return Humans.find({})
})

Meteor.publish('comments', function(){
    return Comments.find({})
})

Meteor.publish('len', function(){
    return Cats.find({}).count()
})
