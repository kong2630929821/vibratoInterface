<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
.el-message{
  min-width: 0;
  max-width: 300px;
}
.el-message__content{
  white-space: nowrap;
}
</style>
