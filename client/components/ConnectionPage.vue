<template>
    <div>
        <div class="card bg-info">
            <div class="connect col-6 offset-3">
                <h3 class="display-5 text-info">Identifiez-vous pour participer au classement de nos chats</h3>
                
                <div>
                <input type="text" v-model="firstname" placeholder="Votre Prénom" required>
                <input type="text" v-model="lastname" placeholder="Votre Nom" required>
                </div>
                <div>
                <button class="btn btn-info text-white float-left" @click="validateAccount">Connectez-vous</button> 
                <button class="btn btn-warning float-right" @click="createAccount">Créez votre compte</button>
                </div>
                <div style="clear: both; margin-top: 10px;" v-if="warning">
                <p style="color: red; font-weight: 600;">Avez-vous créé votre compte ? Faites-le maintenant.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store.js'
import { Humans } from '../../lib/collections'
export default {
    data(){
        return {
            account: false,
            warning: false,
            firstname: '',
            lastname: '',
            currentHuman: '',
            author: ''
        }
    },
    computed: {
        newHuman() {
            return this.firstname + ' ' + this.lastname
        }
    },
    store,
    meteor: {
        $subscribe: {
            'humans': []
        },
        humans(){
            return Humans.find({})
        } 
        
    },
    methods: {
        createAccount(){
          Meteor.call('manageNewAccount', this.newHuman)
          this.enterApp()
        },
      validateAccount() {
          let visitor = this.humans.find( h => h.name === this.newHuman)
          if (visitor) {
              console.log( 'Les humains :', this.humans, this.newHuman)
              this.enterApp()
          } else {
              console.log( 'Les humains ne se retrouvent pas :', this.humans, this.newHuman)
              this.warning = true
          } 
        
      },
      enterApp(){
        this.account = true
        this.warning = false
        this.$store.dispatch('nameCurrentHuman', this.newHuman)
        this.$router.push('/vote')
      }
    }
    
}
</script>

<style scoped>
.wrap {
    background-color: info;
}
.connect {
    background-color: beige;
    padding: 10px;
}
input {
    display: block; 
    width: 100%;
    margin: 5px 0;
}
</style>


