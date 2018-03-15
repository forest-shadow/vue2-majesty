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
  props: ['stories']
}
</script>
