<template>
    <div id="fav">
        <section v-if="favorites.length === 0" class="col-6 offset-3">
                    <p class="lead text-center">Vous n'avez pas encore de favoris. Il faut 10 votes en faveur d'un chat pour qu'il en devienne un.</p>
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
                            <li v-for="favorite in favorites" :key="favorite.id" class="list-group-item" style="line-height: 2;">
                                <img class="img-thumbnail float-left" style="max-width: 20%; margin-right: 5%;" :src="favorite.pic">
                                <p v-if="clicked <= 3" style="cursor: pointer" v-on:click="backMyFavorite">{{ bonus }}{{ favorite.name }}</p>
                                <p v-else class="text-muted">{{ favorite.name }}<br>{{ overreach }}</p>
                            </li>   
                        </ol> 
                    </div>
                        
                        
            </div>
        </section>       
                
    </div>
</template>
<script>
export default {
    name: 'CatFavorites',
    props: {
        cats: Array
    },
    data(){
        return {
            bonus: 'En cliquant ici, je donne 200 points à ',
            overreach: 'Vous avez déjà donné tous vos points disponibles.',
            clicked: 0
        }
    },
    computed: {
        favorites: {
            get: function(){
                let cats = this.$store.state.cats
                return this.favorites = cats.filter( a => a.votes >= 10 ).sort((a,b) => b.votes - a.votes)
            },
            set: function(){
                //let cats = this.$store.state.cats
                //this.favorites = cats.filter( a => a.votes > 10 )
            }
        } 
    }, 
    methods: {
    backMyFavorite(event){
      let fav = event.target.innerHTML.substr(39)
      console.log(fav)
      let chosen = this.favorites.find(f => f.name === fav)
      console.log(this.favorites)
      console.log(chosen)
      chosen.score += 200
      console.log(chosen)
      this.clicked++;
        }
    } 
}
</script>

