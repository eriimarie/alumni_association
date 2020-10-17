<template>
  <div id="box">
    <b-container>
      <b-row>
        <b-col sm="3">
          <ul>
            <router-link to="/admin/handleCareer" tag="li">Career</router-link>
            <router-link to="/admin/handleVolunteer" tag="li">Volunteer</router-link>
            <router-link to="/admin/handleEvent" tag="li">Events</router-link>
            <router-link to="/admin/handleShopping" tag="li">Shopping</router-link>
            <router-link to="/admin/handleUser" tag="li">User</router-link>
            <router-link to="/admin/handleOrder" tag="li">Order</router-link>
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
name: "Admin"
}
</script>

<style scoped>
  #box{
    max-width: 1200px;
    margin: 0 auto;
  }
</style>
