<template>
  <div id="box">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
name: "Forum"
}
</script>

<style scoped>
  #box {
    max-width: 1200px;
    margin: 0 auto;
  }
</style>
