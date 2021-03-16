<template>

    <div class="">
        <div class="row" id="cards-characters">
            <div class="card" style="width: 15rem;" v-for="character in characters" v-bind:key="character">
                <img class="card-img-top" :src="character.thumbnail.path+'.'+character.thumbnail.extension" alt="Card image cap">
                <div class="card-body">
                <h5 class="card-title">{{ character.name }}</h5>
                    <!-- <p class="card-text">{{ character.description }}</p>-->
                </div>
            </div>
        </div>
    </div>

</template>

<script>

import Characters from '../../services/Characters.js'

export default {
    name: 'CharactersCatalog',
    mounted(){
        this.listCharacters()
    },
    data() {
        return{
            characters: [],
        }
    },
    methods: {
        listCharacters(){
            Characters.listCharacters().then(response => {
                this.characters = response.data.data.results;
            })
        }
    }
}

</script>

<style scoped>

#cards-characters {
    align-items: center;
    justify-content: center;
}

#cards-characters .card{
    text-align: center;
    vertical-align: center;
    margin: 10px;
    padding: 0;
    min-height: 330px;
    border: none;
    border-radius: 15px;
    box-shadow: 2px 2px 10px #111;
    overflow: hidden;
}

#cards-characters .card img{
    text-align: center;
    justify-content: center;
    width: 100%;
    margin: 0;
    padding: 0;
    height: 230px;
    border-radius: none;
}

#cards-characters .card h5{
    color: #8b8796;
}

#cards-characters .card:hover{
    z-index: 10;
    cursor: pointer;
    transform: rotate(5deg) scale(1.2, 1.2);
    transition: .3s;
}

</style>
