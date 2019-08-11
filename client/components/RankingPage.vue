<template>
    <div class="container">
        <div class="card">
            <div class="card-title">
                <h3 class="display-3 my-5 text-center text-info">Le classement des chats</h3>
            </div>
            <div class="card-body">
                <ol class="list-group">
                    <li class="list-group-item container" v-for="cat in cats" :key="cat.id">
                        <div class="row">
                            <div class="col-4 text-right"><strong @click="$router.push(`/cat/${this.cat.name}`)">{{ cat.name }}</strong></div>
                            <div class="col-4 text-center"><img class="thumbnail mx-auto" style="max-width: 25%" :src="cat.pic"> </div>
                            <div class="col-4 text-left"><p>({{ cat.score }} points)</p></div>
                        </div>
                    </li>
                </ol>
            </div>
            <div class="card-footer">
                <button class="btn btn-info float-right" @click="$router.push('/vote')">Continuer à voter</button>
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

}
</script>

