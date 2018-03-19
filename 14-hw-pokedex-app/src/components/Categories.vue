<template>
  <div class="categories">
    <h1>Pocedex categories <span class="badge badge-primary">{{ categories.length }}</span></h1>
    <ul>
      <li class="list-group-item"
          v-for="category in categories"
          :key="category.name"
      >
        <router-link
             :to="{ name: 'category', params: { name: category.name } }"
             tag="a"
             exact
        >
          {{ category.name }}
        </router-link>
      </li>
    </ul>
    <pre>{{ $data }}</pre>
  </div>
</template>

<script>
import {pokedex} from '../store.js'

export default {
  data () {
    return {
      categories: pokedex.categories
    }
  },
  created () {
    console.log('categories')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
