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
body {
 background: #f7f8fa;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
a {
  color: #333;
  text-decoration: none;
}
.el-upload--picture-card {
  width: 120px;
  height: 120px;
  line-height: 120px;
}
.el-collapse-item__content {
  padding-bottom: 0;
}
.el-step.is-simple .el-step__icon-inner[class*=el-icon]:not(.is-status) {
  font-size: 24px;
}

</style>
