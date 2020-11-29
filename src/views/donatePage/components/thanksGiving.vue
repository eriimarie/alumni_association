<template>
  <div id="box">
    <b-card id="card">
      <b-img :src="require('../../../assets/thanksgiving.png')"></b-img>
      <b-card-text></b-card-text>
      <b-card-text>Thank you for your Donation! Every penny counts!
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
  width: 1200px;
}
#card{
  background-color: #FFEAA7;
  border: #FFEAA7;
  text-align: center;
}


</style>
