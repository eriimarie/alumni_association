<template>
  <div>
    <b-button v-b-toggle.my-collapse-1>Question 1</b-button>
    <b-collapse id="my-collapse-1">
      <p>Answer 1</p>
    </b-collapse>
    <br>
    <b-button v-b-toggle.my-collapse-2>Question 2</b-button>
    <b-collapse id="my-collapse-2">
      <p>Answer 2</p>
    </b-collapse>
    <br>
    <b-button v-b-toggle.my-collapse-3>Question 3</b-button>
    <b-collapse id="my-collapse-3">
      <p>Answer 3</p>
    </b-collapse>
    <br>
  </div>
</template>

<script>
export default {
name: "Q&APage"
}
</script>

<style scoped>

</style>
