<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>This is an about page</h1>
    <h1>This is an about page</h1>
    <h1>This is an about page</h1>
    <h1>This is an about page</h1>
    <h1>This is an about page</h1>
    <h1>This is an about page</h1>
    <h1>This is an about page</h1>
    <h1>This is an about page</h1>
    <h1>This is an about page</h1>
    <h1>This is an about page312312</h1>
    <h1>{{ msg }}</h1>
    <h1>{{ msg }}</h1>
    <h1 class="h1">
      {{ msg }}
      <span>123</span>
    </h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'hello000000000ooooo'
    }
  }
}
</script>

<style lang="less" scoped>
.h1 {
  color: #777;
  font-size: 20px;
  display: flex;
  span {
    flex: 1;
  }
}
</style>
