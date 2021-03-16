<template>
    <div class="">
        <div class="row mb-5">
            <div class="col">
                <div class="form" id="form-search">
                    <form class="form-inline" @submit.prevent="listCharactersByName">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="type character name and press enter" @keyUp.prevent="listCharactersByName" v-model="characterName" />
                        </div>
                    </form>
                </div>
            </div>
            <div class="col">
                <h1 id="title-marvel">Marvel characters</h1>
            </div>
        </div>

        <div id="load-img" v-if="loading">
            <img src="https://static.wixstatic.com/media/306bb1_9619755b450e4bbdac8c7ee6bc1df39f~mv2.gif" style="width: 200px; opacity: 0.3;"/>
        </div>

        <li v-for="(erro, index) of errors" :key="index">
            campo <b> {{ erro.field }} </b> - {{ erro.defaultMessage }}
        </li>

        <div class="row" id="cards-characters">
            <div class="card" style="width: 15rem;" v-for="character in filterCharactersWithoutImage" v-bind:key="character">
                <img class="card-img-top" :src="character.thumbnail.path+'.'+character.thumbnail.extension" :alt="character.description">
                <div class="card-body">
                <h5 class="card-title">{{ character.name }}</h5>
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
        this.listCharactersByName(),
        this.filterCharactersWithoutImage()
    },
    data() {
        return{
            characterName: '',
            characters: [],
            loading: true,
            errors: [],
        }
    },
    computed: {
        filterCharactersWithoutImage: function(){
            return this.characters.filter(character => character.thumbnail.path != 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available' && character.thumbnail.path != 'http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708.gif')
        }
    },
    methods: {
        listCharactersByName(){
            if(this.characterName.length != ""){
                Characters.listCharacters(this.characterName).then(response => {
                    this.characters = response.data.data.results;
                    this.errors = []
                }).catch(exception => {
                    this.errors = exception.response.data.errors;
                    this.loading = true;
                }).finally(() => this.loading = false);
            } else{
                Characters.listCharacters().then(response => {
                    this.characters = response.data.data.results;
                    this.errors = []
                }).catch(exception => {
                    this.errors = exception.response.data.errors;
                    this.loading = true;
                }).finally(() => this.loading = false);
            }

        },
    }
}

</script>

<style scoped>

#title-marvel{
    color: #fff;
    margin-top: 10px;
    font-weight: 100;
    text-align: right;
    float: right;
    align-items: right;
    margin-right: 10%;
}

#load-img{
    vertical-align: center;
    float: center;
    text-align:
    center;
    margin-top: 10%;
}

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

#form-search input[type="text"]{
    width: 70%;
    justify-content: center;
    align-items: center;
    margin: 0% 10%;
    border: none;
    border-radius: 0px;
    box-shadow: 3px 3px 10px rgba(0,0,0, .3);
    background-color: rgba(0,0,0, .3);
    color: #fff;
    font-size: 1.5em;
    padding: 15px 20px;
    font-weight: 300;
}

</style>
