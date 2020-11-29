<template>
  <div id="box">
    <p id="top">{{officer.name}}</p>
    <b-card id="card">
      <b-img :src="'http://localhost:3000/'+officer.path" class="profile-img" style="max-width: 200px"></b-img>
      <b-card-text class="description"><strong>{{officer.description}}</strong></b-card-text>
      <b-card-text>Phone Number:{{officer.phone}}</b-card-text>
      <b-card-text>Email Address: {{officer.email}}</b-card-text>
    </b-card>

  </div>

</template>

<script>

export default {
  data(){
    return{
      officer:[],

    }
  },

  mounted() {
    this.getData()
  },

  methods:{
    async getData() {
      const newUrl = `/officer/detail?id=${this.$route.query.id}`
      console.log(this.$route.query.id)
      console.log(newUrl)
      await this.$axios.get(newUrl).then(res=> {
        this.officer = res.data
      })
    },

  }

}
</script>

<style scoped>
#box{
  padding: 20px;
  border: 1px solid;
  border-radius: 10px;
  box-shadow: 0 0 10px black;
  margin: 20px auto;
  display: table;
  width: 1200px;
}
#card{
  background-color: #FFEAA7;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 10px;
}
#top{
  text-align: center;
  color: white;
  background-color: #800001;
  margin-bottom: 30px;
  font-size: 25px;
}
.description{
  font-size: 18px;
}

</style>
