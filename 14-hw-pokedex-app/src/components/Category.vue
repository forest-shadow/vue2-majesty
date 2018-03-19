<template>
  <div class="category">
    <h2>{{ this.name }} Pokemons</h2>
    <ul>
      <li class="list-group-item"
          v-for="pokemon in category.pokemons"
          :key="pokemon.name"
      >
        <strong class="d-flex w-100 justify-content-center">{{ pokemon.name }}</strong>
        <span class="d-flex w-100  justify-content-center">Level: {{ pokemon.level }}</span>
      </li>
    </ul>

    <div class="category__action-btns mb-5">
      <router-link
         class="btn btn-info"
         :to="{ name: 'category' }"
         tag="button"
         exact
      >
        Back to Categories
      </router-link>
      <button class="btn btn-success" @click="switchNewPokemonSection">Add pokemon</button>
    </div>

    <div
         class="category__add-pokemon"
         v-show="displayNewPokemonSection"
    >
      <h2>Add a new Pokemon!</h2>
      <input class="form-control mb-4" v-model="newPokemon.name">

      <div class="category__action-btns mb-5">
        <button class="btn btn-secondary" @click="switchNewPokemonSection">Cancel</button>
        <button class="btn btn-success" @click="addNewPokemon">Save</button>
      </div>
    </div>

    <pre>{{ $data }}</pre>
  </div>
</template>

<script>
import {pokedex} from '../store.js'
export default {
  props: ['name'],
  data() {
    return {
      category: {},
      displayNewPokemonSection: false,
      newPokemon: {
        name: '',
        level: '1'
      }
    }
  },
  methods: {
    switchNewPokemonSection: function () {
      this.displayNewPokemonSection = !this.displayNewPokemonSection
    },
    addNewPokemon: function () {
      this.category.pokemons.push(this.newPokemon);
    }
  },
  created() {
     console.log(`category ${this.name}`)
  },
  mounted () {
    this.category = pokedex.categories.find(category => category.name === this.name)
  }
}
</script>