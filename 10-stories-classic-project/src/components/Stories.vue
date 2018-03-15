<template>
    <div id="stories">
        <h2>Stories</h2>
        <ul class="list-group">
            <li v-for="story in stories" :key="story.id" class="list-group-item">
                {{ story.writer }} said "{{ story.plot }}"
                Story upvotes {{ story.upvotes }}.
            </li>
        </ul>
    </div>
</template>
<script>
export default {
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
