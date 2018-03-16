<template>
    <div id="login">
        <h2>Sign in</h2>
        <input type="email" class="form-control mb-4" placeholder="Email address">
        <input type="password" class="form-control mb-4" placeholder="Password">
        <button class="btn">Sign in</button>
    </div>
</template>

<script>
export default {
  created () {
    console.log('login')
  }
}
</script>
