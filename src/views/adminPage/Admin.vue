<template>
  <div id="box">
    <b-container>
      <b-row>
        <b-col sm="3">
          <ul>
            <router-link to="/admin/handleNews" tag="li" v-show="isShowNews">News</router-link>
            <router-link to="/admin/handleVolunteer" tag="li" v-show="isShowVolunteer">Volunteer</router-link>
            <router-link to="/admin/handleEvent" tag="li" v-show="isShowEvents ">Events</router-link>
            <router-link to="/admin/handleShopping" tag="li" v-show="isShowShopping">Shopping</router-link>
            <router-link to="/admin/handleUser" tag="li" v-show="isShowUser">User</router-link>
            <router-link to="/admin/handleOrder" tag="li" v-show="isShowOrder">Order</router-link>
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
  data() {
    return{
      isShowNews: false,
      isShowVolunteer: false,
      isShowEvents: false,
      isShowShopping: false,
      isShowUser: false,
      isShowOrder: false,
    }
  },

  mounted() {
    this.getUser()
  },

  methods:{
    getUser() {
      const admin = this.$cookies.get("isAdmin")
      switch (admin) {
        case "1":
          this.isShowVolunteer = true
          this.isShowEvents = true
          break
        case "2":
          this.isShowOrder = true
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
</style>
