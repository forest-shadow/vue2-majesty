Vue.component('movie', {
  props: ['movie'],
  template: '#template-movie-row',
  methods: {
    cancelEditing: function(movie) {
      movie.editing = false;
    },
    deleteMovie: function (movie) {
      let index = this.$parent.movies.indexOf(movie);

      this.$parent.movies.splice(index, 1);
      axios.delete('/api/movies/' + movie.id);
    },
    editMovie: function(movie) {
      movie.editing = true;
    },
    storeMovie: function(movie) {
      axios.post('/api/movies', movie)
        .then(function(response) {
          movie.id = response.data.id;
          movie.editing = false;
        })
    },
    updateMovie: function(movie) {
      axios.patch('/api/movies/' + movie.id, movie);
      movie.editing = false;
    }
  }
});

let vm = new Vue({
  el: '#app',
  data: {
    movies: []
  },
  methods: {
    addMovie: function() {
      this.movies.push({
        director: '',
        editing: true,
        title: '',
      })
    }
  },
  mounted: function () {
    axios.get('api/movies')
      .then(function (response) {
        let readyMovies = response.data.map(function(movie) {
          movie.editing = false;
          return movie;
        });
        vm.movies = readyMovies;
      })
  }
});