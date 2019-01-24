<template>
  <div>
    <h1>Hello World!</h1>
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data () {
      return {
        msg: 'aaaa'
      }
    },
    mounted () {
      this.msg = 'nasasassa'
    }
  }
</script>

<style>
  html, body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-size: 16px;
  }
</style>
