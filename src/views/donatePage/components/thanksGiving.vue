<template>
  <div id="box">
    <b-card>
      <b-img :src="require('../../../assets/thanksgiving.png')"></b-img>
      <b-card-text>The system will display, “Thank you for your Donation! Every penny counts!
        Thank you for helping out your Alumni Association. We are glad to have you!</b-card-text>

    </b-card>

  </div>
</template>

<script>
export default {
}



</script>


<style scoped>

#box{
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px #eee;
  margin: 10px auto;
  display: table;
}


</style>
