<template>
  <div style="margin: 20px">
    <h3>Congratulation</h3>
    <div id="box">
      <p>Your order is confirmed, you can check it in your profile. Thanks for shopping with us.</p>
    </div>
  </div>

</template>

<script>
export default {
  name: "Confirm"
}
</script>

<style scoped>
#box{
  width: 1200px;
  padding: 20px;
  border: 1px solid;
  border-radius: 10px;
  box-shadow: 0 0 10px black;
  margin: 20px auto;
  background-image: url("../../assets/cong.png");
  background-size: cover;
  height: 360px;

}
h3, p{
  color: #800001;
  text-align: center;
}

</style>
