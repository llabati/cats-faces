import { Mongo } from 'meteor/mongo'

export const Cats = new Mongo.Collection('cats')
export const Humans = new Mongo.Collection('humans')
export const Comments = new Mongo.Collection('comments')
