<template>
  <div>
    <b-card>
      <b-img :src="'http://localhost:3000/'+officer.path" class="profile-img" style="max-width: 500px"></b-img>
      <b-card-text>Name: {{officer.name}}</b-card-text>
      <b-card-text>Description:{{officer.description}}</b-card-text>
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

</style>
