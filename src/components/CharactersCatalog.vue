<template>
    <div class="row">
            <div class="col" v-for="character in characters" v-bind:key="character">
                <div class="card" style="width: 15rem;" >
                      <img class="card-img-top" :src="character.thumbnail.path+'.'+character.thumbnail.extension" alt="Card image cap" style="width: 100%; height: 200px;">
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
</style>
