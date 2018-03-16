<template>
    <div id="register">
        <h2>Register Form</h2>
        <input placeholder="First Name" class="form-control mb-4">
        <input placeholder="Last Name" class="form-control mb-4">
        <input placeholder="Email address" class="form-control mb-4">
        <input placeholder="Pick a password" class="form-control mb-4">
        <input placeholder="Confirm password" class="form-control mb-4">
        <button class="btn btn-primary mb-4">Sign up</button>

        <famous :stories="stories"></famous>
    </div>
</template>

<script>
import Famous from './Famous.vue'
export default {
  props: ['stories'],
  components: {
    Famous
  },
  created () {
    console.log('register')
  }
}
</script>
