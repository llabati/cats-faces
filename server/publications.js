import { Meteor } from 'meteor/meteor'
import { Cats } from '../lib/collections'

Meteor.publish('cats', function(){
    return Cats.find({})
})