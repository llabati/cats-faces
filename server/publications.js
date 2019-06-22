import { Meteor } from 'meteor/meteor'
import { Cats } from '../lib/collections'

Meteor.publish('cats', function(){
    return Cats.find({})
})
/*
Meteor.publish('this-cat', function(catId){
    //let thisCat = Cats.find({ "id": catId })
    //return thisCat
    console.log('Selector', catId)
    console.log(Cats.find({ id: catId }))
    return Cats.find({ id: catId })
})
*/
