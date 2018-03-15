<template>
  <div id="app">
    <img class="logo mb-2" src="./assets/logo.png">
    <!--<hello class="mb-4"></hello>-->
    <!--<login></login>-->
    <register :stories="stories" class="mb-4"></register>
    <stories :stories="stories" class="mb-4"></stories>
    <p>Welcome to your Vue.js app!</p>
  </div>
</template>

<script>
// import Login from './components/Login.vue'
// import Hello from './components/HelloWorld.vue'
import Register from './components/Register.vue'
import Stories from './components/Stories.vue'

export default {
  name: 'App',
  components: {
    // Hello,
    // Login,
    Register,
    Stories
  },
  data () {
    return {
      stories: [
        {
          id: 1,
          plot: 'My horse is amazing.',
          writer: 'Mr. Weebl',
          upvotes: 28,
          voted: false
        },
        {
          id: 2,
          plot: 'Narwhals invented Shish Kebab.',
          writer: 'Mr. Weebl',
          upvotes: 8,
          voted: false
        },
        {
          id: 3,
          plot: 'The dark side of the Force is stronger.',
          writer: 'Darth Vader',
          upvotes: 52,
          voted: false
        },
        {
          id: 4,
          plot: 'One does not simply walk into Mordor',
          writer: 'Boromir',
          upvotes: 74,
          voted: false
        }
      ]
    }
  }
}
</script>

<style>
  html {
    height: 100%;
  }
  body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  #app {
    color: #2c3e50;
    margin-top: -100px;
    max-width: 600px;
    font-family: Source Sans Pro, Helvetica, sans-serif;
    text-align: center;
  }
  #app a {
    color: #42b983;
    text-decoration: none;
  }
  .logo {
    width: 100px;
    height: 100px
  }
</style>
