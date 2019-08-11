<template>
    <div>
        <div class="container mx-auto">
            <button id="btn-vote" class="btn btn-outline my-2 float-right lead text-muted" @click="$emit('vote', this.cat)">Votez pour {{ cat.name }}</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CatVote',
    props: {
        cat: Object
    }
}
</script>

<style>
    #btn-vote {
        border-color: red;
    }
</style>






