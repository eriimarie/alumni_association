<template>
  <div id="box">
    <b-container>
      <b-row>
        <b-col sm="3">
          <div id="left">
            <b-img center :src="require(`../../assets/schoolLogo.png`)" style="max-width: 70px"></b-img>
            <p id="menu">Volunteer</p>
            <router-link :id="isLeadership? 'changeColor': ''" to="/volunteer/leadership" tag="li">Leadership opportunity</router-link>
            <router-link :id="isCharity? 'changeColor': ''" to="/volunteer/charity" tag="li">Charity events</router-link>
            <router-link :id="isEducational? 'changeColor': ''" to="/volunteer/educational" tag="li">Educational institution</router-link>
            <router-link :id="isHealthcare? 'changeColor': ''" to="/volunteer/healthcare" tag="li">Healthcare center</router-link>
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
  components: {
  },
  data() {
    return{
      isLeadership: false,
      isCharity: false,
      isEducational: false,
      isHealthcare: false,
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
      this.isLeadership = false
      this.isCharity = false
      this.isEducational = false
      this.isHealthcare = false
      switch (path[2]) {
        case 'leadership':
          this.isLeadership = true
          break
        case 'charity':
          this.isCharity = true
          break
        case 'educational':
          this.isEducational = true
          break
        case 'healthcare':
          this.isHealthcare = true
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
.routerLink{
  background-color: #fff;
}
</style>
