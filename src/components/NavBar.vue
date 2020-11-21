<template>
  <div id="box">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="/index">image</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse"  is-nav>
        <b-navbar-nav class="mx-auto">
          <b-nav-item href="/resources/career">Career</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="mx-auto">
          <b-nav-item href="/resources/events">Events</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="mx-auto">
          <b-nav-item href="/shopping">Market</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="mx-auto">
          <b-nav-item href="/donate">Donate</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="mx-auto">
          <b-nav-item href="/officer">Officer</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav  class="ml-auto" v-show="isLogin">
          <b-avatar :src="this.path" v-show="isLogin"></b-avatar>
          <b-nav-item-dropdown text="User">
            <b-dropdown-item href="/profile">Profile</b-dropdown-item>
            <b-dropdown-item :href="this.cart">Cart</b-dropdown-item>
            <b-dropdown-item @click="signOut">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
        <b-navbar-nav v-show="!isLogin">
          <b-button href="/login">Log in</b-button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return{
      isLogin: false,
      path: '',
      cart: '',
    }
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
    }
  }

}
</script>

<style scoped>
  #box{
    max-width: 1200px;
    margin: 0 auto;
  }
  .profile-img {
    border-radius: 50%;
  }
</style>
