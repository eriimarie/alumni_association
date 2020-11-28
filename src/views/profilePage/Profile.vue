<template>
  <div id="box">
    <b-container>
      <b-row>
        <b-col sm="3">
          <div id="left">
            <b-img center :src="require(`../../assets/schoolLogo.png`)" style="max-width: 70px"></b-img>
            <p id="menu">Menu</p>
            <router-link :id="isUser? 'changeColor': ''" to="/profile/user" tag="li">User</router-link>
            <router-link :id="isShipping? 'changeColor': ''" to="/profile/shipping" tag="li">Edit shipping</router-link>
            <router-link :id="isDescription? 'changeColor': ''" to="/profile/editPD" tag="li">Description & Portrait</router-link>
            <router-link :id="isPassword? 'changeColor': ''" to="/profile/password" tag="li">Change password</router-link>
            <router-link :id="isOrders? 'changeColor': ''" to="/profile/orders" tag="li">Orders</router-link>
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
      isUser: false,
      isShipping: false,
      isDescription: false,
      isPassword: false,
      isOrders: false,
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
      this.isUser = false
      this.isShipping = false
      this.isDescription = false
      this.isPassword = false
      this.isOrders = false
      switch (path[2]) {
        case 'user':
          this.isUser = true
          break
        case 'shipping':
          this.isShipping = true
          break
        case 'password':
          this.isPassword = true
          break
        case 'editPD':
          this.isDescription = true
          break
        case 'orders':
          this.isOrders = true
          break
      }
    }
  },
}
</script>

<style scoped>
  #box{
    max-width: 1200px;
    margin: 0px auto;
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
