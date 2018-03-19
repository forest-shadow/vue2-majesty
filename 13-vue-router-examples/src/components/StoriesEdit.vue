<template>
  <div class="row">
    <h3 class="mr-4">Editing</h3>
    <form>
      <div class="form-group">
        <input class="form-control" v-model="story.plot">
      </div>
      <div class="form-group">
        <button @click="saveChanges(story)" class="btn btn-success">
          Save changes
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import {store} from '../store.js'

export default {
  props: ['id'],
  data () {
    return {
      story: {}
    }
  },
  methods: {
    goBack () {
      this.$router.back()
    },
    isTheOne (story) {
      return story.id === this.id
    },
    saveChanges (story) {
      console.log('Saved!')
      this.$router.push('/stories')
    }
  },
  mounted () {
    this.story = store.stories.find(this.isTheOne)
  }
}
</script>