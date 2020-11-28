<template>
  <div id="box">
    <b-container>
      <b-row>
        <b-col sm="3">
          <div id="left">
            <b-img center :src="require(`../../assets/schoolLogo.png`)" style="max-width: 70px"></b-img>
            <p id="menu">Events</p>
            <router-link :id="isUpcoming? 'changeColor': ''" to="/events/upcoming" tag="li">Up-Coming Events</router-link>
            <router-link :id="isDance? 'changeColor': ''" to="/events/dance" tag="li">Annual Dinner Dance</router-link>
            <router-link :id="isFundraiser? 'changeColor': ''" to="/events/fundraiser" tag="li">Previous FundRaiser</router-link>
            <router-link :id="isFamily? 'changeColor': ''" to="/events/family" tag="li">Family Fun Day</router-link>
            <br>
          </div>

        </b-col>
        <b-col sm="9">
          <router-view></router-view>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
name: "Events",
  data(){
    return{
      isUpcoming: false,
      isDance: false,
      isFundraiser: false,
      isFamily: false,
    }
  },
  watch:{
    $route (){
      this.changeBGC()
    }
  },
  mounted() {
    this.changeBGC()
  },
  methods:{
    changeBGC() {
      const url = window.location.pathname
      const path = url.split('/')
      console.log(path[2])
      this.isUpcoming = false
      this.isDance = false
      this.isFundraiser = false
      this.isFamily = false
      switch (path[2]) {
        case 'upcoming':
          this.isUpcoming = true
          break
        case 'dance':
          this.isDance = true
          break
        case 'fundraiser':
          this.isFundraiser = true
          break
        case 'family':
          this.isFamily = true
          break
      }
    }
  },
}
</script>

<style scoped>
#box{
  max-width: 1200px;
  margin: 20px auto;
}
#left{
  padding: 0;
  list-style: none;
  border: 1px solid;
  border-radius: 20px;
  box-shadow: 0 0 10px black;
  text-align: center;
}
#menu{
  background-color: #800001;
  color: white;
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 0;
  text-align: center;
}
#changeColor{
  background-color: #fff;
}
</style>
