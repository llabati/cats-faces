<template>
    <div id="fav">
        <section v-if="favorites.length === 0" class="col-6 offset-3">
                    <p class="lead text-center">{{ welcome }}, vous n'avez pas encore de favoris. Il faut 10 votes en faveur d'un chat pour qu'il en devienne un.</p>
                    <p id="limit" class="text-center">Vous avez le droit de favoriser 3 chats parmi vos favoris. Donnez-leur 200 points !</p>
        </section>
        <section v-else>
            <h2 class="display-4">D'après vos votes, voici vos favoris</h2>
            <div class="card">
                    <div class="card-title">
                        <h3 class="display-5">Faites-les monter dans le classement :</h3>
                        <h4 class="display-6">donnez un coup de pouce à 3 d'entre eux !</h4>
                    </div>
                    <div class="card-body">
                        <ol class="list-group">
                            <li v-for="favorite in favorites" :key="favorite.id" class="list-group-item" style="line-height: 2;" v-on:click="backMyFavorite(favorite)">
                                
                                <p v-if="clicked <= 3" style="cursor: pointer">{{ bonus }}{{ favorite.name }}<img class="float-right" :src="favorite.pic"/></p>
                                <p v-else class="text-muted">{{ favorite.name }}<br>{{ overreach }}</p>
                            </li>   
                        </ol> 
                    </div>
                        
                        
            </div>
        </section>       
                
    </div>
</template>
<script>
import { Meteor } from 'meteor/meteor'
import { Cats } from '../../lib/collections'
export default {
    name: 'CatFavorites',
    props: {
        cats: Array,
        welcome: String
    },
    data(){
        return {
            bonus: 'En cliquant ici, je donne 200 points à ',
            overreach: 'Vous avez déjà donné tous vos points disponibles.',
            clicked: 0
        }
    },
    computed: {
        myCats(){
            return this.$store.state.cats
        },
        favorites: {
            get: function(){
                
                return this.favorites = this.myCats.filter( a => a.likes >= 5 ).sort((a,b) => b.likes - a.likes)
            },
            set: function(){
                //let cats = this.$store.state.cats
                //this.favorites = cats.filter( a => a.votes > 10 )
            }
        } 
    }, 
    methods: {
    backMyFavorite(favorite){
        console.log('favorite', favorite)
      let fav = favorite.name
      
      Meteor.call('updateScore', fav)
      this.clicked++; 
        }
    } 
}
</script>


