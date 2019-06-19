<template>
<div id="navi" class="container mb-50">
    <nav class="navbar navbar-light bg-light">
        <!--<router-link :to="{ name: 'voting' }" exact class="btn btn-primary">Votez</router-link> -->
        <router-link :to="{ name: 'ranking' }" class="btn btn-primary mx-auto">Découvrez le classement</router-link>
        <!--<router-link :to="{ name: 'cat' }" class="btn btn-primary">Découvrez nos chats</router-link>  -->
    </nav>

</div>
</template>

<style>
    nav {
        width: 50%;
        margin: 20px auto;
        padding: 25px;
    }
</style>




