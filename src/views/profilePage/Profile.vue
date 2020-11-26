<template>
  <div id="box">
    <b-container>
      <b-row>
        <b-col sm="3" id="left">
          <b-img center :src="require(`../../assets/logo.webp`)" style="max-width: 70px"></b-img>
          <p id="menu">Menu</p>
          <router-link class="routerLink" to="/profile/user" tag="li">User</router-link>
          <router-link class="routerLink" to="/profile/shipping" tag="li">Edit shipping</router-link>
          <router-link class="routerLink" to="/profile/editPD" tag="li">Description & Portrait</router-link>
          <router-link class="routerLink" to="/profile/password" tag="li">Change password</router-link>
          <router-link class="routerLink" to="/profile/orders" tag="li">Orders</router-link>
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

  }
}
</script>

<style scoped>
  #box{
    max-width: 1200px;
    margin: 20px auto;
  }
  #menu{
    background-color: #800001;
    color: white;
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 0;
    text-align: center;
  }
  .routerLink{
    text-align: center;
  }
  #left{
    padding: 0;
    list-style: none;
    border: 1px solid;
    border-radius: 20px;
    box-shadow: 0 0 10px black;
  }
</style>
