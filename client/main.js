import { Meteor } from 'meteor/meteor'
import Vue from 'vue'
import App from './components/App.vue'
import VueMeteorTracker from 'vue-meteor-tracker'
import router from './router'
import store from './store'

Vue.use(VueMeteorTracker)
Meteor.startup(() => {
    new Vue({
        el: '#app',
        router,
        store,
        ...App
    })
})