<template>
  <div id="box">
    <div>
      <h3>MHAA Overview</h3>
      <p>MHAA puts great pride in the parts that make up its whole</p>
    </div>
    <b-container fluid>
      <b-card-group deck>
        <b-card no-body class="overflow-hidden" style="max-width: 540px;">
          <b-row no-gutters>
            <b-col md="6">
              <b-card-img :src="require('@/assets/volunteer.jpg')" alt="Image" class="rounded-0" @click="clickVolunteer"></b-card-img>
            </b-col>
            <b-col md="6">
              <b-card-body title="New volunteer opportunity" style="color: #880001">
                <b-card-text style="color: black; font-size: 13px">
                  MUHAA network is vital to the advancement of our Alma Mater. We need your volunteer leadership to encourage involvement by other alumni and to serve as role models for our future alumni.
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
        <b-card no-body class="overflow-hidden" style="max-width: 540px;">
          <b-row no-gutters>
            <b-col md="6">
              <b-card-img :src="require('@/assets/shop.jpg')" alt="Image" class="rounded-0" @click="clickShopping"></b-card-img>
            </b-col>
            <b-col md="6">
              <b-card-body title="Time for new Maggotty gear" style="color: #880001">
                <b-card-text style="color: black; font-size: 13px">
                  The Maggotty Alumni Fan Shop has everything you need. Choose from breathable athletic gear to comfortable tees to sleek Cardinal watches, coolers and more.
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </b-card-group>
    </b-container>
  </div>
</template>

<script>
export default {
  methods:{
    clickVolunteer(){
      this.$router.push('/volunteer')
    },
    clickShopping() {
      this.$router.push('/shopping')
    }
  }
}
</script>

<style scoped>
  #box{
    max-width: 1200px;
    margin: 0 auto;
  }
  h3{
    color: #880001;
  }
</style>
