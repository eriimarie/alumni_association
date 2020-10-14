<template>
  <div id="box">
    <b-card no-body class="overflow-hidden" style="max-width: 1200px;">
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img :src="require('@/assets/main_card.png')" alt="Card Image" class="rounded-0"></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body id="title" class="align-middle">
            <b-card-title><h1>About the <br>Maggotty Alumni <br>Association</h1></b-card-title>
            <hr>
            <b-card-text id="context">
              <p>
                Establish in 2020, University of EI Dorado has long been a home to critical thinking, progressive
                education, and a conscientious community. The school is committed to pushing positive change and creating
                a caring world for everyone.
              </p>
              <a href="/">READ MORE</a>
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
    color: #453EAE;
  }
  #context{
    color: black;
    margin: 0 auto;
    font-size: 20px;
  }
</style>