<template>
  <div id="app">
      <CharactersCatalog />
  </div>
</template>

<script>
import CharactersCatalog from './components/CharactersCatalog.vue';

export default {
  name: 'App',
  components: {
    CharactersCatalog
  }
}
</script>

<style>
body{
    background-color: #201733;
    overflow-x: hidden;
}

#app{
    margin: 60px;
    font-family: 'Poppins';
}
</style>
