<template>
  <div id="box">
    <div>
      <h3>MHAA Overview</h3>
      <p>UED puts great pride in the parts that make up its whole</p>
    </div>
    <b-container fluid>
      <b-row>
        <b-col sm="4" class="img">
          <a href="/register"><b-img fluid :src="require('@/assets/volunteer.jpg')"></b-img></a>
        </b-col>
        <b-col sm="4" class="img">
          <a href="/#"><b-img fluid :src="require('@/assets/career.jpg')"></b-img></a>
        </b-col>
        <b-col sm="4" class="img">
          <a href="/#"><b-img fluid :src="require('@/assets/shop.jpg')"></b-img></a>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
name: "Overview"
}
</script>

<style scoped>
  #box{
    max-width: 1200px;
    margin: 0 auto;
  }
  h3{
    color: #453EAE;
  }
</style>