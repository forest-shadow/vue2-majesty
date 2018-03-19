<template>
  <div class="container">
    <div id="app">
      <img class="app__logo" src="./assets/logo.jpg">
      <h1 class="app__header mb-4">Welcome to Palet town</h1>
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.app__logo {
  width: 200px;
  height: 200px;
}
.app__header {
  color: #4cae4c;
}
</style>
