<template>
    <div class="container">
        <div class="card">
            <div class="card-title">
                <h3 class="display-3">Le classement des chats</h3>
            </div>
            <div class="card-body">
                <ol class="list-group">
                    <li class="list-group-item container" v-for="cat in cats" :key="cat.id">
                        <div class="row">
                            <div class="col-4"><strong>{{ cat.name }}</strong></div>
                            <div class="col-4"><img class="thumbnail" style="max-width: 25%" :src="cat.pic"> </div>
                            <div class="col-4">({{ cat.score }} points)</div>
                        </div>
                    </li>
                </ol>
            </div>
            <div class="card-footer">
                <button class="btn btn-info float-right" @click="$router.push('/')">Continuer à voter</button>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store.js'
import { Cats } from '../../lib/collections'
export default {
    data(){
        return {
            //cats: []
        }
    },
    meteor: {
        $subscribe: {
            'cats': []
        },
        cats(){
            return Cats.find({}, {
                sort: { score: -1 }
            })
        }

    },
    /*computed:{
        sortedCats(){
            let allCats = this.$store.state.cats
            return allCats.sort((a,b) => b.score - a.score)
        }
    }*/
}
</script>

