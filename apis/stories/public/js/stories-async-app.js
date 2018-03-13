Vue.component('story', {
  props: ['story'],
  template: '#template-story-row',
  methods: {
    upvoteStory: function(story) {
      story.upvotes++;
      axios.patch('/api/stories/' + story.id, story);
    },
    editStory: function(story) {
      story.editing = true;
    },
    deleteStory: function (story) {
      let index = this.$parent.stories.indexOf(story);

      this.$parent.stories.splice(index, 1);
      axios.delete('/api/stories/' + story.id);
    },
    storeStory: function(story) {
      axios.post('/api/stories', story).then(function(response) {
        Vue.set(story, 'id', response.data.id);
        story.editing = false;
      })
    },
    updateStory: function(story) {
      axios.patch('/api/stories/' + story.id, story);
      // Set editing to false to show actions again and hide the inputs
      story.editing = false;
    }
  }
});

let vm = new Vue({
  data: {
    stories: []
  },
  el: '#app',
  methods: {
    createStory: function() {
      let newStory = {
        'plot': '',
        'upvotes': 0,
        'editing': true
      };
      this.stories.push(newStory);
    },
    fetchStories: function() {
      let vm = this;

      axios.get('/api/stories')
        .then(function (response) {
          // set data on vm
          let storiesReady = response.data.map(function( story) {
            story.editing = false;
            return story;
          });

          // vm.stories = storiesReady;
          Vue.set(vm, 'stories', storiesReady)
          // or: vm.stories = storiesReady
        })
    }
  },
  mounted: function() {
    this.fetchStories()
  }
});