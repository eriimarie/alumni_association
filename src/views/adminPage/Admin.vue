<template>
  <div id="box">
    <b-container >
      <b-row>
        <b-col sm="3">
          <div id="left">
            <b-img center :src="require(`../../assets/schoolLogo.png`)" style="max-width: 70px"></b-img>
            <p id="menu">Menu</p>
            <router-link :id="isNews? 'changeColor': ''" to="/admin/handleNews" tag="li" v-show="isShowNews">News</router-link>
            <router-link :id="isVolunteer? 'changeColor': ''" to="/admin/handleVolunteer" tag="li" v-show="isShowVolunteer">Volunteer</router-link>
            <router-link :id="isEvents? 'changeColor': ''" to="/admin/handleEvent" tag="li" v-show="isShowEvents ">Events</router-link>
            <router-link :id="isShopping? 'changeColor': ''" to="/admin/handleShopping" tag="li" v-show="isShowShopping">Shopping</router-link>
            <router-link :id="isUser? 'changeColor': ''" to="/admin/handleUser" tag="li" v-show="isShowUser">User</router-link>
            <router-link :id="isOrder? 'changeColor': ''" to="/admin/handleOrder" tag="li" v-show="isShowOrder">Order</router-link>
            <router-link :id="isOfficer? 'changeColor': ''" to="/admin/handleOfficer" tag="li" v-show="isShowOfficer">Officer</router-link>
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
  data() {
    return{
      isShowNews: false,
      isShowVolunteer: false,
      isShowEvents: false,
      isShowShopping: false,
      isShowUser: false,
      isShowOrder: false,
      isShowOfficer: false,
      accountType: '',

      isNews: false,
      isVolunteer: false,
      isEvents:false,
      isShopping: false,
      isUser: false,
      isOrder: false,
      isOfficer: false,
    }
  },

  watch:{
    $route (){
      this.changeBGC()
    }
  },

  mounted() {
    this.getUser()
    this.changeBGC()
  },

  methods:{
    getUser() {
      const admin = this.$cookies.get("isAdmin")
      switch (admin) {
        case "1":
          this.isShowVolunteer = true
          this.isShowEvents = true
          this.isShowNews = true
          break
        case "2":
          this.isShowOrder = true
          this.isShowShopping = true
          break
        case "3":
          this.isShowUser = true
          break
        case "4":
          this.isShowNews = true
          this.isShowVolunteer = true
          this.isShowEvents = true
          this.isShowShopping = true
          this.isShowUser = true
          this.isShowOrder = true
          this.isShowOfficer = true
          break
      }
    },
    changeBGC() {
      const url = window.location.pathname
      const path = url.split('/')
      console.log(path[2])
      this.isNews = false
      this.isVolunteer = false
      this.isEvents = false
      this.isShopping = false
      this.isUser = false
      this.isOrder = false
      this.isOfficer = false
      switch (path[2]) {
        case 'handleNews':
          this.isNews = true
          break
        case 'handleVolunteer':
          this.isVolunteer = true
          break
        case 'handleEvent':
          this.isEvents = true
          break
        case 'handleShopping':
          this.isShopping = true
          break
        case 'handleUser':
          this.isUser = true
          break
        case 'handleOrder':
          this.isOrder = true
          break
        case 'handleOfficer':
          this.isOfficer = true
          break
      }
    }
  },
}
</script>

<style scoped>
  #box{
    max-width: 1200px;
    margin: 0 auto;
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
  #left{
    padding: 0;
    list-style: none;
    border: 1px solid;
    border-radius: 20px;
    box-shadow: 0 0 10px black;
    text-align: center;
    margin-top: 20px;
  }
</style>
