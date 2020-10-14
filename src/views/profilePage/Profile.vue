<template>
  <div id="box">
    <b-container>
      <b-row>
        <b-col sm="3">
          <ul>
            <router-link to="/profile/user" tag="li">User</router-link>
            <router-link to="/profile/shipping" tag="li">Edit shipping</router-link>
            <router-link to="/profile/editPD" tag="li">Description & Portrait</router-link>
            <router-link to="/profile/password" tag="li">Change password</router-link>
            <router-link to="/profile/orders" tag="li">Orders</router-link>
          </ul>
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
    margin: 0 auto;
  }
</style>