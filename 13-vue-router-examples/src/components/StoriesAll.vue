<template>
    <div id="stories">
        <h2>All Stories ({{stories.length}})</h2>
        <ul class="list-group">
            <li class="list-group-item flex-nowrap align-items-center justify-content-between"
                v-for="story in stories"
                :key="story.id"
            >
                <span>
                    {{ story.writer }} said "{{ story.plot }}"
                    Story upvotes <span class="badge badge-primary">{{ story.upvotes }}</span>
                </span>
                <router-link
                    :to="{ name: 'stories.edit', params: { id: story.id } }"
                    tag="button"
                    class="btn btn-default ml-4" exact
                >
                    Edit
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
import {store} from '../store.js'

export default {
  data () {
    return {
      stories: store.stories
    }
  },
  created () {
    console.log('stories')
  }
}
</script>
