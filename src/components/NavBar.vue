<template>
  <div id="box">
    <div id="top">
      <div class="w-100" id="colorTop"></div>
      <div class="w-100" id="colorBottom"></div>
      <b-row align-v="center" id="row">
        <b-col sm="4" :id="`${nameCSS}`"><a href="/index" class="aLabel">MHAA-USNR</a></b-col>
        <b-col sm="4" id="logo"><a href="/index"><b-img :src="require('../assets/schoolLogo.png')" style="max-width: 110px"></b-img></a></b-col>
        <b-col sm="4" :id="`${loginCSS}`">
          <div v-show="isLogin">
            <b-avatar :src="this.path" v-show="isLogin"></b-avatar>
            <b-dropdown :text="`${firstName}`" variant="transparent">
              <b-dropdown-item href="/profile">Profile</b-dropdown-item>
              <b-dropdown-item href="/donate">Donate</b-dropdown-item>
              <b-dropdown-item href="/volunteer">Volunteer</b-dropdown-item>
              <b-dropdown-item href="/shopping">Shop</b-dropdown-item>
              <b-dropdown-item :href="this.cart">Cart</b-dropdown-item>
              <b-dropdown-item @click="signOut">Sign Out</b-dropdown-item>
            </b-dropdown>
          </div>
          <a class="aLabel" href="/login" v-show="!isLogin"><b-img :src="require(`../assets/Account.png`)" style="max-width: 24px"></b-img> Log in</a>
        </b-col>
      </b-row>
    </div>

    <div :id="`${isCellphone}`">
      <b-navbar toggleable="lg" type="dark" variant="transparent">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse"  is-nav>
          <b-navbar-nav class="mx-auto navBorder">
            <b-nav-item href="/index"><span class="navContent">Homepage</span></b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="mx-auto navBorder">
            <b-nav-item href="/news"><span class="navContent">Alumni News</span></b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="mx-auto navBorder">
            <b-nav-item href="/history"><span class="navContent">History</span></b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="mx-auto navBorder">
            <b-nav-item href="/officer"><span class="navContent">Officers</span></b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="mx-auto navBorder">
            <b-nav-item href="/events"><span class="navContent">Events</span></b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      isLogin: false,
      firstName:'',
      lastName: '',
      path: '',
      cart: '',
      nameCSS: 'name',
      loginCSS: 'login',
      isCellphone: '',
    }
  },

  created() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },

  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },

  mounted() {
    this.getData()
  },

  methods: {
    async getData() {
      await this.$axios.post('/profile/user', {email: this.$cookies.get('email')}).then(res=>{
        if (res.data === ''){
          this.isLogin = false
        } else {
          this.isLogin = true
          this.firstName = res.data.firstName
          this.lastName = res.data.lastName
          this.path = "http://localhost:3000/" + res.data.avatarPath
          this.cart = "http://localhost:8080/cart?email=" + this.$cookies.get('email')
        }
      })
    },

    signOut() {
      this.$cookies.set('email', '')
      this.$cookies.set('isAdmin', '')
      this.isLogin = false
      this.$router.push('index')
    },

    handleResize() {
      if (window.outerWidth <= 720) {
        this.nameCSS = "nameSM"
        this.loginCSS = "loginSM"
      } else {
        this.nameCSS = "name"
        this.loginCSS = "login"
      }
      if (window.outerWidth <= 1230){
        this.isCellphone = "isCellphone"
      } else {
        this.isCellphone = ''
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

  #isCellphone{
    background-color: #880001;
  }

  .navBorder{
    background-color: #880001;
    width: 200px;
  }

  .navContent{
    color: white;
    width: 200px;
    text-align: center;
    display: table-cell;
  }

  .aLabel{
    color: #880001;
  }

  .navbarContent{
    color: #880001;
  }

  #top{
    position: relative;
  }

  #colorTop{
    background-color: #CEC094;
    height: 25px;
    position: absolute;
  }

  #colorBottom{
    background-color: #CEC094;
    height: 25px;
    position: absolute;
    bottom: 0;
  }

  #name{
    text-align: left;
    color: #880001;
    font-size: 20px;
  }

  #logo {
    text-align: center;
  }

  #login{
    text-align: right;
    color: #880001;
    font-size: 20px;
  }

  #nameSM{
    text-align: center;
    color: #880001;
  }

  #loginSM{
    text-align: center;
    color: #880001;
  }

  .inlineHR{
    background-color: #CEC094;
  }

  .profile-img {
    border-radius: 50%;
  }
</style>
