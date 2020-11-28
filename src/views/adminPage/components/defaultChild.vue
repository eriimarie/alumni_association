<template>
  <div id="box">
    <div id="img">
      <b-img center :src="require(`../../../../src/assets/adminLogo.png`)" style="max-width: 300px"></b-img>
    </div>
    <div id="text">
      <p>Welcome to the admin page</p>
      <p>Account type: {{accountType}}</p>
    </div>


  </div>
</template>

<script>
export default {
name: "default page",
  data() {
    return{
      accountType: '',
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
          this.accountType = 'Professor Account'
          break
        case "2":
          this.accountType = 'Store Account'
          break
        case "3":
          this.accountType = 'Assistant Account'
          break
        case "4":
          this.accountType = 'Supervisor Account'
          break
      }
    },
  }
}
</script>

<style scoped>
#box{
  margin: 20px auto;
  padding: 20px;
  border: 1px solid;
  border-radius: 40px;
  box-shadow: 0 0 10px black;
}
#img{
  opacity: 0.5;
}
#text{
  text-align: center;
  font-size: 20px;
  color: gray;
  margin-top: 20px;
}
</style>
