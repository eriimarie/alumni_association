<template>
  <div id="box">
    <h3>Orders</h3>
    <hr>

  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },

  mounted() {
    this.getData()
  },

  methods: {
    async getData() {
      await this.$axios.post('/profile/orders', {email: this.$cookies.get('email')}).then(res=>{
        const data = res.data
        console.log(data)
      })
    },


  }
}
</script>

<style scoped>

</style>
