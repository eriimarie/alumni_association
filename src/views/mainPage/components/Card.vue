<template>
  <div id="box">
    <b-card no-body class="overflow-hidden" style="max-width: 1200px;">
      <b-row no-gutters>
        <b-col md="5">
          <b-card-img :src="require('@/assets/unnamed.jpg')" alt="Card Image" class="rounded-0" style="max-width: 520px"></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body id="title" class="align-middle">
            <b-card-title><h1>About the Maggotty High School</h1></b-card-title>
            <hr>
            <b-card-text id="context">
              <p style="font-size: 15px">
                Founded on a strong belief in accessible education, Maggotty High School is proud to bring academia to all
                corners of the country through our newly online program. Each year our student community grows and strengthens, and our alumni ....
              </p>
              <a href="/history" style="color: #880001">READ MORE</a>
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  }
}
</script>

<style scoped>
  #box{
    max-width: 1200px;
    margin: 0 auto;
  }
  #title{
    color: #800001;
  }
  #context{
    color: black;
    margin: 0 auto;
    font-size: 20px;
  }
</style>
