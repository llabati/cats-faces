<template>
    <div class="card">
        <img class="img-fluid card-img-top" src="static/img/PELOTE.jpg">
        <caption class="text-center">PELOTE</caption>
        
    </div>  

</template>

<script>
import { store } from '../store'
import CatVote from './CatVote'

export default {
    name: 'CatDisplay',
    store,
    props: {
        cat: Object
    },

}
</script>
