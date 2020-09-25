<template>
  <div>
    <navBar></navBar>
    <router-view></router-view>
    <bottomDiv></bottomDiv>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import navBar from './components/NavBar';
import bottom from './components/Bottom';


export default {
  components: {
    navBar: navBar,
    bottomDiv: bottom,
  }
}
</script>

<style>

</style>
